import CapabilitiesData from '../data/CapabilitiesData';

const initialState = {
	showDetails: false,
	selectedCapability: null,
	capabilities: CapabilitiesData
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'CAPABILITY_SELECTED':
			const filteredCapabilities = 
				state.capabilities.filter(function(value) {
					return action.payload == value.key;
				});
			return { ...state, selectedCapability: action.payload, showDetails: true, capabilities: filteredCapabilities };
		case 'CAPABILITY_DISMISSED':
			return { ...state, capabilities: CapabilitiesData,  selectedCapability: null, showDetails: false };
	}
	return state;
}
