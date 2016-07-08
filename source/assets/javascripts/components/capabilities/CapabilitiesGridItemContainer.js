import React, { Component } from 'react';
import CapabilityDetails from './CapabilityDetails';
import CapabilitiesGridItem from './CapabilitiesGridItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CapabilitiesGridItemContainer extends Component {
	render() {
		const { item, selectCapability, dismissCapability, selectedCapability } = this.props;
		return (
			<MuiThemeProvider>
				<div className="icon-box">
					<CapabilitiesGridItem
						item={item}
						selectCapability={selectCapability}/>
				</div>
			</MuiThemeProvider>
		);
	}
};

export default CapabilitiesGridItemContainer;
