import DateSelector from '../DateSelector'
import Month from '../Month'
import './style.scss'

export default function Calendar() {
  return (
    <div className="container">
      <div className="calendar">
        <DateSelector />
        <Month />
      </div>
    </div>
  )
}
