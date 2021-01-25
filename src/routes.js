import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./App";
import Categories from "./pages/Cocktail_Category/Category";
import Drinks from "./pages/Drinks/Drinks";
import DrinksDetail from "./pages/Drinks/Dink_Detail/Drink_detail";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faEdit,
  faTrash,
  faCamera,
  faArrowLeft,
  faImages,
  faBus,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faCheckSquare,
  faEdit,
  faTrash,
  faCamera,
  faArrowLeft,
  faImages,
  faBus,
  faSearch
);


const PagesRoute = () => (
  <Router>
    <Switch>
      <Provider store={store}>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/drinks/:category" component={Drinks} />
        <Route exact path="/drinks/detail/:drink" component={DrinksDetail} />
      </Provider>
    </Switch>
  </Router>
);

export default PagesRoute;
