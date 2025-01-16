import { TableContext } from "../Context/DataTableProvider";
import { useContext } from "react";

export function useDataTable() {
    const context = useContext(TableContext);
    if (context === undefined) {
        throw new Error('useDataTable must be used within a DatatableProvider');
    }

    return context;
}

export default useDataTable;