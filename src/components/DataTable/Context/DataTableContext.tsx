import {createContext, useState} from "react";
import {DataTableContextProps} from "@components/DataTable/DataTableTypes";

const defaultLeftPaneWidth = 48;

// eslint-disable-next-line react-refresh/only-export-components
export const DataTableContext = createContext<DataTableContextProps>({} as DataTableContextProps);

export const DataTableProvider = ({
                                      cardTemplate,
                                      cardHeader,
                                      children,
                                      options,
                                      headers,
                                      items,
                                      height,
                                      name,
                                      onPageChange,
                                      page
}: DataTableContextProps) => {

    const [currentPage, setCurrentPage] = useState(page?.currentPage ?? 1);


    const buildHeaders = () => {
        let left = 0;
        let freezeLeft = defaultLeftPaneWidth;
        let freezeWidth = 0;
        let width = 0;
        let freezePane = 0;
        const _headers = [];

        if (!headers || headers?.length === 0) {
            console.error('Table Columns must be defined.');
        }

        headers.map((header) => {
            if (header.freeze) {
                freezePane++;
            }
        });

        for(let i=0;i<headers.length;i++){
            const header = headers[i];

            if (i >= freezePane) {
                left = left + width;
                width = header.width ?? 180;
                header.left = left;
            } else {
                freezeLeft = freezeLeft + freezeWidth;
                freezeWidth = header.width ?? 180;
                header.left = freezeLeft;
            }

            if (header.width) {
                _headers.push(header);
            } else {
                header.width = 180;
                _headers.push(header);
            }
        }

        let contentWidth = 0;
        let leftPaneWidth = defaultLeftPaneWidth;

        headers.map((header, i: number) => {
            if ((i === 0 || header.freeze)) {
                leftPaneWidth += header.width ?? 0;
            }else{
                contentWidth += header.width ?? 0;
            }
        });

        return {
            headers,
            height,
            freezePane,
            contentWidth,
            leftPaneWidth
        };
    }

    const {
        headers: _headers,
        height: _height,
        freezePane,
        contentWidth,
        leftPaneWidth
    } = buildHeaders();

    const tableData = {
        cardTemplate,
        cardHeader,
        currentPage,
        setCurrentPage,
        name,
        options: {
            ...options,
            contentWidth,
            height: _height,
            freezePane: freezePane ?? 0,
            leftPaneWidth: leftPaneWidth ?? 0,
            paddingLeft: leftPaneWidth,
            paddingWidth: 80,
            rowNumberWidth: 48
        },
        headers: _headers,
        items,
        rowNumberWidth: 48,
        onPageChange,
        page
    };


    return <DataTableContext.Provider value={tableData}>{children}</DataTableContext.Provider>;
}
