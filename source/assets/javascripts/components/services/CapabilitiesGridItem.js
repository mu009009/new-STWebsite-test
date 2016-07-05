import React, { Component } from 'react';

const CapabilitiesGridItem = ({ item, handleCapabilitySelect }) => {
	return (
			<a className="grid__item icon-box" onClick={() => handleCapabilitySelect(item)}>
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
};

export default CapabilitiesGridItem;
