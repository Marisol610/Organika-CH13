import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Catalog from "./components/Catalog/catalog";
import Home from "./components/home/home";
import About from "./components/about/about";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <h1> The Organic Online Store</h1>
        <h2>Shipping 100's of Vegetables and Fruit Varieties.</h2>

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={About}></Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
