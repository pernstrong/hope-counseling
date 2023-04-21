import { useState, useEffect } from "react"

import { Helmet } from "react-helmet"

import Sidebar from "../Navigation/Sidebar/Sidebar"
import CreightonModel from "./Tabs/CreightonModel"
import Naprotechnology from "./Tabs/Naprotechnology"

const paramMap = {
  "creighton-model": "Creighton Model",
  naprotechnology: "NaproTechnology"
}

const FertilityCare = ({ paramView }) => {
  const [view, setView] = useState(paramMap[paramView])

  useEffect(() => {
    setView(paramMap[paramView])
  }, [paramView])

  const tabs = ["Creighton Model", "NaproTechnology"]

  return (
    <>
      <Helmet>
        <title>Hope FertilityCare Center</title>
      </Helmet>
      <Sidebar page="fertility-care" tabs={tabs} view={view} />
      <main>
        <p className="bold" style={{ fontSize: "1.5em" }}>
          Hope FertilityCare Center | {view}
        </p>
        {view === "Creighton Model" && <CreightonModel />}
        {view === "NaproTechnology" && <Naprotechnology />}
      </main>
    </>
  )
}

export default FertilityCare
