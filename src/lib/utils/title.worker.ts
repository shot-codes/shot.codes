let state = '';
let target = '';

const updateState = () => {
	if (state !== target) {
		if (state.length < target.length) {
			state += target[state.length];
		} else if (state.length > target.length) {
			state = state.slice(0, -1);
		} else {
			for (let i = 0; i < state.length; i++) {
				if (state[i] !== target[i]) {
					state = state.slice(0, i) + target[i] + state.slice(i + 1);
					break;
				}
			}
		}
		postMessage(state);
	}
};

setInterval(updateState, 50);

onmessage = (event) => {
	target = event.data;
};

export {};
