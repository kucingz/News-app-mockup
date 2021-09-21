import Article from './Article'
import { CardGroup, Col, Carousel } from 'react-bootstrap'
import './ArticleList.css'

const ArticlesList = ({ articles }) => {
  return (
    <div className="whole">
      <Carousel  fade> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp3390729.jpg"
            alt="First slide"
            width="1100" height="400"
          />
          <Carousel.Caption>
            <h3>TESTESTESSTESTESTES</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.wallpapersafari.com/56/70/k0D58R.jpg"
            alt="Second slide"
            width="1100" height="400"
          />
          <Carousel.Caption>
            <h3>Second slide labelxd</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.teahub.io/photos/full/216-2165469_lovely-cat-full-hd-wallpaper-for-laptop-sweet.jpg"
            alt="Third slide"
            width="1100" height="400"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardGroup className="articles"> 
          {articles.map((article) => (
            <Col xs={4} md={4} lg={4} key={article.id}>
              <Article article={article}/>
            </Col>
          ))}
      </CardGroup>
    </div>
  )
}

export default ArticlesList
