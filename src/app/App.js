import Template from "common/components/Template";
import Home from "features/dashboard/pages/Home";
import FormMovie from "features/movie/components/FormMovie";
import MovieManagement from "features/movie/pages/MovieManagement";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Template path="/" exact component={Home} />
        <Template path="/admin/list-movie" exact component={MovieManagement} />
        <Template
          path="/admin/list-movie/add-movie"
          exact
          component={FormMovie}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
