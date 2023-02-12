// Write your code here

import './index.css'

const EventItem = props => {
  const {itemList, clickButton, isTrue} = props
  const {imageUrl, id, name, location} = itemList
  //   console.log(isTrue)
  const addCss = isTrue ? 'img-border' : ''
  console.log(addCss)
  const clickItem = () => {
    clickButton(id)
  }

  return (
    <li className="list">
      <button onClick={clickItem} className="button-2">
        <img src={imageUrl} className={`img-tumbline ${addCss}`} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
