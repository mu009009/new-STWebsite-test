import React, { Component } from 'react';
import ReactDom from 'react-dom';

import CapabilitiesIntro from './CapabilitiesIntro';
import CapabilitiesGrid from './CapabilitiesGrid';
import CapabilitiesData from '../../data/CapabilitiesData';

class Capabilities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false,
			selectedCapability: null
		}
	}
	onCapSelect(selectedCapability) {
		this.setState({ selectedCapability });
	}
	handleCapabilitySelect(item){
		this.setState({
			showDetails: true,
			selectedCapability: item
		});
	}

	render() {
		return (
			<div>
				<CapabilitiesIntro />
				<CapabilitiesGrid handleCapabilitySelect={this.handleCapabilitySelect.bind(this)} capabilities={CapabilitiesData} showDetails={this.state.showDetails} selectedCapability={this.state.selectedCapability} />
			</div>
		);
	}
}

ReactDom.render(
	<Capabilities />,
	document.getElementById('capabilities')
);
