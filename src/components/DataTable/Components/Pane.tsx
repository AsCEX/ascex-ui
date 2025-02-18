import Row from "./Row";
import clsx from "clsx";
import {rowHeightTopClass} from "@components/DataTable/Utils/size.ts";
import useDataTable from "@components/DataTable/Utils/useDataTable.tsx";

interface PaneProps {
    items: unknown[],
    name: string,
    side: string,
    width: string | number
}

function Pane({items, name, side, width = "auto"}: PaneProps) {

    const { options} = useDataTable();
    const { rowHeight} = options ?? {};



    return (
        <div className={clsx(name,
            rowHeightTopClass[(rowHeight ? rowHeight : 'xs')],
            "pane")} >
            <div
                className={`${name}InnerContent paneInnerContent`}
                style={{
                    width: width,
                    transform: 'translate3d(0px, 0px, 0px)',
                }}
            >
                {items?.map((item, i) => (
                    <Row key={i} index={i} isEven={(i % 2 === 0)} item={item} side={side} />
                ))}
            </div>
        </div>
    );
}

export default Pane;