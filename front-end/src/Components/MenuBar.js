import React from "react";
import "./MenuBar.css";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  listener = null;
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  

  render() {
    const userToken = window.localStorage.getItem("token")
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <div className={`Nav ${this.state.nav && "Nav__black"}`}>
            <div className="Nav__right">
                    { userToken === null ? 
                        <ul className="Nav__item-wrapper">
                          
                            <NavLink exact activeClassName="Nav__item--active" className="Nav__link" to="/">
                                <li className="Nav__item">
                                    Home
                                </li>
                            </NavLink>
                            <NavLink activeClassName="Nav__item--active" className="Nav__link" to="/login">
                                <li className="Nav__item">
                                    Login
                                </li>
                            </NavLink>
                            <NavLink activeClassName="Nav__item--active" className="Nav__link" to="/registration">
                                <li className="Nav__item">
                                    Register
                                </li>
                            </NavLink>
                        </ul>
                        :
                        <ul className="Nav__item-wrapper">
                            <NavLink exact activeClassName="Nav__item--active" className="Nav__link" to="/">
                                <li className="Nav__item">
                                    Errands
                                </li>
                            </NavLink>
                            <NavLink activeClassName="Nav__item--active" className="Nav__link" to="/login">
                                <li className="Nav__item">
                                    Travel
                                </li>
                            </NavLink>
                            <NavLink activeClassName="Nav__item--active" className="Nav__link" to="/registration">
                                <li className="Nav__item">
                                    Past Errands
                                </li>
                            </NavLink>
                        </ul>
                    }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuBar;
