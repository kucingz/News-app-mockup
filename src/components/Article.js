import './Article.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Article = ({ article }) => {
  return (
    <Link className="link" to={{ 
      pathname:`/details/${article.id}`,
      state: {article}
      }}>
      <Card className="article" key={article.id}>
        <Card.Img variant="top" src={article.img} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
        <small>Written by: {article.author}</small>
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default Article
