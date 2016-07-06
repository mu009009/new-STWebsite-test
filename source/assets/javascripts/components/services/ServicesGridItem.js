import React, { Component } from 'react';
import Popover from 'material-ui/Popover/Popover';

export default class ServicesGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'middle',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'right',
        vertical: 'center',
      },
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
	};

	render() {
    const { item, index, itemsLength, activeItem } = this.props;
		return (
		<div className={`service ${activeItem ? 'active' : 'inactive'} `}>
			<div 
				onClick={this.handleTouchTap} >
				<div className="service-icon">
					<img src={`assets/images/services/${item.icon}`}/>
				</div>
				<div className="service-label">
					{item.name}
				</div>
			</div>
			<Popover
					className="popover"
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
					onRequestClose={this.handleRequestClose}
				>
					<h4>{item.name}</h4>
					{item.description}
				</Popover>
			</div>
		);
  }
}
