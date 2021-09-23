import Article from './Article'
import { CardGroup, Col, Carousel } from 'react-bootstrap'
import './ArticlesList.css'

const ArticlesList = ({ articles }) => {
  
  return (
    <div className="whole">
      <Carousel  fade> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={articles[articles.length-1]?.img}
            alt="First slide"
            width="1100" height="400"
          />
          <Carousel.Caption>
            <h3>{articles[articles.length-1]?.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={articles[articles.length-2]?.img}
            alt="Second slide"
            width="1100" height="400"
          />
          <Carousel.Caption>
            <h3>{articles[articles.length-2]?.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={articles[articles.length-3]?.img}
            alt="Third slide"
            width="1100" height="400"
          />
          <Carousel.Caption>
            <h3>{articles[articles.length-3]?.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardGroup className="articles"> 
          {articles.map((article) => (
            <Col xs={6} md={6} lg={6} key={article.id}>
              <Article article={article}/>
            </Col>
          ))}
      </CardGroup>
    </div>
  )
}



export default ArticlesList
