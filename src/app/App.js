import { AllArticles } from '../containers/allArticles/allArticles';
import { CurrentArticle } from '../containers/CurrentArticle/CurrentArticle';
import { NavBar } from '../components/NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
    <div className="main">
      <h3>Featured Today</h3>
      <AllArticles />
    </div>
    </div>
  )
}

export default App;

