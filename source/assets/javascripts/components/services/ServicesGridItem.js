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
					<img src={activeItem ? `assets/images/services/${item.icon}-color.png` : `assets/images/services/${item.icon}.png`}/>
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
		      <h4 className="subhead-popover">{item.name}</h4>
					<button className="dismiss-popover" onClick={this.handleRequestClose}>
						<svg version="1.1" viewPort="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<line stroke="#888" stroke-width="2" x1="1" x2="20" y1="20" y2="1"></line>
							<line stroke="#888" stroke-width="2" x1="1" x2="20" y1="1" y2="20"></line>
						</svg>
					</button>
					<p className="body-copy-small">{item.description}</p>
				</Popover>
			</div>
		);
  }
}
