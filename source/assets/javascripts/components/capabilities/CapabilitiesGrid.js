import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CapabilitiesGridItemContainer from './CapabilitiesGridItemContainer';

class CapabilitiesGrid extends Component {

	render() {
		const { showDetails, selectedCapability, capabilities, selectCapability, dismissCapability } = this.props;
		return (
			<div className="container">
				<div id="theGrid" className="main">
					<section className="grid">
							{capabilities.map(function(item) {
								return (
									<CapabilitiesGridItemContainer
										item={item} 
										key={item.key}
										selectedCapability={selectedCapability}
										showDetails={showDetails}
										selectCapability={selectCapability}
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
