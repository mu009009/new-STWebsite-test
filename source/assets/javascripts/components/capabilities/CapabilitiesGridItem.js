import React, { Component } from 'react';

class CapabilitiesGridItem extends Component {
	render() {
		const { selectCapability, item } = this.props;
		return (
			<a style={this.props.style} className="grid__item" onClick={() => selectCapability(item.key)}>
				<div className="icon-container">
					<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}.png`} alt={item.name} />
					<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}-color.png`} alt={item.name} />
				</div>
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
