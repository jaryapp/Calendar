import { useContext } from 'react'
import { dateToYearMonth } from '../../utils/dateFormat'
import { SelectedDateStore } from '../../store/selectedDate'

export default function CurrentDate() {
  const { state: date } = useContext(SelectedDateStore)

  return <span>{dateToYearMonth(date)}</span>
}
