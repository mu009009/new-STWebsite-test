import React, { Component } from 'react';
import CapabilitiesIntro from './CapabilitiesIntro';
import CapabilitiesGrid from './CapabilitiesGrid';

class Capabilities extends Component {
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
