import React from 'react'
import { Route } from 'react-router-dom'
//import { NavLink } from 'react-router-dom'
import '../components/SmartParking.css'
import {
  Nav,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap'
import Place1 from './Place1'
import Place2 from './Place2'

const Home = () => <SmartParking />
const P1 = () => <Place1 />
const P2 = () => <Place2 />

export const SmartParking = () => {
  return (
    <div class="col-md5">
      <Navbar color="light" light expand="md">
        <NavbarText className="mr-auto">SmartParking</NavbarText>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Placement
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/place1">Place 1</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/place2">Place 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
      <div className="App container">
        <Route exact path="/" component={Home} />
        <Route path="/place1" component={P1} />
        <Route path="/place2" component={P2} />
      </div>
      <div>
        <Button color="secondary" id="right-panel">
          About us
        </Button>
      </div>
    </div>
  )
}
export default SmartParking
