import { useEffect, useState } from 'react';

import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableFoot,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import clsx from "clsx";
import IndeterminateCheckbox from "@components/TremorTable/IndeterminateCheckbox.tsx";

interface TremorTableProps {
    headers: any[],
    data: any[]
}

export default function TremorTable({ headers, data } : TremorTableProps) {
    const [rowSelection, setRowSelection] = useState({});

    useEffect(() => {
        // Pre-select the 2nd row for demo purpose
        setRowSelection({ 2: true });
    }, []);

    const table = useReactTable({
        data: data,
        columns: headers,
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            rowSelection,
        },
    });

    return (
        <>
            <Table className="w-full">
                <TableHead className={"text-gray-900 dark:text-gray-50"}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className="border-b border-tremor-border dark:border-dark-tremor-border"
                        >
                            {headerGroup.headers.map((header) => (
                                <TableHeaderCell
                                    key={header.id}
                                    className={clsx(
                                        "whitespace-nowrap border-b px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 border-gray-200 dark:border-gray-800",
                                        clsx(header.column.columnDef.meta?.align ?? '')
                                    )}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody className={"divide-y divide-gray-200 dark:divide-gray-800 text-gray-600 dark:text-gray-400 text-sm"}>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            onClick={() => row.toggleSelected(!row.getIsSelected())}
                            className="group select-none hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
                        >
                            {row.getVisibleCells().map((cell, index) => (
                                <TableCell
                                    key={cell.id}
                                    className={clsx(
                                        "whitespace-nowrap p-4 text-sm text-gray-600 dark:text-gray-400",
                                        row.getIsSelected()
                                            ? 'bg-tremor-background-muted dark:bg-dark-tremor-background-muted'
                                            : '',
                                        cell.column.columnDef.meta?.align ?? '',
                                        'relative',
                                    )}
                                >
                                    {index === 0 && row.getIsSelected() && (
                                        <div className="absolute inset-y-0 left-0 w-0.5 bg-tremor-brand dark:bg-dark-tremor-brand" />
                                    )}
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFoot>
                    <TableRow>
                        <TableHeaderCell colSpan={1}>
                            <IndeterminateCheckbox
                                {...{
                                    checked: table.getIsAllPageRowsSelected(),
                                    indeterminate: table.getIsSomePageRowsSelected(),
                                    onChange: table.getToggleAllPageRowsSelectedHandler(),
                                }}
                                className="-translate-y-[1px]"
                            />
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={7} className="whitespace-nowrap p-4 text-sm text-gray-600 dark:text-gray-400 ">
                            {Object.keys(rowSelection).length} of{' '}
                            {table.getRowModel().rows.length} Page Row(s) selected
                        </TableHeaderCell>
                    </TableRow>
                </TableFoot>
            </Table>
        </>
    );
}