import { Dropdown, DropdownButton } from "react-bootstrap"

import "./Header.css"

const Header = () => {

  return (
    <header className="flex f-ai-c f-jc-c">
      <div className="flex f-jc-sa w-40">
        <DropdownButton title="Counseling">
          <Dropdown.Item>Hope Counseling</Dropdown.Item>
          <Dropdown.Item>Services</Dropdown.Item>
          <Dropdown.Item>About Me</Dropdown.Item>
          <Dropdown.Item>Brainspotting</Dropdown.Item>
          <Dropdown.Item>Resources</Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Fertility Care">
          <Dropdown.Item>Hope Fertility Care</Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Crunchi">
          <Dropdown.Item>Crunchi</Dropdown.Item>
        </DropdownButton>
      </div>
    </header>
  )
}

export default Header
