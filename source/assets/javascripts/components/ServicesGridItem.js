import React, { Component } from 'react';

export default class ServicesGrid extends React.Component {
	render() {
    const { item, index, itemsLength, activeItem } = this.props;
		return (
			<div className={`col-xs-4 col-md-2 service ${activeItem ? 'active' : 'inactive'} `}>
				<div className="service-icon">
					<div className="fa fa-database"></div>
				</div>
				<div className="service-label">
					{item.name}
				</div>
			</div>
		);
  }
}
