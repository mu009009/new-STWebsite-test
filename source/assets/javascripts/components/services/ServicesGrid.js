import _ from 'lodash';
import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import ServicesGridItem from './ServicesGridItem';

export default class ServicesGrid extends Component {
	render() {
		const { selectedFilter, services } = this.props;
		const filteredItems = _.sortBy(services, function(o) {
			return o.categories.indexOf(selectedFilter)>-1;
		})
		const serviceItems = _.reverse(filteredItems).map(function(item) {
			return (
				<ServicesGridItem
					activeItem={item.categories.indexOf(selectedFilter)>-1}
					item={item}
					key={item.key}/>
			);
		});
		return (
			<div>
				<FlipMove className="row gridbox" easing="cubic-bezier(0, 0.2, 0.2, 0)">
					{serviceItems}
				</FlipMove>
			</div>
		)
	}
}
