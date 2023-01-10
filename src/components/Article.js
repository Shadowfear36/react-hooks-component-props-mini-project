import React from 'react'

export default function Article({title, date="January 1, 1970", preview, key}) {
    console.log(title);
  return (
    <article id={key}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}
