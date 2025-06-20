import { ReactNode } from "react";
import useDataTable from '../Utils/useDataTable';
import clsx from "clsx";

interface GripProps {
    children: ReactNode
}

const Grid = ({children}: GripProps) => {
    const { height, cardTemplate } = useDataTable();
    
    // style={ (height) ? {height: height} : {}}
    return (
        <>
            <div className={clsx(
                "relative overflow-hidden grow grid-view bg-transparent dark:border-table-border-color-dark w-full z-0",
                !cardTemplate && 'overflow-hidden',
                height && `has-height`,
            )}
            >
                {children}
            </div>
        </>
    );
}

export default Grid;