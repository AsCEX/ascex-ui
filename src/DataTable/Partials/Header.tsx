import DataTableHeader from "../DataTableHeader";
import useDataTable from "../Utils/useDataTable";
import {isMobile} from 'react-device-detect';

interface HeaderProps {
    className: string,
    side?: string
}

function Header( {
    className,
    side = 'left'
}: HeaderProps) {
    const { headers, options } = useDataTable();

    const {
        contentWidth = 0,
        freezePane = 0,
        paddingWidth = 0,
        leftPaneWidth,
        rowNumberWidth = 0
    } = options ?? {};

    return (
        <div className={"pane " + className} style={{width: (side === 'left') ? leftPaneWidth : contentWidth + paddingWidth}} >
            <div className="pane-content">
                <div className="headerRow">

                    {side === 'left' && <div className={"staticCell bg-slate-50 dark:bg-table-header-bg-dark " +
                        "border-b-[1px] border-b-slate-200 dark:border-b-table-border-color " +
                        "text-table-header-text-color-dark dark:text-table-header-text-color-dark"}
                         style={{width: rowNumberWidth}}>
                        <div className="rowNumber">
                            <div className="checkbox hidden items-center justify-center text-white">
                                <input type="checkbox"/>
                            </div>
                        </div>
                    </div>}

                    {headers.map((header, i) => {
                        if (i >= freezePane && side === 'left') {
                            return;
                        }

                        if (i < freezePane && side === 'right' && !isMobile) {
                            return;
                        }

                        return <DataTableHeader
                            key={name + '_hl_' + i}
                            // columnIndex={i}
                            options={header}
                            // show={false}
                            // columnSearch={false}
                            /*changeSort={(data) => headerSort(data)}
                            changeSearch={(data) => headerFilter(data)}
                            onColumnResize={(i, width) => rebuildHeaders(i, width)}
                            resizable={resizable ?? true}*/
                        />;

                    })}
                </div>
            </div>
        </div>
    );
}

export default Header;