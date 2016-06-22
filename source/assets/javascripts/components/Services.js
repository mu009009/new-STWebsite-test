import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AbsoluteGrid from 'react-absolute-grid';
import FilterList from './FilterList';
import ServicesGridItem from './ServicesGridItem';

var serviceItems = [
  {key: 1, name: 'Data Management', sort: 0, filtered: 0, categories: ['ALL', 'FUNNEL']},
  {key: 2, name: 'Data Hygiene', sort: 1, filtered: 0, categories: ['ALL', 'FUNNEL']},
  {key: 3, name: 'Analytics', sort: 2, filtered: 0, categories: ['ALL', 'FUNNEL']},
  {key: 4, name: 'IT Integration', sort: 3, filtered: 0, categories: ['ALL', 'FUNNEL']},
  {key: 5, name: 'Targeting', sort: 4, filtered: 0, categories: ['ALL', 'FUNNEL']},
  {key: 6, name: 'CRM', sort: 5, filtered: 0, categories: ['ALL', 'FUNNEL']},
];

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
			<div>
				<FilterList onFilterSelect={this.onFilterSelect.bind(this)} />
				<AbsoluteGrid
					items={serviceItems}
					displayObject={(<ServicesGridItem {...serviceItems} />)} />
			</div>
		);
	}
}

ReactDom.render(
	<Services />,
	document.getElementById('gridContainer')
);
