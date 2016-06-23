import React, { Component } from 'react';
import ReactDom from 'react-dom';

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
			<div className="row">
				<div className="col-xl-4">
					<FilterList onFilterSelect={this.onFilterSelect.bind(this)} />
				</div>
				<div className="col-xl-7">
					<ServicesGrid services={serviceItems} selectedFilter={this.state.selectedFilter} />
				</div>
			</div>
		);
	}
}

ReactDom.render(
	<Services />,
	document.getElementById('gridContainer')
);
