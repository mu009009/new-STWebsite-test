import CapabilitiesData from '../data/CapabilitiesData';

const initialState = {
	showDetails: false,
	selectedCapability: null,
	capabilities: CapabilitiesData
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'CAPABILITY_SELECTED':
			console.log(action)
			return { ...state, selectedCapability: action.payload, showDetails: true };
		case 'CAPABILITY_DISMISSED':
			return { ...state, selectedCapability: null, showDetails: false };
	}
	return state;
}
