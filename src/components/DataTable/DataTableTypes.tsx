import {ReactNode, RefObject} from "react";

export interface HeaderTypes {
    badgeClass?: string;
    className?: string,
    columnIndex?: number,
    dateFormat?: string,
    freeze?: boolean,
    key?: string,
    label?: string,
    left?: number,
    lists?: { id: unknown; text?: string; className?: string }[];
    min?: number;
    name: string,
    onClick?: (item: unknown) => void;
    render?: (data: unknown, row: unknown) => ReactNode,
    showMenu?: boolean,
    type?: string,
    width?: number,
}

export interface DataTableOptionTypes {
    contentWidth?: number,
    freezePane?: number,
    resizable?: boolean,
    height?: number | string | null,
    leftPaneWidth?: number,
    rowHeight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined,
    rowNumberWidth?: number,
    paddingWidth?: number,
    scrollXRef?: RefObject<HTMLDivElement>
}

export interface DataTableContextProps {
    className?: string,
    children?: ReactNode,
    cardTemplate?: (rowNumber: number, row: any) => JSX.Element,
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