var http = require("https");

var options = {
	"method": "GET",
	"hostname": "mashape-community-urban-dictionary.p.rapidapi.com",
	"port": null,
	"path": "/define?term=javascript",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "88d1cf8a18msh6c03f856ddc0b8dp1ba584jsn1f97331235bf",
		"useQueryString": true
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
