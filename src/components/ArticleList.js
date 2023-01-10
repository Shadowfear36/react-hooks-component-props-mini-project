import React from 'react';
import Article from './Article';

export default function ArticleList({posts}) {
    console.log(posts);

   const article = posts.map(eachItem => {
       return(
         <Article 
        key={eachItem.id}
        titles={eachItem.title}
        date={eachItem.date}
        preview={eachItem.preview}
        />
        )
    })
    
  return (
    <main>
       {article}
    </main>
  )
}
