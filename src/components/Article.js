const Article = ({ article }) => {
  return (
    <div className='article'>
      <h3>{article.content}</h3>
      <p>{article.author}</p>
    </div>
  )
}

export default Article
