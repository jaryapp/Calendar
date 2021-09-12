import DateSelector from '../DateSelector'
import Month from '../Month'
import style from './style.module.scss'

export default function Calendar() {
  const { container: styleConatiner } = style
  return (
    <div className={styleConatiner}>
      <div>
        <DateSelector />
        <Month />
      </div>
    </div>
  )
}
