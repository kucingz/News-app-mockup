import Article from './Article'

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article}/>
      ))}
    </>
  )
}

export default ArticlesList

