import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import { Route, Switch } from 'react-router-dom';
import About from "./containers/About/About";
import Team from "./containers/About/Team";
import Services from "./containers/Services/Services";
import Pricing from "./containers/Pricing/Pricing";
import Portfolio from "./containers/Portfolio/Portfolio";
import Blog from "./containers/Blog/Blog";
import Contact from "./containers/Contact/Contact";
import LoginSignup from "./containers/LoginSignup/LoginSignup";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/team'} component={Team} />
        <Route exact path={'/services'} component={Services} />
        <Route exact path={'/pricing'} component={Pricing} />
        <Route exact path={'/portfolio'} component={Portfolio} />
        <Route exact path={'/blog'} component={Blog} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'} component={LoginSignup} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
