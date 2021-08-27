import React, { useState } from "react"
import Counter from "./counter"

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <>
      <button onClick={onReset} className="btn btn-primary btn-sm m2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </>
  )
}

export default Counters
