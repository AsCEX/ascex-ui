import clsx from 'clsx';
import moment from 'moment';
import useCalendar from "@hooks/useCalendar";
import {useState} from "react";


interface CalendarEventProps {
    date?: string ,
    time_in?: string | undefined,
    time_out?: string | undefined
}

interface CalendarProps {
    calendarEvents?: CalendarEventProps[],
    month: number,
    year: number
    onChange?: (newDate: Date) => void
    onSelectChange?: (selectedDates: string[]) => void
}

const CalendarEvents = ({month, year, calendarEvents, onChange, onSelectChange}: CalendarProps) => {

    const { getMonthDays } = useCalendar();
    const currentDate = moment({ year: year, month: (month ?? 0) - 1 }).toDate();
    const days = getMonthDays(moment(currentDate).year(), moment(currentDate).month() + 1);


    // const [startCellDate, setStartCellDate] = useState<Date | null>(null);
    // const [endCellDate, setEndCellDate] = useState<Date | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedDates, setSelectedDates] = useState<string[]>([]);

    const handleMouseDown = ( date: string ) => {
        const selectedDate = new Date(date);
        console.log(selectedDate);
        // setStartCellDate(selectedDate);
        // setEndCellDate(selectedDate);
        // setIsDragging(true);
    };

    const handleMouseEnter = (e: any) => {
        if (isDragging) {
            e.target.click()
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    /*const isCellSelected = ( date: string ) => {
        if (!startCellDate || !endCellDate) return false;

        const selectedDate = new Date(date);

        return selectedDate.getTime() >= startCellDate.getTime() && selectedDate.getTime() <= endCellDate.getTime();
    };*/

    const getEvent = ( date: string ) => {
        if( calendarEvents ){
            for( const empEvent of calendarEvents ){
                if(moment(empEvent.date).format("YYYY-MM-DD") === date){
                    return empEvent;
                }
            }
        }
        return ;
    }
    const toggleCheckbox = ( isChecked: boolean, date: string ) => {
        const newSelectedDates = [ ...selectedDates ];
        if( newSelectedDates.includes( date ) ){
            if(!isChecked){
                const index = newSelectedDates.indexOf(date);
                if (index !== -1) {
                    newSelectedDates.splice(index, 1);
                }
            }
        }else{
            newSelectedDates.push(date);
        }

        setSelectedDates(newSelectedDates);
        if( onSelectChange ){
            onSelectChange(newSelectedDates);
        }
    }


    return (
        <>
            <div className="flex h-full flex-col ">
                <header
                    className="flex items-center justify-between border-b border-gray-200 dark:border-gray-lemon-dark-border px-6 py-4">
                    <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-lemon-dark-text">
                        <time dateTime="2022-01">{moment(currentDate).format('MMMM YYYY')}</time>
                    </h1>
                    <div className="flex items-center">
                        <div className="relative flex items-center rounded-md bg-white dark:bg-gray-lemon-dark-secondary shadow-sm md:items-stretch">
                            <button type="button"
                                    className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 dark:border-gray-lemon-dark-border pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50 dark: dark:hover:bg-gray-lemon-dark-primary"
                                    onClick={() => {
                                        if (onChange) {
                                            const newDate = moment(currentDate).subtract(1, 'M').toDate();
                                            onChange(newDate);
                                        }
                                    }}
                            >
                                <span className="sr-only">Previous month</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            <button type="button"
                                    className="hidden border-y border-gray-300 dark:border-gray-lemon-dark-border px-3.5 text-sm font-semibold text-gray-900 dark:text-gray-lemon-dark-text hover:bg-gray-50 dark:hover:bg-gray-lemon-dark-primary focus:relative md:block"
                                    onClick={() => {
                                        if (onChange) {
                                            const newDate = moment().startOf('month').toDate();
                                            onChange(newDate);
                                        }
                                    }}
                            >Today
                            </button>
                            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"/>
                            <button type="button"
                                    className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 dark:border-gray-lemon-dark-border pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50 dark:hover:bg-gray-lemon-dark-primary"
                                    onClick={() => {
                                        if (onChange) {
                                            const newDate = moment(currentDate).add(1, 'M').toDate();
                                            onChange(newDate);
                                        }
                                    }}
                            >
                                <span className="sr-only">Next month</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="shadow ring-1 ring-black ring-opacity-5 flex flex-col h-full">
                    <div
                        className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 dark:border-gray-lemon-dark-border dark:bg-gray-lemon-dark-secondary text-center text-xs font-semibold leading-6 text-gray-700 dark:text-gray-lemon-dark-text lg:flex-none">
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>S</span>
                            <span className="sr-only sm:not-sr-only">un</span>
                        </div>
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>M</span>
                            <span className="sr-only sm:not-sr-only">on</span>
                        </div>
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>T</span>
                            <span className="sr-only sm:not-sr-only">ue</span>
                        </div>
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>W</span>
                            <span className="sr-only sm:not-sr-only">ed</span>
                        </div>
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>T</span>
                            <span className="sr-only sm:not-sr-only">hu</span>
                        </div>
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>F</span>
                            <span className="sr-only sm:not-sr-only">ri</span>
                        </div>
                        <div className="flex justify-center bg-white dark:bg-gray-lemon-dark-header py-2">
                            <span>S</span>
                            <span className="sr-only sm:not-sr-only">at</span>
                        </div>
                    </div>

                    <div
                        className="flex bg-gray-200 dark:bg-gray-lemon-dark-border text-xs leading-6 text-gray-700 h-full flex-auto">
                        <div className="w-full grid grid-cols-7 grid-rows-6 gap-px" onMouseUp={handleMouseUp}>
                            {days.map((day, index) => {

                                const dayEvents = getEvent(day.date);
                                const timeIn = moment(dayEvents?.time_in ?? null).format('LT');
                                const timeOut = moment(dayEvents?.time_out ?? null).format('LT');

                                return <label key={"days-" + index}
                                            htmlFor={"cc_box_" + day.date}
                                            className={clsx(
                                                "relative px-3 select-none py-2 text-gray-500 cursor-crosshair md:cursor-pointer",
                                                day.isCurrentMonth ? "bg-white dark:bg-gray-lemon-dark-primary" : "bg-gray-50 dark:bg-gray-lemon-dark-disabled",
                                                "[&:has(input:checked)]:border-b-4 [&:has(input:checked)]:border-gray-lemon-dark-calendar-selected"
                                            )}
                                            onMouseDown={() => handleMouseDown(day.date)}
                                            onMouseEnter={handleMouseEnter}
                                >

                                    <time className={"flex gap-2"} dateTime={day.date}>
                                        <input
                                            className={" right-4 top-4"}
                                            name={"cc_box_" + day.date}
                                            id={"cc_box_" + day.date}
                                            defaultValue={day.date}
                                            onChange={(e) => {
                                                toggleCheckbox(e.target.checked, e.target.value)
                                            }}
                                            type={"checkbox"}
                                            checked={selectedDates.includes(day.date)}
                                        />{day.day}
                                    </time>

                                    {
                                        dayEvents &&
                                        <ol className="mt-2 w-full absolute bottom-0 left-0 xl:block">
                                            <li className={clsx(
                                                "bg-green-400",
                                                "xl:h-4"
                                            )}>
                                                <a href="#" className="group flex">
                                                <time dateTime=""
                                                                  className="flex-none w-full text-center text-green-800 xl:text-xs group-hover:text-green-900 xl:block">
                                                                <span>{timeIn}</span><span> - {timeOut}</span>
                                                            </time>
                                                        </a>
                                                    </li>
                                            </ol>
                                    }
                                </label>
                            })}

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default CalendarEvents;