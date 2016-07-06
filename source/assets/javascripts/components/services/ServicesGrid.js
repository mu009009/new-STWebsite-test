import React, { Component } from 'react';
import _ from 'lodash';
import ServicesGridItem from './ServicesGridItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ServicesGrid extends Component {
	render() {
		const { selectedFilters, services } = this.props;
		const serviceItems = services.map(function(item) {
			return (
				<ServicesGridItem
					activeItem={_.intersection(selectedFilters, item.categories).length > 0}
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
