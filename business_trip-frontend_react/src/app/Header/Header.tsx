import React from 'react';

export function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="/home">
              <img
                alt=""
                src="src/assets/img/header/creep.svg"
                width="30"
                height="30"
                className="d-linline-block align top"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/users">
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/traveldestinations">
                  Reise Ziele
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/businesstrips">
                  Geschäftsreisen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
