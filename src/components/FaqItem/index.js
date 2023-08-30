// Write your code here.
import './index.css'

const Item = props => {
  const {details} = props

  return (
    <li className="list1">
      <p>{details}</p>
    </li>
  )
}

export default Item
