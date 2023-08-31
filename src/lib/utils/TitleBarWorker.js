// myWorker.js
self.onmessage = function (e) {
	let str = e.data;
	for (let i = 1; i <= str.length; i++) {
		setTimeout(() => {
			self.postMessage(str.slice(0, i));
		}, i * 1000);
	}
};
