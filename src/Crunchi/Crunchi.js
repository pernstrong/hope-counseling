import { useEffect } from "react"
import { useState } from "react"

import { Helmet } from "react-helmet"

import Sidebar from "../Navigation/Sidebar/Sidebar"
import Home from "./Home"

const paramMap = {
  home: "Home"
}

const Crunchi = ({ paramView }) => {
  const [view, setView] = useState(paramMap[paramView])

  useEffect(() => {
    setView(paramMap[paramView])
  }, [paramView])

  const tabs = ["Home"]

  return (
    <>
      <Helmet>
        <title>Hope-filled Crunchi Life</title>
      </Helmet>
      <Sidebar page="crunchi" tabs={tabs} view={view} />
      <main>
        <p className="bold" style={{ fontSize: "1.5em" }}>
          Hope FertilityCare Center | {view}
        </p>
        {view === "Home" && <Home />}
      </main>
    </>
  )
}

export default Crunchi
