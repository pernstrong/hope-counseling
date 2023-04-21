import { Switch, Route, Redirect } from "react-router-dom"

import Counseling from "../Counseling/Counseling"
import Crunchi from "../Crunchi/Crunchi"
import FertilityCare from "../FertilityCare/FertilityCare"
import Home from "../Home/Home"
import Header from "../Navigation/Header/Header"
import "../custom.css"

import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route
          path="/counseling/:view?"
          render={({ match }) => {
            const { view } = match.params
            return <Counseling paramView={view} />
          }}
        ></Route>
        <Route
          path="/fertility-care/:view?"
          render={({ match }) => {
            const { view } = match.params
            return <FertilityCare paramView={view} />
          }}
        ></Route>
        <Route
          path="/crunchi/:view?"
          render={({ match }) => {
            const { view } = match.params
            return <Crunchi paramView={view} />
          }}
        ></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
