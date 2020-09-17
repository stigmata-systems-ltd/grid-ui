import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import store from '../../store';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubNavOpen: false,
      activeId: '1',
    };
  }
  componentDidMount = () => {
    this.setActiveMenu(this.props.navData);
  };
  renderSubNavs = subNavs => {
    console.log(`SubNav data: ${JSON.stringify(subNavs)}`);
    return subNavs.map(subNav => (
      <div
        class={`collapse ${this.state.isSubNavOpen && 'show'}`}
        id="ui-basic"
      >
        <ul class="nav flex-column sub-menu">
          <li class="nav-item sub-nav">
            <button
              class="nav-link"
              onClick={() => this.handleSubMenuRedirect(subNav.route)}
            >
              {subNav.navText}
            </button>
          </li>
        </ul>
      </div>
    ));
  };
  handleSubMenuRedirect = route => {
    this.props.history.push(route);
  };
  handleSubMenuShow = navItem => {
    if (navItem.hasSubNavGrid) {
      this.setState({ isSubNavOpen: !this.state.isSubNavOpen });
    } else if (navItem.hasSubNavGrid) {
      this.setState({ isSubNavOpen: !this.state.isSubNavOpen });
    } else {
      this.props.history.push(navItem.route);
    }
  };
  setActiveMenu = navItem => {
    const path = this.props.history.location.pathname.split('/')[1];
    navItem.map(nav => {
      if (nav.route === path) {
        this.setState({ activeId: nav.id });
      }
    });
  };
  render() {
    return this.props.navData.map(navItem => (
      <li class={`nav-item ${this.state.activeId === navItem.id && 'active'}`}>
        <button
          key={navItem.id}
          class={`nav-link ${this.state.isSubNavOpen && 'show'}`}
          onClick={() => this.handleSubMenuShow(navItem)}
        >
          <FontAwesomeIcon
            key={'navIcon' + navItem.id}
            icon={fa[navItem.iconName]}
            className="navIcons"
          />
          <span class="menu-title">{navItem.navText}</span>
          {navItem.hasSubNavSCR ||
            (navItem.hasSubNavGrid &&
              (!this.state.isSubNavOpen ? (
                <FontAwesomeIcon
                  icon={fa.faAngleRight}
                  className="menu-arrow"
                />
              ) : (
                <FontAwesomeIcon icon={fa.faAngleDown} className="menu-arrow" />
              )))}
        </button>
        {navItem.id === '2'
          ? navItem.hasSubNavGrid && this.renderSubNavs(navItem.subNavs)
          : navItem.hasSubNavSCR && this.renderSubNavs(navItem.subNavs)}
        {/* {navItem.hasSubNavGrid && this.renderSubNavs(navItem.subNavs)} */}
      </li>
    ));
  }
}

export default withRouter(NavItem);
