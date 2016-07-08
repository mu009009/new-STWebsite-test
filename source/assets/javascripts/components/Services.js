import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FilterList from './FilterList';
import ServicesGrid from './ServicesGrid';
import ServiceItems from '../data/ServiceItems';

const serviceItems = ServiceItems;

class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFilter: 'ALL'
		}
	}
	onFilterSelect(selectedFilter) {
		this.setState({ selectedFilter });
	}
	render() {
		return (
			<MuiThemeProvider>
				<div className="row">
					<div className="col-lg-5">
						<FilterList onFilterSelect={this.onFilterSelect.bind(this)} />
					</div>
					<div className="col-lg-7 grid">
						<ServicesGrid services={serviceItems} selectedFilter={this.state.selectedFilter} />
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
