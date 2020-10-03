import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import store from "../../store";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubNavOpen: false,
      currentOpenParentId: "0",
      activeId: "1",
    };
  }
  componentDidMount = () => {
    this.setActiveMenu(this.props.navData);
  };
  renderSubNavs = (subNavs, id) => {
    return subNavs.map((subNav) => (
      <div
        class={`collapse ${
          this.state.isSubNavOpen && this.state.activeId === id && "show"
        }`}
      >
        <ul class="nav flex-column sub-menu">
          <li class="nav-item sub-nav">
            <button
              class="nav-link"
              onClick={() => this.handleSubMenuRedirect(subNav.route, id)}
            >
              {subNav.navText}
            </button>
          </li>
        </ul>
      </div>
    ));
  };
  handleSubMenuRedirect = (route, id) => {
    this.props.history.push(route);
    this.setState({ activeId: id });
    this.setState({ isSubNavOpen: true });
  };
  handleSubMenuShow = (navItem) => {
    this.setState({ activeId: navItem.id }, () => {
      if (navItem.hasSubNav) {
        if (this.state.activeId === navItem.id) {
          if (this.state.activeId === this.state.currentOpenParentId) {
            this.setState({ isSubNavOpen: !this.state.isSubNavOpen });
          } else {
            this.setState({ isSubNavOpen: true });
            this.setState({ currentOpenParentId: this.state.activeId });
          }
        }
      } else {
        this.props.history.push(navItem.route);
      }
    });
  };
  setActiveMenu = (navData) => {
    const path = "/" + this.props.history.location.pathname.split("/")[1];

    navData.map((nav) => {
      if (nav.route === path) {
        this.setState({ activeId: nav.id });
        if (this.state.currentOpenParentId !== nav.id && nav.hasSubNav) {
          this.setState({
            isSubNavOpen: true,
            currentOpenParentId: nav.id,
          });
        }
      }
    });
  };
  render() {
    return this.props.navData.map((navItem) => (
      <li class={`nav-item ${this.state.activeId === navItem.id && "active"}`}>
        <button
          key={navItem.id}
          class={`nav-link ${
            this.state.isSubNavOpen &&
            this.state.activeId === navItem.id &&
            "show"
          }`}
          onClick={() => this.handleSubMenuShow(navItem)}
        >
          <FontAwesomeIcon
            key={"navIcon" + navItem.id}
            icon={fa[navItem.iconName]}
            className="navIcons"
          />
          <span class="menu-title">{navItem.navText}</span>
          {navItem.hasSubNav &&
            (this.state.isSubNavOpen && this.state.activeId === navItem.id ? (
              <FontAwesomeIcon icon={fa.faAngleDown} className="menu-arrow" />
            ) : (
              <FontAwesomeIcon icon={fa.faAngleRight} className="menu-arrow" />
            ))}
        </button>
        {navItem.hasSubNav && this.renderSubNavs(navItem.subNavs, navItem.id)}
      </li>
    ));
  }
}

export default withRouter(NavItem);
