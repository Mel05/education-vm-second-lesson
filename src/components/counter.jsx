import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "ноль" : count;
  };

  const grtBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    //if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}> {tag} </li>);
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = (productId) => {
    if (count === 0) return;
    console.log(productId);
    setCount(count - 1);
  };

  return (
    <>
      {tags.length === 0 && "Тегов не найдено"}
      {renderTags()}
      <span className={grtBadgeClasses()}> {formCount()} </span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>

      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;