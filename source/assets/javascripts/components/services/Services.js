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
			selectedFilters: 'DATA_INTEGRATION'
		}
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
