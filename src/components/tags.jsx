import React from "react"

const Tags = () => {
  const tags = ["tag1", "tag2", "tag3"]

  const renderTags = () => {
    //if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}> {tag} </li>)
  }

  return (
    <>
      {tags.length === 0 && "Тегов не найдено"}
      {renderTags()}
    </>
  )
}

export default Tags
