import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CapabilitiesGridItem from './CapabilitiesGridItem';
import { TransitionSpring } from 'react-motion';

class CapabilitiesGrid extends Component {

	render() {
		const { showDetails, selectedCapability, capabilities, dismissCapability, selectCapability } = this.props;

		return (
			<div className="container">
				<div id="theGrid" className="main">
					<section className="grid">
							{capabilities.map(function(item) {
								return (
									<CapabilitiesGridItem 
										item={item} 
										key={item.key}
										selectedCapability={selectedCapability}
										showDetails={showDetails}
										selectCapability={selectCapability}/>
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
