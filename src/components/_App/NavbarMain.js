import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../utils/recoil-atoms";
import { Link } from "gatsby";

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <div className="rewy-nav">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link
            to="/"
            onClick={() => setCollapsed(true)}
            className="navbar-brand"
          >
            Logo
          </Link>

          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={() => setCollapsed(true)}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about-us"
                    onClick={() => setCollapsed(true)}
                    className="nav-link"
                  >
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="others-option d-flex align-items-center">
            <div className="option-item">
              <Link
                to="/contact"
                activeClassName="active"
                onClick={() => setCollapsed(true)}
                className="default-btn"
              >
                <i className="flaticon-right"></i> Github{" "}
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
