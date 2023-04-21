import { Dropdown, DropdownButton } from "react-bootstrap"

import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex f-ai-c f-jc-c">
      <div className="flex f-jc-sa w-40">
        <DropdownButton title="Counseling">
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
        <DropdownButton title="Fertility Care">
          <Dropdown.Item>
            <Link to="/fertility-care">Hope Fertility Care</Link>
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Crunchi">
          <Dropdown.Item>
            <Link to="/crunchi">Crunchi</Link>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </header>
  )
}

export default Header
