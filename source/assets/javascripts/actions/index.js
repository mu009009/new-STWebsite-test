export default function selectCapability(key) {
	return {
		type: 'CAPABILITY_SELECTED',
		payload: key
	}
}

export default function dismissCapability(key) {
	return {
		type: 'CAPABILITY_DISMISSED'
	}
}
