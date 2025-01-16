import { ReactNode } from "react";
import DataTableProvider from "./DataTableProvider";
import {isMobile} from "react-device-detect";

const defaultLeftPaneWidth = 48;

interface DataTableContextProps {
    children?: ReactNode,
    context?: any,
    headers?: any[],
    initHeaders?: any,
    items?: any
}


export default function DataTableContext({ children, context, headers: initHeaders = [], items }: DataTableContextProps) {

    const buildHeaders = () => {

        let left = 0;
        let freezeLeft = defaultLeftPaneWidth;
        let freezeWidth = isMobile ? defaultLeftPaneWidth : 0;
        let width = 0;
        let freezePane = isMobile ? 0 : 1;
        const _headers = [];

        if (!initHeaders || initHeaders?.length === 0) {
            console.error('Table Columns must be defined.');
        }

        for(let i=0;i<initHeaders.length;i++){
            const header = initHeaders[i];

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

        initHeaders.map((header, i) => {
            if ((i === 0 || header.freeze) && !isMobile) {
                leftPaneWidth += header.width;
            }else{
                contentWidth += header.width;
            }
        });

        return {
            headers: _headers,
            freezePane,
            contentWidth,
            leftPaneWidth
        };
    }

    const headerData = buildHeaders();

    const tableData = {
        ...context,
        ...headerData,
        items,
    };

    return <DataTableProvider context={tableData}>{children}</DataTableProvider>;
}
