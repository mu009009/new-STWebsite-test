import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

export default class ServicesGrid extends React.Component {
	render() {
    const { item, index, itemsLength, activeItem } = this.props;
		return (
			<OverlayTrigger 
				trigger="click" 
				rootClose 
				positionLeft={-50} 
				placement="left" 
				overlay={
					<Popover 
						id={`popover_${index}`} 
						title={item.name}>{item.description}</Popover>}>
			<div className={`service ${activeItem ? 'active' : 'inactive'} `}>
				<div className="service-icon">
					<img src={`assets/images/services/${item.icon}`}/>
				</div>
				<div className="service-label">
					{item.name}
				</div>
			</div>
    </OverlayTrigger>
		);
  }
}
