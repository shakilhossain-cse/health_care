import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Congrates from "./components/Congrates/Congrates";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Pharches from "./components/Pharches/Pharches";
import Register from "./components/Register/Register";
import ServiceDeatiles from "./components/ServiceDeatiles/ServiceDeatiles";
import AuthProvider from "./context/AuthProvider";
import PrivetRoute from "./route/PrivetRoute";

function App() {



  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/service/:serviceId"
            component={ServiceDeatiles}
          />
          <PrivetRoute path="/pharches/:serviceId">
            <Pharches />
          </PrivetRoute>
          <PrivetRoute path="/congrets">
            <Congrates />
          </PrivetRoute>
          <Route path="/*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
