import { ReactNode } from "react";
import useDataTable from '../Utils/useDataTable';

interface GripProps {
    children: ReactNode
}

const Grid = ({children}: GripProps) => {
    const { height } = useDataTable();
    
    // style={ (height) ? {height: height} : {}}
    return (
        <>
            <div className={"relative overflow-hidden grid-view dark:bg-table-bg-dark bg-table-bg dark:border-table-border-color-dark w-full " + ((height) ? `has-height ` : '')}

            >
                {children}
            </div>
        </>
    );
}

export default Grid;