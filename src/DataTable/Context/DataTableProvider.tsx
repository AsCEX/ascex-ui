import { createContext, ReactNode, useContext, useMemo, useRef, useState} from "react";
import {DataTableTypes} from "../DataTableTypes";

export const TableContext = createContext(DataTableTypes);

interface DataTableProviderProps{
    children: ReactNode,
    context: any[]
}

function DataTableProvider({children, context}: DataTableProviderProps) {

    const defaultContext = useContext(TableContext) ?? {};

    const [columnDefs, setColumnDef] = useState({});
    const [table, setTable] = useState({});

    const headerLeftRef = useRef(null);
    const headerRightRef = useRef(null);
    const leftPaneRef = useRef(null);
    const rightPaneRef = useRef(null);
    // const scrollXRef = useRef(null);

    const newContext = useMemo(
        () => ({
            ...defaultContext,
            ...context,
            columnDefs,
            setColumnDef,
            table,
            setTable,
            headerLeftRef,
            headerRightRef,
            leftPaneRef,
            rightPaneRef
        }),
        [
            context,
            defaultContext,
            columnDefs,
            setColumnDef,
            table,
            setTable,
            headerLeftRef,
            headerRightRef,
            leftPaneRef,
            rightPaneRef
        ]
    );

    if (!children) {
        return null;
    }

    return (<TableContext.Provider value={newContext}>{children}</TableContext.Provider>);

}



export default DataTableProvider;

