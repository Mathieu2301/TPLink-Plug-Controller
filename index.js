var { Client } = require('tplink-smarthome-api');
var host = '192.168.0.XX';
const client = new Client();
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("...");
	if (req.url == "/on"){
		const plug = client.getDevice({host: host}).then((device)=>{
		  device.setPowerState(true);
		});
	}else if (req.url == "/off"){
		const plug = client.getDevice({host: host}).then((device)=>{
		  device.setPowerState(false);
		});
	}else{
		
	}
    res.end();
}).listen(80);

const plug = client.getDevice({host: host}).then((device)=>{
	var result = device.getInfo();
	result.then(console.log);
	console.log(result);
});