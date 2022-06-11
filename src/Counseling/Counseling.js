import { useEffect, useState } from "react"

import { Helmet } from "react-helmet"

import Sidebar from "../Navigation/Sidebar/Sidebar"
import AboutMe from "./Tabs/AboutMe"
import Brainspotting from "./Tabs/Brainspotting"
import Home from "./Tabs/Home"
import Resources from "./Tabs/Resources"
import Services from "./Tabs/Services"

const paramMap = {
  home: "Home",
  "about-me": "About Me",
  services: "Services",
  brainspotting: "Brainspotting",
  resources: "Resources"
}

const Counseling = ({ paramView = "home" }) => {
  const [view, setView] = useState(paramMap[paramView])

  useEffect(() => {
    console.log("change")
    setView(paramMap[paramView])
  }, [paramView])

  const tabs = ["Home", "About Me", "Services", "Brainspotting", "Resources"]

  return (
    <>
      <Helmet>
        <title>Hope Conseling, LLC</title>
      </Helmet>
      <Sidebar tabs={tabs} view={view}/>
      <main className="">
        <p className="bold" style={{ fontSize: "1.5em" }}>
          Hope Conseling, LLC | {view}
        </p>
        {view === "Home" && <Home />}
        {view === "About Me" && <AboutMe />}
        {view === "Services" && <Services />}
        {view === "Brainspotting" && <Brainspotting />}
        {view === "Resources" && <Resources />}
      </main>
    </>
  )
}

export default Counseling
