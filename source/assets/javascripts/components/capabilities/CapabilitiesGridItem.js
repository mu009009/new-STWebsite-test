import React, { Component } from 'react';

class CapabilitiesGridItem extends Component {
	render() {
	const { item, selectCapability } = this.props;
	return (
			<a className="grid__item icon-box" onClick={() => selectCapability(item.key)}>
				<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}.png`} alt={item.name} />
				<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}-color.png`} alt={item.name} />
				<div className="loader"></div>
				<div className="meta meta--preview">
					<h3 className="title title--preview">
						{item.name}
					</h3>
				</div>
			</a>
	)}
};

export default CapabilitiesGridItem;
