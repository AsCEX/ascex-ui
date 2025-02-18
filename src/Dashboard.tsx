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

import { Download } from "lucide-react"
import {useState} from "react";
import {
    DateRange,
    Dialog,
    DateRangePicker,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, DatePicker, DropdownMenuItem,
    DropdownMenu,
    DropdownMenuContent, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuTrigger, DropdownMenuLabel, DataTable
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

function Dashboard() {

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = useState<DateRange | undefined>(
        undefined,
    )

    const [openModal, setOpenModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <section className={"flex flex-col h-full"}>
            <div className="flex flex-col justify-between gap-2 px-4 py-6 sm:flex-row sm:items-center sm:p-6">
                <Input
                    type="search"
                    placeholder="Search quotes..."
                    className="sm:w-64 w-72 [&>input]:py-1.5"
                />
                <Input
                    type="date"
                    placeholder="Search quotes..."
                    className="sm:w-64 w-72 [&>input]:py-1.5"
                />


                <DatePicker value={selectedDate} onChange={(date) => {
                    console.log('datePicker change');
                    setSelectedDate(date)
                }} className="ml-auto" />

                <DropdownMenu open={openMenu} onOpenChange={() => setOpenMenu(!openMenu)}>
                    <DropdownMenuTrigger asChild>
                        <nav aria-label="Breadcrumb" className="ml-2">
                            <ol role="list" className="flex items-center space-x-3 text-sm">
                                <li className="flex">
                                    <a
                                        href="#"
                                        className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-300"
                                    >
                                        Menu
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>

                        <DropdownMenuGroup>
                            <DropdownMenuItem shortcut="⌘S">Account Settings</DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuGroup>
                            <DropdownMenuItem hint="Pro">Manage workspace</DropdownMenuItem>

                            <DropdownMenuItem shortcut="⌘T">New Workspace</DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem shortcut="⇧⌘Q">Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
            <div className="flex flex-col h-full w-full overflow-x-auto">
                <div className={"flex h-full justify-between items-center"}>
                    <DataTable
                        name={"dt-products"}
                        items={[
                            {
                                "id": 3,
                                "first_name": "Adolf",
                                "middle_name": "Jules",
                                "last_name": "Stehr",
                                "username": "Mariah_Abbott59",
                                "email": "Theresia.Orn62@gmail.com",
                                "phone_number": "+15554848738",
                                "gender": 1,
                                "birthdate": "2025-12-23",
                                "status": 1
                            },
                            {
                                "id": 4,
                                "first_name": "Isabella",
                                "middle_name": "Kennedy",
                                "last_name": "Kessler",
                                "username": "Elias1",
                                "email": "Vernie.Daugherty@yahoo.com",
                                "phone_number": "+16237211390",
                                "gender": 1,
                                "birthdate": "2024-11-10",
                                "status": 1
                            },
                            {
                                "id": 5,
                                "first_name": "Mackenzie",
                                "middle_name": "Arden",
                                "last_name": "Oberbrunner",
                                "username": "Flavio.Wolff",
                                "email": "Janick91@yahoo.com",
                                "phone_number": "+14495929894",
                                "gender": 0,
                                "birthdate": "2025-10-31",
                                "status": 1
                            },
                            {
                                "id": 6,
                                "first_name": "Laila",
                                "middle_name": "AndersonTes",
                                "last_name": "Rice Lime",
                                "username": "Deja74",
                                "email": "Hollis_White@hotmail.com",
                                "phone_number": "+12925480191",
                                "gender": 0,
                                "birthdate": "2025-10-23",
                                "status": 1
                            },
                            {
                                "id": 7,
                                "first_name": "Ansley Mae",
                                "middle_name": "Billie",
                                "last_name": "Weissnat",
                                "username": "Elvie_Muller27",
                                "email": "Lucy_Schumm@gmail.com",
                                "phone_number": "+19727088824",
                                "gender": 0,
                                "birthdate": "2025-05-05",
                                "status": 1
                            },
                            {
                                "id": 8,
                                "first_name": "Martina",
                                "middle_name": "Drew",
                                "last_name": "Gibson",
                                "username": "Rusty1",
                                "email": "Nakia_Jacobson@gmail.com",
                                "phone_number": "+15317105764",
                                "gender": 0,
                                "birthdate": "2025-06-15",
                                "status": 1
                            },
                            {
                                "id": 9,
                                "first_name": "Abner",
                                "middle_name": "Robin",
                                "last_name": "Brakus-Mohr",
                                "username": "Lisandro99",
                                "email": "Frieda53@yahoo.com",
                                "phone_number": "+15108899613",
                                "gender": 1,
                                "birthdate": "2024-03-08",
                                "status": 1
                            },
                            {
                                "id": 10,
                                "first_name": "Sonny",
                                "middle_name": "Noah",
                                "last_name": "Ratke",
                                "username": "Alvera.Smith",
                                "email": "Alexzander_Jast24@yahoo.com",
                                "phone_number": "+15535146998",
                                "gender": 0,
                                "birthdate": "2025-08-06",
                                "status": 1
                            },
                            {
                                "id": 11,
                                "first_name": "Daniella",
                                "middle_name": "River",
                                "last_name": "Jacobs",
                                "username": "Kane.Corkery",
                                "email": "Ewell.Crist@hotmail.com",
                                "phone_number": "+18314716509",
                                "gender": 0,
                                "birthdate": "2024-04-16",
                                "status": 1
                            },
                            {
                                "id": 12,
                                "first_name": "Jaydamul",
                                "middle_name": "CameronTy",
                                "last_name": "Macejkovic",
                                "username": "Mackenzie62",
                                "email": "Robbie80@gmail.com",
                                "phone_number": "+12612696891",
                                "gender": 0,
                                "birthdate": "2024-08-19",
                                "status": 1
                            },
                            {
                                "id": 13,
                                "first_name": "Pedro",
                                "middle_name": "Harper",
                                "last_name": "Herzog",
                                "username": "Diamond13",
                                "email": "Jameson_Wisoky@hotmail.com",
                                "phone_number": "+12492607751",
                                "gender": 0,
                                "birthdate": "2025-03-15",
                                "status": 1
                            },
                            {
                                "id": 14,
                                "first_name": "Devon",
                                "middle_name": "Greer",
                                "last_name": "Kris",
                                "username": "Eli50",
                                "email": "Jadyn70@yahoo.com",
                                "phone_number": "+12662379884",
                                "gender": 0,
                                "birthdate": "2024-10-15",
                                "status": 1
                            },
                            {
                                "id": 15,
                                "first_name": "Lyda",
                                "middle_name": "James",
                                "last_name": "Schiller",
                                "username": "Reagan.Kilback",
                                "email": "Alycia_Powlowski9@gmail.com",
                                "phone_number": "+12115236219",
                                "gender": 1,
                                "birthdate": "2024-08-16",
                                "status": 1
                            },
                            {
                                "id": 16,
                                "first_name": "Mireya",
                                "middle_name": "Jaden",
                                "last_name": "Mann-Bergstrom",
                                "username": "Jazmyne.Renner82",
                                "email": "Kristy82@yahoo.com",
                                "phone_number": "+12672190473",
                                "gender": 0,
                                "birthdate": "2024-10-15",
                                "status": 1
                            },
                            {
                                "id": 17,
                                "first_name": "Madison",
                                "middle_name": "August",
                                "last_name": "Purdy",
                                "username": "Lavada.Greenholt",
                                "email": "Keeley41@gmail.com",
                                "phone_number": "+18318845195",
                                "gender": 0,
                                "birthdate": "2024-02-23",
                                "status": 1
                            },
                            {
                                "id": 18,
                                "first_name": "Myrl",
                                "middle_name": "River",
                                "last_name": "McCullough",
                                "username": "Zion.Watsica",
                                "email": "Ansel_Davis@gmail.com",
                                "phone_number": "+16072276569",
                                "gender": 1,
                                "birthdate": "2025-12-17",
                                "status": 1
                            },
                            {
                                "id": 19,
                                "first_name": "Alaina",
                                "middle_name": "",
                                "last_name": "Conroyz",
                                "username": "amparo.rutherford",
                                "email": "olockman@example.com",
                                "phone_number": "+12686700535",
                                "gender": 1,
                                "birthdate": "2025-07-11",
                                "status": 1
                            }
                        ]}
                        loaded={true}
                        headers={[
                            {
                                name: 'fullname',
                                label: 'Full Name',
                                freeze: true,
                                type: 'custom',
                                width: 240,
                                render: (_data, row: any) => {
                                    return <>
                                        <div
                                            className={"w-full flex line-height-4 whitespace-nowrap cell-wrap"}>
                                            <div className={"grow p-2"}>
                                                {row.last_name}, {row.first_name} {row.middle_name}
                                            </div>
                                        </div>
                                    </>;
                                }
                            },
                            {
                                name: 'total_present_days',
                                label: 'Attendance',
                                className: 'justify-center text-green-600 font-bold',
                                width: 100,
                                type: 'custom',
                                render: (data: any) => {
                                    return <>
                                        <div
                                            className={"w-full flex line-height-4 whitespace-nowrap cell-wrap"}>
                                            <div className={"grow text-center p-2 hover:underline hover:cursor-pointer"}>
                                                {data}
                                            </div>
                                        </div>
                                    </>
                                }
                            },
                            {
                                name: 'absence',
                                label: 'Absence',
                                type: 'custom',
                                className: 'justify-center text-red-300 font-bold',
                                width: 100,
                                render: () => {
                                    return <>
                                        <div
                                            className={"w-full flex line-height-4 whitespace-nowrap cell-wrap"}>
                                            <div className={"grow text-center p-2"}>
                                                0
                                            </div>
                                        </div>
                                    </>
                                }
                            },
                            {
                                name: 'overtime',
                                label: 'Overtime',
                                type: 'custom',
                                className: 'justify-center text-purple-400 font-bold',
                                width: 100,
                                render: () => {
                                    return <>
                                        <div
                                            className={"w-full flex line-height-4 whitespace-nowrap cell-wrap"}>
                                            <div className={"grow text-center p-2"}>
                                                0
                                            </div>
                                        </div>
                                    </>
                                }
                            },
                            {
                                name: 'leave',
                                label: 'Leave',
                                type: 'custom',
                                className: 'justify-center text-yellow-200 font-bold',
                                width: 100,
                                render: () => {
                                    return <>
                                        <div
                                            className={"w-full flex line-height-4 whitespace-nowrap cell-wrap"}>
                                            <div className={"grow text-center p-2"}>
                                                0
                                            </div>
                                        </div>
                                    </>
                                }
                            },
                        ]}
                        options={{
                            rowHeight: "sm"
                        }}
                    />
                </div>
                {/*<TremorTable headers={headers} data={workspaces}/>*/}
            </div>
        </section>
    );
}

export default Dashboard
