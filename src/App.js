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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/team'} component={Team} />
        <Route path={'/services'} component={Services} />
        <Route path={'/pricing'} component={Pricing} />
        <Route path={'/portfolio'} component={Portfolio} />
        <Route path={'/blog'} component={Blog} />
        <Route path={'/contact'} component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
