import { useLocation } from "react-router-dom";
import './ArticleDetails.css'
const ArticleDetails = () => {
  const {state} = useLocation();
  return (
    <div className="container"> 
      <img src={state.article.img} alt=""/> 
      <br />
      <div>{state.article.content}</div>
    </div>
  )
}

export default ArticleDetails
