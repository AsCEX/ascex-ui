import {ReactNode, RefObject} from "react";

export interface HeaderTypes {
    className?: string,
    columnIndex?: number,
    name: string,
    label?: string,
    freeze?: boolean,
    key?: string,
    width?: number,
    left?: number,
    showMenu?: boolean,
    type?: string,
    render?: (data: unknown, row: unknown) => ReactNode,
}

export interface DataTableOptionTypes {
    contentWidth?: number,
    freezePane?: number,
    resizable?: boolean,
    height?: number | string | null,
    leftPaneWidth?: number,
    rowHeight?: number,
    rowNumberWidth?: number,
    paddingWidth?: number,
    scrollXRef?: RefObject<HTMLDivElement>
}

export interface DataTableContextProps {
    className?: string,
    children?: ReactNode,
    footer?: ReactNode,
    headers: HeaderTypes[],
    height?: number | string,
    loaded?: boolean,
    name: string,
    items: unknown[],
    options?: DataTableOptionTypes,
}

const DataTableParams = {
    start: 0,
    length: 50,
    searchTerm: '',
    sorts: [],
    filters: [],
};

const DataTableTypes = {
    headers: [],
    initHeaders: [],
    isLoaded: false,
    items: [],
    height: 0,
    width: 0,
    name: '',
    resizable: false,
    contentWidth: 0,
    contentHeight: 0,
    leftPaneWidth: 75,
    paddingWidth: 80,
    freezePane: 0,
    rowHeight: 32,
    rowNumberWidth: 48,
    selectedItems: [],
    controller: new AbortController(),
    scrollXRef: ()=>{},
    url: ''
};

export {
    DataTableParams,
    DataTableTypes
};