/**
 * NagiosTV https://nagiostv.com
 * Copyright (C) 2008-2020 Chris Carey https://chriscarey.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import './NavSidebar.css';
import ReactTooltip from 'react-tooltip';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFilter, faTachometerAlt, faTools } from '@fortawesome/free-solid-svg-icons';

class NavSidebar extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   //console.log('shouldComponentUpdate', nextProps, nextState);
  //   if (nextProps.nowtime !== this.props.nowtime || nextProps.prevtime !== this.props.prevtime) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  clickedDashboard = () => {
    this.props.updateRootState({
      currentPage: 'dashboard'
    });
  };

  clickedFilter = () => {
    this.props.updateRootState({
      hideFilters: !this.props.hideFilters
    });
  };

  clickedSettings = () => {
    this.props.updateRootState({
      currentPage: 'settings'
    });
  };

  clickedCharts = () => {
    this.props.updateRootState({
      hideHistoryChart: !this.props.hideHistoryChart
    });
  };

  render() {
    
    let settingsIconClassName = '';
    if (this.props.currentPage === 'settings') { settingsIconClassName = 'nav-sidebar-icon-selected'; }
    if (this.props.hostlistError) { settingsIconClassName = 'nav-sidebar-icon-error'; }

    return (
      <div className="NavSidebar">
        
        <div className="nav-sidebar-icon">
          <span data-tip="Dashboard">
            <FontAwesomeIcon onClick={this.clickedDashboard} className={this.props.currentPage === 'dashboard' ? 'nav-sidebar-icon-selected' : ''} icon={faTachometerAlt} />
          </span>
        </div>

        <div className="nav-sidebar-icon">
          <span data-tip="Settings">
            <FontAwesomeIcon
              onClick={this.clickedSettings}
              className={settingsIconClassName}
              icon={faTools}
            />
          </span>
        </div>

        <div className="nav-sidebar-hr"></div>

        {/*
        <div className="nav-sidebar-icon">
          <FontAwesomeIcon className="" icon={faServer} />
        </div>
        */}

        <div className="nav-sidebar-icon">
          <span data-tip="Show Charts">
            <FontAwesomeIcon onClick={this.clickedCharts} className={this.props.hideHistoryChart ? '' : 'nav-sidebar-icon-selected'} icon={faChartBar} />
          </span>
        </div>

        {/*
        <div className="nav-sidebar-icon">
          <FontAwesomeIcon className="" icon={faBell} />
        </div>
        */}

        <div className="nav-sidebar-icon">
          <span data-tip="Show Filters">
            <FontAwesomeIcon onClick={this.clickedFilter} className={this.props.hideFilters ? '' : 'nav-sidebar-icon-selected'} icon={faFilter} />
          </span>
        </div>

        <div className="nav-sidebar-bottom-float">          

        </div>

        <ReactTooltip place="right" type="dark" effect="solid"/>
        
      </div>
    );
  }
}

export default NavSidebar;
