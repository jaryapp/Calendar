import { useContext } from 'react'
import CurrentDate from '../CurrentDate'
import {
  SelectedDateStore,
  prevMonth,
  nextMonth,
} from '../../store/selectedDate'
import style from './style.module.scss'
import cx from 'classnames'

export default function DateSelector() {
  const { dispatch } = useContext(SelectedDateStore)
  const { date_selector: styleDateSelector, arrow: styleArrow } = style

  const handlePrev = () => {
    dispatch(prevMonth())
  }

  const handleNext = () => {
    dispatch(nextMonth())
  }

  return (
    <div className={styleDateSelector}>
      <div id="prev" onClick={handlePrev}>
        <i className={cx('fas', 'fa-arrow-left', styleArrow)}></i>
      </div>
      <CurrentDate />
      <div id="next" onClick={handleNext}>
        <i className={cx('fas', 'fa-arrow-right', styleArrow)}></i>
      </div>
    </div>
  )
}
