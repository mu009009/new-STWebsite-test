import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AbsoluteGrid from 'react-absolute-grid';

var serviceItems = [
  {key: 1, name: 'Data Management', sort: 0, filtered: 0},
  {key: 2, name: 'Data Hygiene', sort: 1, filtered: 0},
  {key: 3, name: 'Analytics', sort: 2, filtered: 0},
  {key: 4, name: 'IT Integration', sort: 3, filtered: 0},
  {key: 5, name: 'Targeting', sort: 4, filtered: 0},
  {key: 6, name: 'CRM', sort: 5, filtered: 0},
];

export default class FiltersList extends React.Component {
	onFilter() {
		console.log('filter button pressed');
	}
	render() {
		return (
			<ol>
				<li>
					<button onClick={this.onFilter()}>introduce my product to a new market.</button>
				</li>
				<li>
					<button onClick={this.onFilter()}>extend the reach of my sales force.</button>
				</li>
				<li>
					<button onClick={this.onFilter()}>deliver more qualified leads to my sales team.</button>
				</li>
				<li>
					<button onClick={this.onFilter()}>grow the funnel.</button>
				</li>
				<li>
					<button onClick={this.onFilter()}>close the gap in field/territory coverage.</button>
				</li>
			</ol>
		)
	}
}

export default class ServicesGrid extends React.Component {
  render() {
    const { item, index, itemsLength } = this.props;
		return (
			<div className="service">
				<div className="service-icon">
				</div>
				<div className="service-label">
					{item.name}
				</div>
			</div>
		);
  }
}

ReactDom.render(<FiltersList />, document.getElementById('gridFilters'));
ReactDom.render(
	<AbsoluteGrid items={serviceItems}
								displayObject={(<ServicesGrid {...serviceItems} />)} />,
	document.getElementById('gridContainer')
);
