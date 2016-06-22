import React, { Component } from 'react';

export default class ServicesGrid extends React.Component {
  render() {
    const { item, index, itemsLength } = this.props;
		return (
			<div className="service">
				<div className="service-icon">
				</div>
				<div className="service-label">
					{item.name}
				</div>
			</div>
		);
  }
}
