import React, { Component } from 'react';
import CapabilityDetails from './CapabilityDetails';
import { Motion, spring } from 'react-motion';

class CapabilitiesGridItem extends Component {
	render() {
		const { item, selectCapability, dismissCapability, selectedCapability } = this.props;
		
		if (selectedCapability === item.key) {
			return (
				<Motion defaultStyle={{width: 25}} style={{width: spring(100)}}>
					{value => 
						<div>
							<CapabilityDetails
								item={item}
								dismissCapability={dismissCapability}
								style={`width: ${value.width}%`}
								motionValue={value.width}/>
						</div>}
				</Motion>
			);
		}

		return (
			<a className="col-sm-3 grid__item icon-box" onClick={() => selectCapability(item.key)}>
				<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}.png`} alt={item.name} />
				<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}-color.png`} alt={item.name} />
				<div className="loader"></div>
				<div className="meta meta--preview">
					<h3 className="title title--preview">
						{item.name}
					</h3>
				</div>
			</a>
		)
	}
};

export default CapabilitiesGridItem;
