// import useDataTable from "./Utils/useDataTable";
import { useRef } from "react";
import { HeaderTypes } from "./DataTableTypes";
import clsx from "clsx";
import { rowHeightClass } from "@components/DataTable/Utils/size.ts";
import useDataTable from "@components/DataTable/Utils/useDataTable.tsx";

interface DataTableHeaderProps {
  column?: number,
  className?: string,
  header: HeaderTypes
}

function DataTableHeader( { className, header }: DataTableHeaderProps ){

  const {
    options,
  } = useDataTable();
  const rowHeight = options?.rowHeight ?? null;
  const dropdownRef = useRef(null);
  // const searchInput = useRef(null);
  // const colResizeRef = useRef(null);
  // const colResizeStart = useRef(-1);

  // const [loaded, setLoaded] = useState(false);
  // const [isOpen, ] = useState(false)
  // const [sort, setSort] = useState(0);
  // const [search, setSearch] = useState("");
  // const [options, ] = useState(props?.options);
  // const columnSearch = false;
  // const {
  //   resizable
  // } = useDataTable();

  // const [ , setListening] = useState(false)
  /* useEffect(() => {
    if(props.options?.searchable || props.options?.sortable){
        // document.addEventListener(`click`, documentClick);
    }

    if( props.options?.resizable ?? props?.resizable ?? false){
      // colResizeRef.current.addEventListener('mousedown', mouseDown);
      // document.addEventListener('mousemove', mouseDrag);
      // document.addEventListener('mouseup', mouseUp);
    }

    return () => {
        // document.removeEventListener(`click`, documentClick);
        // colResizeRef.current?.removeEventListener('mousedown', mouseDown);
        // document.removeEventListener('mousemove', mouseDrag);
        // document.removeEventListener('mouseup', mouseUp);
    }

  }, []);

  const mouseDown = (event: any) => {
    // colResizeRef.current.classList.add('drag');
    // colResizeStart.current = event.pageX;

    // const box = colResizeRef.current.getBoundingClientRect();
    // colResizeRef.current.style.top = `${box.y}px`;
    // colResizeRef.current.style.left = `${box.x}px`;
    // colResizeRef.current.style.position = "fixed";
    event.stopPropagation();
  }
  const mouseUp = (event: any) => {
    // if( colResizeStart.current > -1 ) {

    //   colResizeRef.current.style.position = "absolute";
    //   colResizeRef.current.style.top = `0px`;
    //   colResizeRef.current.style.left = `auto`;
    //   const offset = event.pageX - colResizeStart.current;
    //   const box = colResizeRef.current.parentElement.getBoundingClientRect();
    //   const newWidth = box.width + offset;

    //   props.onColumnResize(props.columnIndex, newWidth);
    //   colResizeRef.current.classList.remove('drag');
    //   colResizeStart.current = -1;
    // }
    event.stopPropagation();
  }
  const mouseDrag = (event: any) => {
    // if( colResizeStart.current > -1 ){
    //   const col = colResizeRef.current;
    //   const box = colResizeRef.current.getBoundingClientRect();

    //   const cursorPosition = event.pageX;
    //   colResizeRef.current.style.left = `${cursorPosition}px`;
    // }
  }

  const documentClick = (e: any) => {
    // if( dropdownRef.current ){
    //   const cur = dropdownRef.current;
    //   const node = e.target;
    //   if (cur.contains(node)) return;
    // }
  } */

  /*useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(loaded){
        if( typeof props.changeSearch !== "undefined"){
          props.changeSearch({
            name: props.options.name,
            value: search !== "" ? search : undefined,
            type: props.options.type ?? "string"
          });
        }
      }
    }, 500);


    return () => clearTimeout(delayDebounceFn);

  }, [search]);*/

  /*useEffect( () => {
    setLoaded(true);

    return () => {
      setListening(false);
    }
  }, []);*/

  /*const toggle = () => { console.log('toggle');
    if( (props.options.showMenu ?? true) && colResizeStart.current == -1){
      // setIsOpen(!isOpen);
    }
  }*/

  /*
    const handleSort = ( i: number ) => {
      if( i === sort){
        setSort(0);
        props.changeSort({
          name: props.options.name,
          value: undefined,
          type: props.options.type ?? "string"
        });
      }else{
        setSort(i);
        props.changeSort({
          name: props.options.name,
          value: (i == 1) ? "asc" : "desc",
          type: props.options.type ?? "string"
        });
      }
  }
*/

  const rowHeightCls: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = rowHeight ?? "xs";
  return (
    <div
      className={clsx("cell",
      rowHeightClass[rowHeightCls],
      "bg-slate-50 dark:bg-table-header-bg-dark",
      "text-table-header-text-color-dark dark:text-table-header-text-color-dark ",
      "border-l-[1px] border-l-slate-200 dark:border-l-table-border-color-dark ",
      "border-b-[1px] border-b-slate-200 dark:border-b-table-border-color-dark ",
      "relative z-10 ",
      className)}
      style={{ left: (header?.left ?? 0) -1, width: header?.width ?? 120, minWidth: header?.width ?? 120 }}
      ref={dropdownRef}
    >
      <div className="contentWrapper relative cursor-pointer group zheader "
           // onClick={ () => toggle() }
      >
        {/*{ (sort > 0 || search !== "") &&
        <span className="absolute bottom-0 flex h-[1px] w-full">
          <span className="animate-pulse absolute inline-flex h-full w-full bg-orange-200 opacity-75"></span>
          <span className="relative inline-flex h-full w-full bg-orange-300"></span>
        </span> }*/}
        <div className="dataWrapper flex h-full w-full pl-2 justify-start items-center">
                    <div className="line-height-4 font-family-default font-weight-default truncate">
                      {header?.label}
                    </div>
                    {/*{ (options?.searchable || options?.sortable) &&
                    <div className={"absolute right-[-12px] top-[2px] cursor-pointer text-[#ffbe99] group-hover:text-[#fe8640]"}><i className={"fa fa-ellipsis-v"}></i></div>
                    }*/}
        </div>

      </div>
      {/*{( resizable ) &&
      <div className={"zhandle"} ref={colResizeRef}></div>
      }*/}

     {/* { isOpen && columnSearch &&
        <div
          className="zHeaderMenu absolute left-0 top-6 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}
        >
          <div className="py-1" role="none">
            { options?.searchable &&
            <div className={"border-t border-slate-400/20 py-3 px-3.5"}>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm"><i className={"fa fa-search"}></i> </span>
                </div>
                <input type="text"
                       autoFocus={true}
                       ref={searchInput}
                       value={search ?? ""}
                       onChange={ (e) => { setSearch(e.target.value);}}
                       className="block w-full rounded-md border-0 indent-1 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       placeholder={"Search..."} />
              </div>

                <div className="mt-2 space-y-2 hidden">
                  <div className="flex items-center justify-center">
                    <div className="flex h-6 items-center">
                      <input id="comments" name="comments" type="checkbox" className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-0 ring-0" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="comments" className="text-xs font-medium cursor-pointer leading-6 text-gray-900">Blanks</label>
                    </div>
                  </div>
                </div>
            </div>
            }


            { options?.sortable &&
              <div className={"border-t border-slate-400/20 py-3 px-3.5"}>
                <div
                  className={"cursor-pointer flex items-center rounded-md p-1.5 mb-2 hover:bg-slate-100 text-slate-600 text-xs font-semibold " + ((sort == 1) ? "bg-slate-100" : "") }
                  onClick={()=>handleSort(1)}
                >
                  <i className={"mr-2.5 w-5 flex-none fa fa-sort-amount-down-alt"}></i>
                  <span><span className="sortOrderLabel">A → Z</span> Ascending</span>
                </div>

                <div
                  className={"cursor-pointer flex items-center rounded-md p-1.5 mb-2 hover:bg-slate-100 text-slate-600 text-xs font-semibold " + ((sort == 2) ? "bg-slate-100" : "")}
                  onClick={()=>handleSort(2)}
                >
                  <i className={"mr-2.5 w-5 flex-none fa fa-sort-amount-up"}></i>
                  <span ><span className="sortOrderLabel">Z → A</span> Descending</span>
                </div>
              </div>
            }
          </div>
        </div>}*/}

    </div>
  );
}

export default DataTableHeader;
