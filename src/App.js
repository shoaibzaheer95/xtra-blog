import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import BlogDetails from './components/post/Single';
import About from './components/About';
import Contact from './components/Contact'
function App() {
  return (
    <Router basename="/blogs/">
    <div className="App">
     <Header/>
     <div className="container-fluid">
          <main className="tm-main">
            <Switch>
              <Route exact path="/" component={Home} />
            
              <Route path="/about" component={About} />
              
              <Route path="/contact" component={Contact} />
              
              <Route path="/:id" component={BlogDetails} />
               
            </Switch>
          </main>
          <main className="tm-main">
            <Footer/>
          </main>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
