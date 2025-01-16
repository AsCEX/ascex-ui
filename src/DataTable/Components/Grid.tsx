import { ReactNode } from "react";
import useDataTable from '../Utils/useDataTable';

interface GripProps {
    children: ReactNode
}

const Grid = ({children}: GripProps) => {
    const { height } = useDataTable();
    return (
        <>
            <div className={"relative overflow-hidden grid-view dark:bg-table-bg-dark bg-table-bg dark:border-table-border-color-dark w-full " + ((height) ? `has-height ` : '')}
                style={{height: height || undefined}}
            >
                {children}
            </div>
        </>
    );
}

export default Grid;