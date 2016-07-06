import React, { Component } from 'react';
import CapabilitiesIntro from './CapabilitiesIntro';
import CapabilitiesGrid from './CapabilitiesGrid';

class Capabilities extends Component {
	onCapSelect(key) {
		this.props.selectCapability(key);
	}
	handleCapabilitySelect(item){
		let filteredCapabilities;
		switch (this.state.showDetails) {
			case false:
				filteredCapabilities = this.state.capabilities;
				break;
			default: 
				filteredCapabilities = this.state.capabilities.filter(function(item) {
			    return item === selectedCapability;
				});
		}
		this.setState({
			showDetails: true,
			selectedCapability: item,
			capabilities: filteredCapabilities
		});
	}

	render() {
		return (
			<div>
				<CapabilitiesIntro />
				<CapabilitiesGrid /> 
			</div>
		);
	}
}

export default Capabilities;
