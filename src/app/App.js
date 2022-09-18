import Template from "common/components/Template";
import Dashboard from "features/Dashboard/pages";
import Home from "features/Dashboard/pages/Home";
import MovieManagement from "features/Movie/pages/MovieManagement";

import Showtime from "features/Showtime/pages";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Template path="/" exact component={Home} />
        <Template path="/admin/list-movie" exact component={MovieManagement} />
        {/* <Template path="/admin/films" exact component={Films} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
