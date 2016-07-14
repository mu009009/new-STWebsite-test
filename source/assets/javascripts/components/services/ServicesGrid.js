import React, { Component } from 'react';
import _ from 'lodash';
import FlipMove from 'react-flip-move';
import ServicesGridItem from './ServicesGridItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ServicesGrid extends Component {
	render() {
		const { selectedFilters, services } = this.props;
		const filteredItems = _.sortBy(services, function(o){
			return o.categories.indexOf(selectedFilters)>-1;
		});
		const serviceItems = _.reverse(filteredItems.map(function(item) {
			let activeItem = item.categories.indexOf(selectedFilters) > -1
				|| selectedFilters === 'ALL';
			return (
				<ServicesGridItem
					activeItem={activeItem}
					item={item}
					key={item.key}/>
			);
		}));
		return (
			<div className="row">
				<FlipMove>
					{serviceItems}
				</FlipMove>
			</div>
		)
	}
}
