import { useContext } from 'react'
import cx from 'classnames'
import { SelectedDateStore } from '../../store/selectedDate'

const SATURDAY = 6
const SUNDAY = 0

function isToday(date) {
  const today = new Date()
  return (
    date.getFullYear() == today.getFullYear() &&
    date.getMonth() == today.getMonth() &&
    date.getDate() == today.getDate()
  )
}

function isSaturday(date) {
  return date.getDay() === SATURDAY
}

function isSunday(date) {
  return date.getDay() === SUNDAY
}

function isOtherMonth(date, month) {
  return date.getMonth() + 1 !== month
}

export default function Day({ day }) {
  const { state: date } = useContext(SelectedDateStore)

  return (
    <li
      className={cx(
        'day',
        { today: isToday(day) },
        { holiday: isSunday(day) },
        { saturday: isSaturday(day) },
        { 'other-month': isOtherMonth(day, date.getMonth() + 1) },
      )}
    >
      {day.getDate()}
    </li>
  )
}
