import React, { Component } from 'react';
import CapabilityDetails from './CapabilityDetails';
import CapabilitiesGridItem from './CapabilitiesGridItem';

class CapabilitiesGridItemContainer extends Component {
	render() {
		const { item, showDetails } = this.props;
		return (
			<div className="col-md-4 col-sm-6 col-xs-12 icon-box">
				<CapabilitiesGridItem
					item={item}
					showDetails={showDetails}/>
			</div>
		);
	}
};

export default CapabilitiesGridItemContainer;