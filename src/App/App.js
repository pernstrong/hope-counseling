import { Switch, Route, Redirect } from "react-router-dom"

import Counseling from "../Counseling/Counseling"
import Crunchi from "../Crunchi/Crunchi"
import FertilityCare from "../FertilityCare/FertilityCare"
import Home from "../Home/Home"
import "../custom.css"

import "./App.css"

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />}></Route>
      <Route
        path="/counseling/:view?"
        render={({ match }) => {
          const { view } = match.params
          return <Counseling paramView={view} />
        }}
      ></Route>
      <Route path="/fertility-care" render={() => <FertilityCare />}></Route>
      <Route path="/crunchi" render={() => <Crunchi />}></Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default App
