export function selectCapability(key) {
	return {
		type: 'CAPABILITY_SELECTED',
		payload: key
	}
}

export function dismissCapability(key) {
	return {
		type: 'CAPABILITY_DISMISSED'
	}
}
