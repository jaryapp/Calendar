import Day from '../Day'

export default function Week({ days = [] }) {
  return (
    <ul className="week">
      {days.map((day) => (
        <Day key={day} day={day} />
      ))}
    </ul>
  )
}
