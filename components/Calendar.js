import React from 'react'

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function Calendar() {
    const year = 2024
    const month = 'July'
    const monthNow = new Date(year, Object.keys(months).indexOf(month), 1)
    const firstDayOfMonth = monthNow.getDay()
    const daysInMonth = new Date(year, Object.keys(month).indexOf(month) + 1, 0) //ERROR

    const daysToDisplay = firstDayOfMonth + daysInMonth
    const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)

  return (
    <div className='flex flex-col gap-1 overflow-hidden'>
        {[...Array(numRows).keys()].map((row, rowIndex) => {
            return (
                <div key={rowIndex}>
                    {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                        let dayIndex = rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1)

                        let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true

                        let isToday = dayIndex === now.getDate() //ERROR

                        if (!dayDisplay) { // HOW DOES THIS WORK?
                            return (
                                <div className='bg-white' key={dayOfWeekIndex}></div>
                            )
                        }

                        return (
                            <div key={dayOfWeekIndex}>

                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}
