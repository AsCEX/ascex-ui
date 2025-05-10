import clsx from 'clsx';
import moment from 'moment';
import useCalendar from "@hooks/useCalendar";
import {forwardRef, useImperativeHandle, useState} from "react";
import {
    DateRange
} from '@components/DatePicker/DatePicker';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../../main.ts";
import {TimelogsType} from "timelogs";

interface CalendarProps {
    calendarEvents?: TimelogsType[],
    dateRange?: DateRange,
    month: number,
    year: number
    onChange?: (newDate: Date) => void
    onSelectChange?: (selectedDates: string[]) => void
    onShowEventDetail?: (eventDetail: TimelogsType | null, setOpenModal: (open: boolean) => void) => JSX.Element
    onCloseEventDetail?: () => void,
    defaultSelectedEvents?: string[];
}

const CalendarEvents = ({month, year, calendarEvents, onSelectChange, onShowEventDetail, onCloseEventDetail, dateRange}: CalendarProps, ref: any) => {

    const { getMonthDays } = useCalendar();
    const currentDate = moment({ year: year, month: (month ?? 0) - 1 }).toDate();
    const days = getMonthDays(moment(currentDate).year(), moment(currentDate).month() + 1);

    const [isDragging, setIsDragging] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<TimelogsType | null>(null);

    const defaultEvents: string[] = [];
    for(const calendarEvent of calendarEvents ?? []){
        if(calendarEvent?.date){
            defaultEvents.push(calendarEvent?.date);
        }
    }

    const [selectedDates, setSelectedDates] = useState<string[]>(defaultEvents);

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


    const getEvent = ( date: string ) => {
        if( calendarEvents ){
            for( const empEvent of calendarEvents ){
                if(moment(empEvent.date).format("YYYY-MM-DD") === date){
                    return empEvent;
                }
            }
        }
        return null;
    }
    const toggleCheckbox = ( isChecked: boolean, date: string ) => {
        console.log( 'selectedDates', selectedDates );
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

    const inRange = ( currentDate: string ) => {
        const start = moment(dateRange?.from);
        const end = moment(dateRange?.to);
        return moment(currentDate).isBetween(start, end, 'days', '[]');
    }

    const selectAll = ( ) => {
        const selDates = [...selectedDates];
        days.map((day : any) => {
            if(inRange(day.date )){
                if(!selDates.includes(day.date)){
                    selDates.push(day.date);
                }
            }
        });

        setSelectedDates(selDates);
        if( onSelectChange ){
            onSelectChange(selDates);
        }

    }

    const eventDetails = ( day: any ): void => {
        const dayEvent = getEvent(day.date)
        setSelectedEvent(dayEvent);
        setOpenModal(true);

    }

    const eventDetailView = (): JSX.Element => {
        if( onShowEventDetail ){
            return onShowEventDetail( selectedEvent, setOpenModal );
        }

        return <></>;
    }

    useImperativeHandle(ref, () => ({
        selectAll: () => selectAll(),
    }));

    return (
        <>
            <div className="flex h-full flex-col">
                <header
                    className="flex items-center justify-between border-b border-gray-200 dark:border-gray-lemon-dark-border px-6 py-4">
                    <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-lemon-dark-text">
                        <time dateTime="2022-01">{moment(currentDate).format('MMMM YYYY')}</time>
                    </h1>
                    <div className="flex items-center">
                        <div
                            className="relative flex items-center rounded-md bg-white dark:bg-gray-lemon-dark-secondary shadow-sm md:items-stretch">
                            <button type="button"
                                    className="hidden border rounded-md border-gray-300 dark:border-gray-lemon-dark-border px-3.5 text-sm font-semibold text-gray-900 dark:text-gray-lemon-dark-text hover:bg-gray-50 dark:hover:bg-gray-lemon-dark-primary focus:relative md:block"
                                    onClick={() => {
                                       selectAll();
                                    }}
                            >Check All
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
                            {days.map((day : any, index) => {

                                const dayEvents = getEvent(day.date);
                                const timeIn = dayEvents?.time_in ? moment(dayEvents?.time_in).format('LT') : '';
                                const timeOut = dayEvents?.time_out ? moment(dayEvents?.time_out).format('LT') : '';

                                return <label key={"days-" + index}
                                            htmlFor={"cc_box_" + day.date}
                                            className={clsx(
                                                "relative flex flex-col px-3 select-none py-2 text-gray-500 cursor-pointer",
                                                day.isCurrentMonth ? "bg-white dark:bg-gray-lemon-dark-primary" : "bg-gray-50 dark:bg-gray-lemon-dark-disabled",
                                                // "[&:has(input:checked)]:border-b-4 [&:has(input:checked)]:border-gray-lemon-dark-calendar-selected",
                                                !inRange(day.date) ? "opacity-50 !cursor-not-allowed pointer-events-none" : "",
                                            )}
                                            onMouseDown={() => handleMouseDown(day.date)}
                                            onMouseEnter={handleMouseEnter}
                                >

                                    <time className={"flex gap-2"} dateTime={day.date}>
                                        { inRange(day.date) && <input
                                            className={" right-4 top-4"}
                                            name={"cc_box_" + day.date}
                                            id={"cc_box_" + day.date}
                                            defaultValue={day.date}
                                            onChange={(e) => {
                                                toggleCheckbox(e.target.checked, e.target.value)
                                            }}
                                            type={"checkbox"}
                                            checked={selectedDates.includes(day.date)}
                                        /> }

                                        {day.day}
                                    </time>

                                    {
                                        (selectedDates.includes(day.date)) &&
                                        <ol className="mt-2 w-full ">
                                            <li className={clsx(
                                                "w-full"
                                            )} onClick={() => eventDetails(day)}>
                                                <a href="#" className="group flex bg-green-400">
                                                    <time dateTime=""
                                                          className="flex flex-col w-full text-center text-green-800 xl:text-xs group-hover:text-green-900">
                                                        <div><span>{timeIn}</span><span> - {timeOut}</span></div>
                                                        {(dayEvents?.overtime && (dayEvents?.overtime ?? 0) > 0) && <span className={"bg-red-400"}>{dayEvents?.overtime}</span>}
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


            <Dialog open={openModal} onOpenChange={(isOpen) => {
                setOpenModal(isOpen);
                if(!isOpen) {
                    if(onCloseEventDetail) onCloseEventDetail();
                }
            }}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Details</DialogTitle>
                        <DialogDescription/>
                        <div className={"flex flex-col p-6 pt-0 overflow-y-auto h-full"}>
                            {eventDetailView()}
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default forwardRef(CalendarEvents);