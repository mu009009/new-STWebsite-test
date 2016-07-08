import CapabilitiesData from '../data/CapabilitiesData';

const initialState = {
	showDetails: false,
	selectedCapability: null,
	capabilities: CapabilitiesData,
	popover: {
		open: false,
		anchorEl: null,
		anchorOrigin: {
			horizontal: 'middle',
			vertical: 'bottom',
		},
		targetOrigin: {
			horizontal: 'right',
			vertical: 'center',
		}
	}
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'CAPABILITY_SELECTED':
			event.preventDefault();
			console.log(action.payload);
			return { ...state, popover: { open: true }, selectedCapability: action.payload.key, showDetails: true };
		case 'CAPABILITY_DISMISSED':
			return { ...state, capabilities: CapabilitiesData, popover: { open: false }, selectedCapability: null, showDetails: false };
	}
	return state;
}
