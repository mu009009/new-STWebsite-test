export function showDetails(key) {
	return {
		type: 'SHOW_DETAILS',
		payload: key
	}
}

export function dismissCapability(key) {
	return {
		type: 'CAPABILITY_DISMISSED'
	}
}
