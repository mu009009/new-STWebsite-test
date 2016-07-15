import React, { Component } from 'react';

class CapabilitiesGridItem extends Component {
	render() {
		const { item, showDetails, selectedCapability } = this.props;
		return (
			<div className={`col-md-4 col-sm-6 col-xs-12 icon-box 
				${selectedCapability ? 'hidden' : ''}`}>
				<div onClick={() => showDetails(item)} className="grid__item">
					<div className="icon-container">
						<img 
							className="capabilities-icon center-block" 
							src={`/assets/images/capabilities/${item.icon}.png`} 
							alt={item.name} />
						<img 
							className="capabilities-icon center-block" 
							src={`/assets/images/capabilities/${item.icon}-color.png`} 
							alt={item.name} />
					</div>
					<div className="loader">
						<div className="loader-fill"></div>
					</div>
					<div className="meta meta--preview">
						<h3 className="title title--preview">
							{item.name}
						</h3>
					</div>
				</div>
			</div>
		);
	}
};

export default CapabilitiesGridItem;
