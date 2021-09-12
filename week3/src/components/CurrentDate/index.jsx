import { useContext } from 'react'
import { dateToYearMonth } from '../../utils/dateFormat'
import { SelectedDateStore } from '../../store/selectedDate'
import style from './style.module.scss'

export default function CurrentDate() {
  const { state: date } = useContext(SelectedDateStore)
  const { date: styleDate } = style

  return <span className={styleDate}>{dateToYearMonth(date)}</span>
}
