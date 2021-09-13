import { useState, useEffect} from 'react'
import Header from './components/Header'
import Articles from './components/ArticlesList'
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
    <>
    <Header />
    <Articles articles={articles} />
    </>
  );
}

export default App;
