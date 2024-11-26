const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://sightengine-nudity-and-adult-content-detection.p.rapidapi.com/nudity.json?url=http%3A%2F%2F38.media.tumblr.com%2F87cae843de33f3177c96fc2f7be17818%2Ftumblr_inline_nfglzlv7971s6lw3t.jpg');
xhr.setRequestHeader('x-rapidapi-key', 'Sign Up for Key');
xhr.setRequestHeader('x-rapidapi-host', 'sightengine-nudity-and-adult-content-detection.p.rapidapi.com');

xhr.send(data);