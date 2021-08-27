import React from "react"

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  const formValue = () => {
    return value === 0 ? "ноль" : value
  }

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-"
    classes += value === 0 ? "danger" : "primary"
    return classes
  }

  const btnActive = () => {
    let btnDisabled = false
    btnDisabled += value === 0 ? true : false //btnDisabled = btnDisabled + count if (count ===0) { btnDisabled = true} else {btnDisabled = false}
    return btnDisabled
  }

  const divStyles = {
    display: "block",
  }

  const spanStyles = {
    width: "45px",
    height: "23px",
  }

  return (
    <>
      <div style={divStyles}>
        <h4> {name} </h4>
        <span style={spanStyles} className={getBadgeClasses()}>
          {formValue()}
        </span>
        <button
          onClick={() => onIncrement(id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => onDecrement(id)}
          className="btn btn-secondary btn-sm decrement"
          disabled={btnActive()}
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default Counter
