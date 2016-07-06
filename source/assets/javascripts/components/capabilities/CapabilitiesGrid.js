import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CapabilitiesGridItemContainer from './CapabilitiesGridItemContainer';
import CapabilityDetails from './CapabilityDetails';

class CapabilitiesGrid extends Component {

	render() {
		const { showDetails, selectedCapability, capabilities, dismissCapability } = this.props;
		return (
			<div className="container">
				<div id="theGrid" className="main">
					<section className="grid row">
							{capabilities.map(function(item) {
								return (
									<CapabilitiesGridItemContainer
										item={item} 
										key={item.key}
										showDetails={showDetails}/>
								);
							})}
					</section>
					<section className={`grid-details-container ${selectedCapability ? 'active' : 'inactive'}`}>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, { selectCapability, dismissCapability })(CapabilitiesGrid);
