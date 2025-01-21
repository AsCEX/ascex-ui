import Pane from "../Components/Pane";
import Header from "./Header";
import useDataTable from "../Utils/useDataTable.jsx";

import debounce from "lodash.debounce";

function Body() {

    const {
        items,
        name,
        options,
    } = useDataTable();

    const {
        contentWidth = 0,
        leftPaneWidth = 0,
        paddingWidth = 0,
        rowHeight = 0,
        scrollXRef
    } = options ?? {};

    const setScroll = debounce( (e) => {
        const siteSettings = JSON.parse( sessionStorage.getItem('site_settings') ?? '' );

        const _scrollLeft = siteSettings?.scrollLeft ?? {};
        _scrollLeft[name] = e.target.scrollLeft;
        const updateSettings = {...siteSettings, scrollLeft: _scrollLeft};

        sessionStorage.setItem("site_settings", JSON.stringify(updateSettings));
    }, 500);

    return (
        <>
            <div ref={scrollXRef} className="pane-container" onScroll={(e) => setScroll(e)}>
                <div className="grid-container" style={{width: contentWidth + leftPaneWidth}}>
                    <div className="left-pane border-r-[1px] border-r-slate-200 dark:border-r-table-border-color" style={{width: leftPaneWidth, height: (items?.length + 1) * rowHeight}}>
                        <Header className={"header-left-pane"} />
                        <Pane items={items} name={"dataLeftPane"} side={"left"} width={leftPaneWidth}/>
                    </div>

                    <div className="divider-pane" style={{left: leftPaneWidth}}>
                        <div className="line noevents"></div>
                        <div className="dragHandle noevents"></div>
                    </div>


                    <div className="right-pane border-r-[1px] border-r-slate-200 dark:border-r-table-border-color "
                        style={{
                            left: leftPaneWidth - 1,
                            width: contentWidth,
                            height: (items?.length + 1) * rowHeight
                        }}
                    >
                        <Header className={"header-left-pane"} side={'right'}/>

                        <Pane
                            items={items}
                            name={"dataRightPane"}
                            side={"right"}
                            width={contentWidth+paddingWidth}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;