import React, { Component } from 'react';
import Popover from 'material-ui/Popover/Popover';
import CapabilityDetails from './CapabilityDetails';

class CapabilitiesGridItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'middle',
        vertical: 'center',
      },
      targetOrigin: {
        horizontal: 'middle',
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
		const { selectCapability, item } = this.props;
		return (
			<a style={this.props.style} className="grid__item" onClick={this.handleTouchTap}>
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
				<Popover
						className="popover"
						open={this.state.open}
						anchorEl={this.state.anchorEl}
						anchorOrigin={this.state.anchorOrigin}
						targetOrigin={this.state.targetOrigin}
						onRequestClose={this.handleRequestClose}>
						<CapabilityDetails
							item={item}
							dismissCapability={this.handleRequestClose}/>
				</Popover>
			</a>
		)
	}
};

export default CapabilitiesGridItem;
