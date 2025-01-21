import { DataTableContext } from "../Context/DataTableContext";
import { useContext } from "react";

export function useDataTable() {
    const context = useContext(DataTableContext);
    console.log('useCtx', context);
    if (context === undefined) {
        throw new Error('useDataTable must be used within a DatatableProvider');
    }

    return context;
}

export default useDataTable;