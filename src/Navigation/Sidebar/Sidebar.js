import { Link } from "react-router-dom"

import "./Sidebar.css"

const nameToUrl = (url) => {
  return url
    .replace(/[^\w\s-]/gi, "")
    .replace(/\s/g, "-")
    .toLowerCase()
}

const Sidebar = ({ page, tabs, view }) => {
  const displayTabs = () => {
    return tabs.map((tab) => {
      const highlightActive = tab === view ? "tab-active" : "tab-inactive"
      return (
        <div className="flex f-jc-c">
          <Link
            className={`d-b my-4 ${highlightActive}`}
            to={`/${page}/${nameToUrl(tab)}`}
          >
            {tab}
          </Link>
        </div>
      )
    })
  }

  return (
    <nav className="sidebar">
      <div className="flex f-jc-c bold pt-4">
        {/* <Link to="/" className="hope-corner-sidenav">
          Hope Corner
        </Link> */}
      </div>
      <div className="mt-5">{displayTabs()}</div>
    </nav>
  )
}

export default Sidebar
