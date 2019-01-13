let modelRawFetcher = (function() {
	let _url = 'http://localhost:3000/register';
	//let _urlTest = 'http://localhost:5000/db/getmodeldescnew';

	let _headers = new Headers({
		'Accept': 'application/json, text/plain, */*',
		'Content-Type': 'application/json'
	});
	let _params = {
		method: 'post',
		mode: 'no-cors',
		headers: _headers,
	};
	fetch(_url, _params)
		.then(resp => {
			console.log(resp);
		});
})();
