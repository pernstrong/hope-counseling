import { Dropdown, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./Header.css"

const Header = () => {
  return (
    <header className="flex f-ai-c">
      <Link to="/">
        <p className="h2 mx-5" style={{ color: "fff" }}>
          Hope Corner
        </p>
      </Link>
      <div className="flex f-jc-sb">
        <DropdownButton title="Counseling" className="mx-3">
          <Dropdown.Item>
            <Link to="/counseling/home">Hope Counseling</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/counseling/about-me">About Me</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/counseling/services">Services</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/counseling/brainspotting">Brainspotting</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/counseling/resources">Resources</Link>
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Fertility Care" className="mx-3">
          <Dropdown.Item>
            <Link to="/fertility-care/creighton-model">Creighton Model</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/fertility-care/naprotechnology">NaproTechnology</Link>
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Crunchi" className="mx-3">
          <Dropdown.Item>
            <Link to="/crunchi/home">Home</Link>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </header>
  )
}

export default Header
