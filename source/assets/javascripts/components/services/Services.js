import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FilterList from './FilterList';
import ServicesGrid from './ServicesGrid';
import ServiceItems from '../../data/ServiceItems';
import { allFilters } from '../../data/ServicesFilters';

const serviceItems = ServiceItems;

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: (window.innerWidth < 545 ? 'ALL' : 'DATA_INTEGRATION'),
      windowWidth: window.innerWidth
    }
  }

  handleResize(e) {
    this.setState({
      windowWidth: window.innerWidth,
      selectedFilters: (window.innerWidth < 545 ? 'ALL' : 'DATA_INTEGRATION')
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  onFilterSelect(selectedFilters) {
    this.setState({
      selectedFilters
    });
  }

  onToggleFilters() {
    if (this.state.selectedFilters !== 'ALL') {
      this.setState({
        selectedFilters: 'ALL'
      })
    } else {
      this.setState({
        selectedFilters: null
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="row">
          <div className="col-lg-5">
            <FilterList 
              selectedFilters={this.state.selectedFilters} 
              onToggleFilters={this.onToggleFilters.bind(this)}
              onFilterSelect={this.onFilterSelect.bind(this)} />
          </div>
          <br className="visible-sm-down" />
          <div className="col-lg-7 grid">
            <ServicesGrid services={serviceItems} selectedFilters={this.state.selectedFilters} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDom.render(
  <Services />,
  document.getElementById('gridContainer')
);
