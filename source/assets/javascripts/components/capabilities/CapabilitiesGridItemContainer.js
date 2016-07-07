import React, { Component } from 'react';
import CapabilityDetails from './CapabilityDetails';
import CapabilitiesGridItem from './CapabilitiesGridItem';
import { Motion, spring } from 'react-motion';

class CapabilitiesGridItemContainer extends Component {
	render() {
		const { item, selectCapability, dismissCapability, selectedCapability } = this.props;
		let gridItemContent;
		if (selectedCapability === item.key) {
			gridItemContent =
				<CapabilityDetails
					item={item}
					dismissCapability={dismissCapability}
					style={{opacity: spring(selectedCapability ? 100 : 0)}}/>;
		} else {
			gridItemContent = 
				<CapabilitiesGridItem
					item={item}
					selectCapability={selectCapability}
					style={{opacity: spring(selectedCapability ? 0 : 100)}}/>;
		}

		return (
				<Motion style={{ width: spring(selectedCapability ? 100 : 30) }}>
					{value => 
						<div className="icon-box" style={{ width: `${value.width}%` }}>
							{gridItemContent}
						</div>
					}
				</Motion>
		)
	}
};

export default CapabilitiesGridItemContainer;
