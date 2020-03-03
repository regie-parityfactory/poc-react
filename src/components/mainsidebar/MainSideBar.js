import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./MainSidebar.css";

function MainSideBar({ onHandleToggleModal }) {
  return (
    <div id="mainsidebar">
      <ul>
        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">DASHBOARD</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">RECEIVING</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">QUALITY</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">DELIVERIES</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">PAYMENTS</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">USERS</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={onHandleToggleModal} name="growers">
                Grower
              </DropdownItem>
              <DropdownItem onClick={onHandleToggleModal} name="haulers">
                Hauler
              </DropdownItem>
              <DropdownItem onClick={onHandleToggleModal} name="myrecord">
                My Record
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="drop-down-text">SETTINGS</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Grower</DropdownItem>
              <DropdownItem>Hauler</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
      </ul>
    </div>
  );
}

export default MainSideBar;
