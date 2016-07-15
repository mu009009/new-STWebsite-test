import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CapabilitiesGridItem from './CapabilitiesGridItem';
import CapabilityDetails from './CapabilityDetails';

class CapabilitiesGrid extends Component {
	render() {
		const { 
			showDetails, 
			selectedCapability, 
			capabilities, 
			dismissCapability } = this.props;
		return (
			<div className="container">
				<div id="theGrid" className="main">
					<section className="grid row">
							{capabilities.map(function(item) {
								return (
									<CapabilitiesGridItem
										item={item} 
										key={item.key}
										showDetails={showDetails}
										selectedCapability={selectedCapability}/>
								);
							})}
					</section>
					<section className={`grid-details-container 
						${selectedCapability ? 'active' : 'inactive'}`}>
							{capabilities.map(function(item) {
								return (
									<CapabilityDetails
										key={item.key}
										itemKey={item.key}
										item={item}
										selectedCapability={selectedCapability}
										dismissCapability={dismissCapability}/>
								);
							})}
					</section>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { ...state.capabilities }
}

export default connect(mapStateToProps, actions)(CapabilitiesGrid);
