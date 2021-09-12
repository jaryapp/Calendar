import { useContext } from 'react'
import CurrentDate from '../CurrentDate'
import {
  SelectedDateStore,
  prevMonth,
  nextMonth,
} from '../../store/selectedDate'
import './style.scss'

export default function DateSelector() {
  const { dispatch } = useContext(SelectedDateStore)

  const handlePrev = () => {
    dispatch(prevMonth())
  }

  const handleNext = () => {
    dispatch(nextMonth())
  }

  return (
    <div className="date-selector">
      <div id="prev" onClick={handlePrev}>
        <i className="fas fa-arrow-left arrow"></i>
      </div>
      <div className="date">
        <CurrentDate />
      </div>
      <div id="next" onClick={handleNext}>
        <i className="fas fa-arrow-right arrow"></i>
      </div>
    </div>
  )
}
