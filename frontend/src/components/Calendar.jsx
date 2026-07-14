import { useState, useMemo } from "react";
import "../styles/Calendar.css";

const Calendar = ({ entries, selectedDate, onSelectDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Map dates to boolean if an entry exists
    const entryDates = useMemo(() => {
        const dates = new Set();
        entries.forEach(e => dates.add(e.date));
        return dates;
    }, [entries]);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        // Note: ISO string uses 1-based month '01' to '12' and '01' to '31'
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const hasEntry = entryDates.has(dateStr);
        const isSelected = selectedDate === dateStr;

        days.push(
            <div
                key={`day-${d}`}
                className={`calendar-day ${hasEntry ? 'has-entry' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                    if (hasEntry) {
                        onSelectDate(isSelected ? null : dateStr);
                    }
                }}
            >
                <span>{d}</span>
                {hasEntry && <div className="entry-dot"></div>}
            </div>
        );
    }

    return (
        <div className="calendar-widget">
            <div className="calendar-header">
                <button onClick={prevMonth}>&lt;</button>
                <h4>{monthNames[month]} {year}</h4>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="calendar-grid-header">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
            </div>
            <div className="calendar-grid">
                {days}
            </div>
        </div>
    );
};

export default Calendar;
