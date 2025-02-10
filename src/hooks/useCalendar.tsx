import moment from 'moment';

const useCalendar = () => {

    const getMonthDays = (year: number, month: number) => {

        const days = [];
        const firstDayOfMonth = new Date(year, month - 1, 1); // 1st day of given month

        const startDate = new Date(firstDayOfMonth);
        startDate.setDate(startDate.getDate() - startDate.getDay()); // Move to Sunday before 1st day

        const totalDays = 42; // Ensures a full 6-week (6x7=42) calendar

        for (let i = 0; i < totalDays; i++) {
            days.push({
                day: startDate.getDate(),
                month: startDate.getMonth() + 1, // JS months are 0-indexed
                year: startDate.getFullYear(),
                date: moment(startDate).format('YYYY-MM-DD'),
                isCurrentMonth: startDate.getMonth() === (month - 1) // Highlight current month days
            });

            startDate.setDate(startDate.getDate() + 1); // Move to next day
        }

        return days;
    }

    return {
        getMonthDays
    }

}
export default useCalendar;