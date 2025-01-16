import Cell from "./Cell";
import useDataTable from "../Utils/useDataTable";

interface RowProps {
    index: number,
    isEven: boolean,
    item: any,
    side: string
}

function Row({
                  index,
                  isEven,
                  item,
                  side = 'left',
              }: RowProps) {

    const { headers, freezePane, rowNumberWidth } = useDataTable();


    const rowHoverIn = (e: any, side: string) => {
        const rowEl = e.target.closest(".dataRow");
        const gridEl = e.target.closest(".grid-container");
        const rowIndex = Array.prototype.indexOf.call(rowEl.parentElement.children, rowEl);

        let pane = gridEl.querySelector('.pane.dataLeftPane > div');
        if( side === "left"){
            pane = gridEl.querySelector('.pane.dataRightPane > div');
        }

        rowEl.classList.add('hover')
        pane.children.item(rowIndex).classList.add('hover');
    };

    const rowHoverOut = (e: any, side: string) => {
        const rowEl = e.target.closest(".dataRow");
        const gridEl = e.target.closest(".grid-container");
        const rowIndex = Array.prototype.indexOf.call(rowEl.parentElement.children, rowEl);

        let pane = gridEl.querySelector('.pane.dataLeftPane > div');
        if( side === "left"){
            pane = gridEl.querySelector('.pane.dataRightPane > div');
        }

        rowEl.classList.remove('hover')
        pane.children.item(rowIndex).classList.remove('hover');
    };

    return (
        <div
            className={
                'group dataRow ' +
                (isEven ? 'even ' : 'odd ')
                /*+
                (contextMenu.contextMenuId === item.id && contextMenuItem
                    ? 'contextMenu '
                    : ' ') +
                (isSelected(item.id) ? 'selected ' : ' ')*/
            }
            style={{top: index * 32, bottom: 'auto', left: "-1px"}}
            onMouseEnter={(e) => rowHoverIn(e, side)}
            onMouseLeave={(e) => rowHoverOut(e, side)}
        >
            {side === 'left' &&  <div
                className={"staticCellContainer group-[.even]:dark:bg-table-bg-dark group-[.odd]:dark:bg-table-bg-odd-dark " +
                    "group-[.even]:bg-table-bg group-[.odd]:bg-table-bg-odd " +
                    "border-b-[1px] border-b-slate-200 dark:border-b-table-border-color " +
                    "text-table-header-text-color-dark dark:text-table-header-text-color-dark"}
                style={{width: rowNumberWidth}}
            >
                <div className="m-2 items-center justify-center text-white hidden">
                    <input
                        type="checkbox"
                        /*checked={isSelected(item.id) ?? false}
                        onChange={() => selectRow(item.id)}*/
                    />
                </div>
                <div className="rowNumber ml-2 ">
                    <div className="numberText">
                        {index + 1}
                    </div>
                </div>
            </div>
            }
            {headers.map((header: any, i: number) => {
                if (i >= freezePane && side === 'left') return;
                if (i < freezePane && side === 'right') return;
                return <Cell
                    key={i}
                    header={header}
                    item={item}
                />
            })}
        </div>
    );
}


export default Row;