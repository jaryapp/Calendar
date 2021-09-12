import './style.scss'
import CurrentDate from '../CurrentDate'

export default function DateSelector() {
  return (
    <div className="date-selector">
      <div id="prev">
        <i className="fas fa-arrow-left arrow"></i>
      </div>
      <div className="date">
        <CurrentDate />
      </div>
      <div id="next">
        <i id="next" className="fas fa-arrow-right arrow"></i>
      </div>
    </div>
  )
}
