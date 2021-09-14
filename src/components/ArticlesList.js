import Article from './Article'
import { CardGroup, Col } from 'react-bootstrap'

const ArticlesList = ({ articles }) => {
  return (

    <CardGroup className="articles">
        {articles.map((article) => (
           <Col xs={4} md={4} lg={4}>
          <Article key={article.id} article={article}/>
          </Col>
        ))}
    </CardGroup>

  )
}

export default ArticlesList
