import React from "react";
import { Link } from "react-router-dom";

import { Navbar, NavbarBrand, Form } from "reactstrap";
import { Button, FormGroup, Input } from "reactstrap";

import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";

const NavBar = props => {
  const { accountName } = props;

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const industryIcon = (
    <FontAwesomeIcon icon={faIndustry} size={"2x"} color={"Cyan"} />
  );

  return (
    <div>
      <Navbar id="hgoNavbar">
        <NavbarBrand>
          <span id="brandTitle">
            {industryIcon}&nbsp;&nbsp;Welcome, {accountName}
          </span>
        </NavbarBrand>
        <Form inline>
          <span id="linkMargin">
            <Link to="/" id="logOutId">
              Logout
            </Link>
          </span>
          <FormGroup>
            <Input
              type="search"
              name="search"
              className="searchBox"
              id="searchBoxId"
              placeholder="Type to search"
            />
          </FormGroup>
          <Button className="searchBox"> {searchIcon}</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
