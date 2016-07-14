import React, { Component } from 'react';
import CapabilityDetails from './CapabilityDetails';

class CapabilitiesGridItem extends Component {
	render() {
		const { showDetails, item } = this.props;
		return (
				<div onClick={() => showDetails(item)} className="grid__item">
					<div className="icon-container">
						<img className="capabilities-icon center-block" src={`/assets/images/capabilities/${item.icon}.png`} alt={item.name} />
						<img className="capabilities-icon center-block" src={`/assets/images/capabilities/${item.icon}-color.png`} alt={item.name} />
					</div>
					<div className="loader"><div className="loader-fill"></div></div>
					<div className="meta meta--preview">
						<h3 className="title title--preview">
							{item.name}
						</h3>
					</div>
				</div>
		)
	}
};

export default CapabilitiesGridItem;
