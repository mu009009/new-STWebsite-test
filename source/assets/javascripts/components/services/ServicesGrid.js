import React, { Component } from 'react';
import _ from 'lodash';
import ServicesGridItem from './ServicesGridItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ServicesGrid extends Component {
	render() {
		const { selectedFilters, services } = this.props;
		const serviceItems = services.map(function(item) {
			let activeItem = _.intersection(selectedFilters, item.categories).length > 0;
			return (
				<ServicesGridItem
					activeItem={activeItem}
					item={item}
					key={item.key}/>
			);
		});
		return (
			<div className="row">
				{serviceItems}
			</div>
		)
	}
}
