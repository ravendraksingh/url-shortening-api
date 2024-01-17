import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Login } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header-box">
      <span className="d-flex">
        <span className="logo-text">Shortly</span>
        <ul className="nav">
          <li className="nav-item">Feature</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">Resources</li>
        </ul>
      </span>
      <span>
        <ul className="nav">
          <li className="nav-item">Login</li>
          <li className="signup">Sign Up</li>
        </ul>
        <span
          className="ham"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <MenuIcon className="ham" />
        </span>
      </span>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            class="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
          <hr />
          <p>Login</p>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
