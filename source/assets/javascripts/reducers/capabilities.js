import CapabilitiesData from '../data/CapabilitiesData';

const initialState = {
	selectedCapability: null,
	capabilities: CapabilitiesData
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'SHOW_DETAILS':
			if (window.innerHeight < 600){
				$('html, body').animate({scrollTop: $('#theGrid').position().top - $('.navbar').height() - 20}, 'slow');
			}		
			return { ...state, selectedCapability: action.payload.key };
		case 'CAPABILITY_DISMISSED':
			return { ...state, selectedCapability: null };
	}
	return state;
}
