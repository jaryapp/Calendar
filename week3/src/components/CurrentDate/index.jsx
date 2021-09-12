import { dateToYearMonth } from '../../utils/dateFormat'

export default function CurrentDate() {
  const date = new Date()

  return <span>{dateToYearMonth(date)}</span>
}
