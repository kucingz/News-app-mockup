import { useState, useEffect} from 'react'
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ArticleDetails from './components/ArticleDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () =>{
      const articlesFromServer = await fetchArticles()
      setArticles(articlesFromServer)
    }

    getArticles()
  }, [])

  const fetchArticles = async () =>{
    const res = await fetch(
      'http://localhost:5000/articles')
    const data = await res.json()

    return data
  }
  return (
    <Router>
      <>
      <Header />
      <Route path='/' exact render={(props) => (
        <>
          <ArticlesList articles={articles} />
        </>
      )} />
      <Route path='/details/:id' exact component={ArticleDetails} />
      </>
    </Router>
  );
}

export default App;
