import {ReactNode} from 'react';
import useDataTable from "../Utils/useDataTable";
import {Button} from "@tremor/react";
import {BiSolidChevronLeft, BiSolidChevronRight, BiSolidChevronsLeft, BiSolidChevronsRight} from "react-icons/bi";

interface FooterProps {
  children: ReactNode
}

function Footer({children} : FooterProps) {
    const { items, currentPage, setCurrentPage, onPageChange, page  } = useDataTable();

    const startsWith = () => {
        return ((currentPage ?? 1) - 1) * (page?.pageSize ?? 50);
    }

    const pageItems = () => {
        return startsWith() + items.length;
    }

    return (
        <div className={'grid-footer h-8 flex border-t-[1px] border-t-slate-200 dark:border-t-table-border-color'}>
            <div className={"flex text-xs h-full items-center justify-center"}>
                {children}
            </div>
            <div className={'paginationContent flex'}>
                {items.length > 0 &&
                    (
                        <>
                            <Button
                                className={"dark:hover:bg-gray-lemon-dark-secondary rounded-none p-1 px-4 border-0"}
                                onClick={() => {
                                    if(setCurrentPage) setCurrentPage(1);
                                    if( onPageChange ) {
                                        onPageChange(1);
                                    }
                                }}
                                disabled={currentPage === 1}
                            >
                                <BiSolidChevronsLeft className="text-sm" />
                            </Button>

                            <Button
                                className={"dark:hover:bg-gray-lemon-dark-secondary rounded-none p-1 px-4 border-0"}
                                onClick={() => {
                                    const newPage = (currentPage ?? 1) - 1;
                                    if(setCurrentPage) setCurrentPage(newPage);
                                    if( onPageChange ) {
                                        onPageChange(newPage);
                                    }
                                }}
                                disabled={currentPage === 1}
                            >
                                <BiSolidChevronLeft className="text-sm" />
                            </Button>

                            <Button
                                className={"dark:hover:bg-gray-lemon-dark-secondary rounded-none p-1 px-4 border-0"}
                                disabled={currentPage === 1}
                            >
                                {currentPage ?? 1}
                            </Button>

                            <Button
                                className={"dark:hover:bg-gray-lemon-dark-secondary rounded-none p-1 px-4 border-0"}
                                onClick={() => {
                                    const newPage = (currentPage ?? 1) + 1;
                                    if(setCurrentPage) setCurrentPage(newPage);
                                    if( onPageChange ) {
                                        onPageChange(newPage);
                                    }
                                }}
                                disabled={currentPage === page?.lastPage}
                            >
                                <BiSolidChevronRight className="text-sm" />
                            </Button>

                            <Button
                                className={"dark:hover:bg-gray-lemon-dark-secondary rounded-none p-1 px-4 border-0"}
                                onClick={() => {
                                    const newPage = page?.lastPage ?? 1;
                                    if(setCurrentPage) setCurrentPage(newPage);
                                    if( onPageChange ) {
                                        onPageChange(newPage);
                                    }
                                }}
                                disabled={currentPage === page?.lastPage}
                            >
                                <BiSolidChevronsRight className="text-sm" />
                            </Button>

                            <a className={'l-btn l-btn-small l-btn-plain '} onClick={()=>{}}>
                      <span className="l-btn-left l-btn-icon-left">
                        <span className="l-btn-text l-btn-empty">&nbsp;</span>
                        <span className="l-btn-icon pagination-next">
                          <i className="fa-sharp fa-solid fa-rotate-right"
                             style={{fontSize: 13, lineHeight: '17px'}}></i>
                        </span>
                      </span>
                            </a>

                            <a
                                className={'l-btn l-btn-small l-btn-plain l-btn-disabled'}
                                onClick={()=>{}}>
                      <span className="l-btn-left l-btn-icon-left">
                        <span className="l-btn-text l-btn-empty">&nbsp;</span>
                        <span className="l-btn-icon pagination-next">
                          <i className="fa-solid fa-caret-right"></i>
                        </span>
                      </span>
                            </a>

                            <a className={'l-btn l-btn-small l-btn-plain l-btn-disabled'}
                               onClick={()=>{}}>
                      <span className="l-btn-left l-btn-icon-left">
                        <span className="l-btn-text l-btn-empty">&nbsp;</span>
                        <span className="l-btn-icon pagination-next">
                          <i className="fa-solid fa-forward-step" style={{fontSize: 13, lineHeight: '17px'}}></i>
                        </span>
                      </span>
                            </a>

                        </>)
                }

            </div>
            <div className={'paginationInfo text-right ml-auto flex text-xs items-center justify-end'}>
            <span className={'dark:text-white'}>
              Displaying {startsWith() + 1} to {pageItems()} of {page?.totalItems ?? 0} items
            </span>
            </div>
        </div>
    );
}

export default Footer;