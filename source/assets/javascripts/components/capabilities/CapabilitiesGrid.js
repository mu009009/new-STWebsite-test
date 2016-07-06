import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCapability, dismissCapability } from '../../actions';
import CapabilitiesGridItem from './CapabilitiesGridItem';
import { TransitionSpring } from 'react-motion';

class CapabilitiesGrid extends Component {

	render() {
		const { showDetails, selectedCapability, capabilities, selectCapability, dismissCapability } = this.props;

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, { selectCapability, dismissCapability })(CapabilitiesGrid);
