// import { Badge } from "@components/Badge/Badge"
import { Button } from "@components/Button/Button"
import { Input } from "@components/Input/Input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/Select/Select"
/*import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRoot,
    TableRow,
} from "@components/Table/Table"
import { quotes } from "@data/data"
import { cx } from "@utils/utils"*/
import { Download } from "lucide-react"
// import { Fragment } from "react"
import TremorTable from "@components/TremorTable/TremorTable.tsx";
import {ColumnDef} from "@tanstack/react-table";
import {useMemo, useState} from "react";
import {RiDeleteBin7Line, RiPencilLine, RiPlayListAddLine} from "@remixicon/react";
import IndeterminateCheckbox from "@components/TremorTable/IndeterminateCheckbox.tsx";
import {
    DateRange,
    Dialog,
    DateRangePicker,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, DatePicker
} from "./main.ts";

const presets = [
    {
        label: "Today",
        dateRange: {
            from: new Date(),
            to: new Date(),
        },
    },
    {
        label: "Last 7 days",
        dateRange: {
            from: new Date(new Date().setDate(new Date().getDate() - 7)),
            to: new Date(),
        },
    },
    {
        label: "Last 30 days",
        dateRange: {
            from: new Date(new Date().setDate(new Date().getDate() - 30)),
            to: new Date(),
        },
    },
    {
        label: "Last 3 months",
        dateRange: {
            from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
            to: new Date(),
        },
    },
    {
        label: "Last 6 months",
        dateRange: {
            from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
            to: new Date(),
        },
    },
    {
        label: "Month to date",
        dateRange: {
            from: new Date(new Date().setDate(1)),
            to: new Date(),
        },
    },
    {
        label: "Year to date",
        dateRange: {
            from: new Date(new Date().setFullYear(new Date().getFullYear(), 0, 1)),
            to: new Date(),
        },
    },
]
const workspaces = [
    {
        workspace: 'sales_by_day_api',
        owner: 'John Doe',
        status: 'live',
        costs: '$3,509.00',
        region: 'US-West 1',
        capacity: '99%',
        lastEdited: '23/09/2023 13:00',
    },
    {
        workspace: 'marketing_campaign',
        owner: 'Jane Smith',
        status: 'live',
        costs: '$5,720.00',
        region: 'US-East 2',
        capacity: '80%',
        lastEdited: '22/09/2023 10:45',
    },
    {
        workspace: 'sales_campaign',
        owner: 'Jane Smith',
        status: 'live',
        costs: '$5,720.00',
        region: 'US-East 2',
        capacity: '80%',
        lastEdited: '22/09/2023 10:45',
    },
    {
        workspace: 'development_env',
        owner: 'Mike Johnson',
        status: 'live',
        costs: '$4,200.00',
        region: 'EU-West 1',
        capacity: '60%',
        lastEdited: '21/09/2023 14:30',
    },
    {
        workspace: 'new_workspace_1',
        owner: 'Alice Brown',
        status: 'live',
        costs: '$2,100.00',
        region: 'US-West 2',
        capacity: '75%',
        lastEdited: '24/09/2023 09:15',
    },
    {
        workspace: 'test_environment',
        owner: 'David Clark',
        status: 'inactive',
        costs: '$800.00',
        region: 'EU-Central 1',
        capacity: '40%',
        lastEdited: '25/09/2023 16:20',
    },
    {
        workspace: 'analytics_dashboard',
        owner: 'Sarah Wilson',
        status: 'live',
        costs: '$6,500.00',
        region: 'US-West 1',
        capacity: '90%',
        lastEdited: '26/09/2023 11:30',
    },
    {
        workspace: 'research_project',
        owner: 'Michael Adams',
        status: 'live',
        costs: '$3,900.00',
        region: 'US-East 1',
        capacity: '70%',
        lastEdited: '27/09/2023 08:45',
    },
    {
        workspace: 'training_environment',
        owner: 'Laura White',
        status: 'live',
        costs: '$2,500.00',
        region: 'EU-North 1',
        capacity: '55%',
        lastEdited: '28/09/2023 12:15',
    },
];

function Dashboard() {

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = useState<DateRange | undefined>(
        undefined,
    )
    const headers: ColumnDef<any>[] = useMemo(
        () => [
            {
                id: 'select',
                header: ({ table } : any) => (
                    <IndeterminateCheckbox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                        className="-translate-y-[1px]"
                    />
                ),
                cell: ({ row } : any) => (
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                        className="-translate-y-[1px]"
                    />
                ),
                enableSorting: false,
                meta: {
                    align: 'text-left',
                },
            },
            {
                header: 'Workspace',
                accessorKey: 'workspace',
                enableSorting: true,
                meta: {
                    align: 'text-left',
                },
            },
            {
                header: 'Owner',
                accessorKey: 'owner',
                enableSorting: true,
                meta: {
                    align: 'text-left',
                },
            },
            {
                header: 'Status',
                accessorKey: 'status',
                enableSorting: false,
                meta: {
                    align: 'text-left',
                },
            },
            {
                header: 'Region',
                accessorKey: 'region',
                enableSorting: false,
                meta: {
                    align: 'text-left',
                },
            },
            {
                header: 'Capacity',
                accessorKey: 'capacity',
                enableSorting: false,
                meta: {
                    align: 'text-left',
                },
            },
            {
                header: 'Costs',
                accessorKey: 'costs',
                enableSorting: false,
                meta: {
                    align: 'text-right',
                },
            },
            {
                header: 'Last edited',
                accessorKey: 'lastEdited',
                enableSorting: false,
                meta: {
                    align: 'text-right',
                },
                cell: ({ getValue } : any) => (
                    <div className="relative">
                        <span>{getValue()}</span>
                        <div className="absolute right-0 top-1/2 hidden h-full -translate-y-1/2 items-center bg-tremor-background-muted group-hover:flex dark:bg-dark-tremor-background-muted">
                            <div className="inline-flex items-center rounded-tremor-small shadow-tremor-input dark:shadow-dark-tremor-input">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center rounded-l-tremor-small bg-tremor-background px-4 py-2 text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring hover:text-tremor-content-strong focus:z-10 dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis dark:ring-tremor-content-emphasis hover:dark:text-dark-tremor-content-strong"
                                    onClick={
                                        // add stopPropagation to avoid row selection when clicking button
                                        (e) => {
                                            e.stopPropagation();
                                        }
                                    }
                                >
                                    <RiPencilLine
                                        className="size-4"
                                        aria-hidden={true}
                                        aria-label="Edit"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center bg-tremor-background px-4 py-2 text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring hover:text-tremor-content-strong focus:z-10 dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis dark:ring-tremor-content-emphasis hover:dark:text-dark-tremor-content-strong"
                                    onClick={
                                        // add stopPropagation to avoid row selection when clicking button
                                        (e) => {
                                            e.stopPropagation();
                                        }
                                    }
                                >
                                    <RiPlayListAddLine
                                        className="size-4"
                                        aria-hidden={true}
                                        aria-label="Add"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center rounded-r-tremor-small bg-tremor-background px-4 py-2 text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring hover:text-tremor-content-strong focus:z-10 dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis dark:ring-tremor-content-emphasis hover:dark:text-dark-tremor-content-strong"
                                    onClick={
                                        // add stopPropagation to avoid row selection when clicking button
                                        (e) => {
                                            e.stopPropagation();
                                        }
                                    }
                                >
                                    <RiDeleteBin7Line
                                        className="size-4"
                                        aria-hidden={true}
                                        aria-label="Delete"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ),
            },
        ],
        [],
    );

    const [openModal, setOpenModal] = useState(false);
    return (
        <section aria-label="Overview Table">
            <div className="flex flex-col justify-between gap-2 px-4 py-6 sm:flex-row sm:items-center sm:p-6">
                <Input
                    type="search"
                    placeholder="Search quotes..."
                    className="sm:w-64 w-72 [&>input]:py-1.5"
                />

                <DatePicker value={selectedDate} onChange={(date) => {
                    console.log('datePicker change');
                    setSelectedDate(date)
                }} className="ml-auto" />
                <DateRangePicker
                    presets={presets}
                    value={dateRange}
                    enableYearNavigation={true}
                    onChange={setDateRange}
                    className="w-60 ml-auto border-0"
                />
                <Dialog open={openModal} onOpenChange={setOpenModal}>
                    <DialogTrigger asChild>
                        <Button
                            className={"rounded-none text-xs border-0 hover:bg-[#1f4d41] dark:hover:bg-[#1f4d41]"}>
                            <Download className={'mr-1'}/> New Employee</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Employee Form</DialogTitle>
                            <DialogDescription/>
                            <div className={"flex flex-grow p-6 pt-0"} style={{'height':'60vh'}}>
                                <div className={"h-[60vh]"}>Test</div>
                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <Select>
                        <SelectTrigger className="w-full py-1.5 sm:w-44">
                            <SelectValue placeholder="Assigned to..."/>
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="1">Harry Granger</SelectItem>
                            <SelectItem value="2">Hermoine Weasley</SelectItem>
                            <SelectItem value="3">Emma Stone</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        variant="secondary"
                        className="w-full gap-2 py-1.5 text-base sm:w-fit sm:text-sm"
                    >
                        <Download
                            className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
                            aria-hidden="true"
                        />
                        Export
                    </Button>

                </div>
            </div>
            <div className="relative">
                <div className="absolute w-full overflow-x-auto">
                    <TremorTable headers={headers} data={workspaces}/>
                    {/*<TableRoot className="border-t border-gray-200 dark:border-gray-800">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell>Company</TableHeaderCell>
                                    <TableHeaderCell>Deal Size</TableHeaderCell>
                                    <TableHeaderCell>Win Probability</TableHeaderCell>
                                    <TableHeaderCell>Project Duration</TableHeaderCell>
                                    <TableHeaderCell>Assigned</TableHeaderCell>
                                    <TableHeaderCell>Status</TableHeaderCell>
                                    <TableHeaderCell>CompanyB</TableHeaderCell>
                                    <TableHeaderCell>Deal SizeB</TableHeaderCell>
                                    <TableHeaderCell>Win ProbabilityB</TableHeaderCell>
                                    <TableHeaderCell>Project DurationB</TableHeaderCell>
                                    <TableHeaderCell>CompanyB</TableHeaderCell>
                                    <TableHeaderCell>Deal SizeB</TableHeaderCell>
                                    <TableHeaderCell>Win ProbabilityB</TableHeaderCell>
                                    <TableHeaderCell>Project DurationB</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {quotes.map((quote) => (
                                    <Fragment key={quote.region}>
                                        <TableRow>
                                            <TableHeaderCell
                                                scope="colgroup"
                                                colSpan={14}
                                                className="bg-gray-50 py-3 pl-4 sm:pl-6 dark:bg-gray-900"
                                            >
                                                {quote.region}
                                                <span className="ml-2 font-medium text-gray-600 dark:text-gray-400">
                          {quote.project.length}
                        </span>
                                            </TableHeaderCell>
                                        </TableRow>
                                        {quote.project.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{item.company}</TableCell>
                                                <TableCell>{item.size}</TableCell>
                                                <TableCell>{item.probability}</TableCell>
                                                <TableCell>{item.duration}</TableCell>
                                                <TableCell>{item.companyb}</TableCell>
                                                <TableCell>{item.sizeb}</TableCell>
                                                <TableCell>{item.probabilityb}</TableCell>
                                                <TableCell>{item.durationb}</TableCell>
                                                <TableCell>{item.companyb}</TableCell>
                                                <TableCell>{item.sizeb}</TableCell>
                                                <TableCell>{item.probabilityb}</TableCell>
                                                <TableCell>{item.durationb}</TableCell>
                                                <TableCell>
                                                    <div className="flex -space-x-1 overflow-hidden">
                                                        {item.assigned.map((name, nameIndex) => (
                                                            <span
                                                                key={nameIndex}
                                                                className={cx(
                                                                    getRandomColor(name.initials),
                                                                    "inline-flex size-5 items-center justify-center rounded-full text-xs font-medium text-white ring-2 ring-white dark:text-white dark:ring-[#090E1A]",
                                                                )}
                                                            >
                                {name.initials}
                              </span>
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            item.status === "Closed"
                                                                ? "success"
                                                                : item.status === "Drafted"
                                                                    ? "neutral"
                                                                    : item.status === "Sent"
                                                                        ? "default"
                                                                        : "default"
                                                        }
                                                        className="rounded-full"
                                                    >
                            <span
                                className={cx(
                                    "size-1.5 shrink-0 rounded-full",
                                    "bg-gray-500 dark:bg-gray-500",
                                    {
                                        "bg-emerald-600 dark:bg-emerald-400":
                                            item.status === "Closed",
                                    },
                                    {
                                        "bg-gray-500 dark:bg-gray-500":
                                            item.status === "Drafted",
                                    },
                                    {
                                        "bg-blue-500 dark:bg-blue-500":
                                            item.status === "Sent",
                                    },
                                )}
                                aria-hidden="true"
                            />
                                                        {item.status}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableRoot>*/}
                </div>
            </div>
        </section>
    );
}

export default Dashboard
