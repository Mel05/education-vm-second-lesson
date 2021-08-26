import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const tags = ["tag1", "tag2", "tag3"]

  const formCount = () => {
    return count === 0 ? "ноль" : count
  }

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-"
    classes += count === 0 ? "danger" : "primary"
    return classes
  }

  const btnActive = () => {
    let btnDisabled = false
    btnDisabled += count === 0 ? true : false //btnDisabled = btnDisabled + count if (count ===0) { btnDisabled = true} else {btnDisabled = false}
    return btnDisabled
  }

  const renderTags = () => {
    //if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}> {tag} </li>)
  }

  const handleIncrement = (productId) => {
    console.log(productId)
    setCount(count + 1)
  }

  const handleDecrement = (productId) => {
    if (count === 0) return
    setCount(count - 1)
  }

  const spanStyles = {
    width: "45px",
    height: "23px",
  }

  return (
    <>
      {tags.length === 0 && "Тегов не найдено"}
      {renderTags()}
      <span style={spanStyles} className={getBadgeClasses()}>
        {formCount()}
      </span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>

      <button
        onClick={handleDecrement}
        className="btn btn-secondary btn-sm decrement"
        disabled={btnActive()}
      >
        Decrement
      </button>
    </>
  )
}

export default Counter
