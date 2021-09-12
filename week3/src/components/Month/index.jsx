import { useContext } from 'react'
import { getMonth } from 'jary-calendar'
import Week from '../Week'
import { SelectedDateStore } from '../../store/selectedDate'
import './style.scss'

export default function Month() {
  const { state: date } = useContext(SelectedDateStore)

  const weeks = getMonth(date.getFullYear(), date.getMonth() + 1)

  return (
    <div className="month">
      <ul className="week week-head">
        <li className="day">일</li>
        <li className="day">월</li>
        <li className="day">화</li>
        <li className="day">수</li>
        <li className="day">목</li>
        <li className="day">금</li>
        <li className="day">토</li>
      </ul>
      {weeks.map((week, index) => (
        //@TODO: 나중에 key값 수정
        <Week key={index} days={week}></Week>
      ))}
    </div>
  )
}
