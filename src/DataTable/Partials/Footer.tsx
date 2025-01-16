import { ReactNode } from 'react';
import useDataTable from "../Utils/useDataTable";

interface FooterProps {
  children: ReactNode
}

function Footer({children} : FooterProps) {
    const { items  } = useDataTable();

    return (
        <div className={'grid-footer h-8 flex border-t-[1px] border-t-slate-200 dark:border-t-table-border-color'}>
            <div className={"flex text-xs h-full items-center justify-center"}>
                {children}
            </div>
            <div className={'paginationContent'}>
                {items.length > 0 &&
                    (
                        <>
                            <a
                                className={'l-btn l-btn-small l-btn-plain'}
                                onClick={()=>{}}>
                      <span className="l-btn-left l-btn-icon-left">
                        <span className="l-btn-text l-btn-empty">&nbsp;</span>
                        <span className="l-btn-icon pagination-next">
                          <i className="fa-solid fa-backward-step" style={{fontSize: 13, lineHeight: '17px'}}></i>
                        </span>
                      </span>
                            </a>
                            <a
                                className={'l-btn l-btn-small l-btn-plain l-btn-disabled'}
                                onClick={()=>{}}>
                      <span className="l-btn-left l-btn-icon-left">
                        <span className="l-btn-text l-btn-empty">&nbsp;</span>
                        <span className="l-btn-icon pagination-prev">
                          <i className="fa-solid fa-caret-left"></i>
                        </span>
                      </span>
                            </a>

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
              Displaying 1 to 50 of 130 items
            </span>
            </div>
        </div>
    );
}

export default Footer;