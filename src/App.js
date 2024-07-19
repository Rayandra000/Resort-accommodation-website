import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/gallery/Gallery";
import Destinations from "./components/Destinations/Home";
import SinglePages from "./SinglePage/SinglePages";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/destination" exact component={Destinations} />
          <Route path="/singlepage/:id" component={SinglePages} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blogsingle/:id" component={BlogSingle} />
          <Route path="/testimonial" exact component={Testimonial} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sign-in" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
