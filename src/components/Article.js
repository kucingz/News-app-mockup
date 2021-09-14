import './Article.css'
import {Card} from 'react-bootstrap'
const Article = ({ article }) => {
  return (
    <Card className="article">
      <Card.Img variant="top" src={article.img} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">Written by: {article.author}</small>
    </Card.Footer>
    </Card>
  )
}

export default Article
