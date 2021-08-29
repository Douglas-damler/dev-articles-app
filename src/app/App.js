import { AllArticles } from '../containers/allArticles/allArticles';
import { NavBar } from '../components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from '../components/pages/About/About';
import { NewArticle } from '../components/pages/NewArticle/NewArticle';
import { ContactUs } from '../components/pages/ContactUs/ContactsUs';
import { SignIn } from '../components/pages/SignIn/SignIn';
import { SignUp } from '../components/pages/SignUp/SignUp';
import { ArticleInformation} from '../components/pages/ArticleInformation/ArticleInformation';
import { Hero } from '../components/Hero/Hero';

const App = () => {
  return (
    <Router>

      <NavBar />
      
      <Switch>
      <Route exact path="/articles/:id">
        <ArticleInformation />
      </Route>
      
      <Route exact path="/">
        <Hero />
        <AllArticles />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/new-article">
        <NewArticle />
      </Route>

      <Route path="/contact-us">
        <ContactUs />
      </Route>

      <Route to="/sign-up">
        <SignUp />
      </Route>

      <Route to="sign-in">
        <SignIn />
      </Route>

      </Switch>
    </Router>
  )
}

export default App;

