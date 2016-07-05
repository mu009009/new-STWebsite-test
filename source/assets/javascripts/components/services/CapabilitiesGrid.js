import React, { Component } from 'react';
import CapabilitiesGridItem from './CapabilitiesGridItem';

export default class CapabilitiesGrid extends Component {
	render() {
		const { showDetails, selectedCapability, capabilities, handleCapabilitySelect } = this.props;
		let filteredCapabilities;
		switch (showDetails) {
			case false:
				filteredCapabilities = capabilities;
				break;
			default: 
				filteredCapabilities = capabilities.filter(function(item) {
			    return item === selectedCapability;
				});
		}

		const capabilitiesItems = filteredCapabilities.map(function(item) {
			return (
				<CapabilitiesGridItem 
					item={item} 
					key={item.key}
					handleCapabilitySelect={handleCapabilitySelect}
					selectedCapability={selectedCapability} />
			);
		});
		return (
			<div className="container">
				<div id="theGrid" className="main">
					<section className="grid">
						<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
							{capabilitiesItems}
						</ReactCSSTransitionGroup>
					</section>
				</div>
			</div>
		)
	}
}
