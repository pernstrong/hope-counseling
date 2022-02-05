import { Route, Routes, Redirect } from "react-router-dom"

import Home from "../Home/Home"
import Counseling from "../Counseling/Counseling"
import FertilityCare from "../FertilityCare/FertilityCare"
import Crunchi from "../Crunchi/Crunchi"
import "../custom.css"

import './App.css'

const App = () => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      >
      </Route>
      <Route
        path="/counseling"
        element={<Counseling />}
      >
      </Route>
      <Route
        path="/fertility-care"
        element={<FertilityCare />}
      >
      </Route>
      <Route
        path="/crunchi"
        element={<Crunchi />}
      >
      </Route>
    </Routes>
  )
}

export default App
