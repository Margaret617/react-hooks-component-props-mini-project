import React from 'react';

const getReadTimeString = (readTime) => {
  if (readTime < 30) {
    const coffeeCups = Math.ceil(readTime / 5);
    return "☕️".repeat(coffeeCups) + ` ${readTime} min read`;
  } else {
    const bentoBoxes = Math.ceil(readTime / 10);
    return "🍱".repeat(bentoBoxes) + ` ${readTime} min read`;
  }
};

const Article = ({ title, date = "January 1, 1970", preview, readTime }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} - {getReadTimeString(readTime)}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
