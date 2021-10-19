import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import ServiceDeatiles from "./components/ServiceDeatiles/ServiceDeatiles";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route  path="/home" component={Main} />
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />
          <Route  path="/service/:serviceId" component={ServiceDeatiles} />
          <Route  path="/*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
