"use strict";

// Called whenever a new BLE device is discovered
// https://github.com/sandeepmistry/noble/blob/master/README.md

/*
var detectionService = require('./detection.service');
var bleacon = require('bleacon');
*/
var gMacid = "";

function hyperAgent() {  
	
	/*
         
         require('getmac').getMac(function (err, macAddress) {
		gMacid = macAddress;
		//console.log(' +++++++ ' + macAddress + " "+gMacid);
	});
	*/
}

exports.startScan = function() {
    /* 
     * this methods can be here or in index.js
        require('getmac').getMac(function (err, macAddress) {
		gMacid = macAddress;
		//console.log(' +++++++ ' + macAddress + " "+gMacid);
	});
    */
   /* this is scaned result of user and I am returning it to client  */
   /* set dynamic router router enter.html or exit.html */
   var dynamic_router='waiting.html'; // this may come after system scan
    return {"user_profile":{"image":"images/default.jpg","name":"Krishna Sharma","date":"987897979","from":"","to":"","security":"7787"},"dynamic_router":dynamic_router};
   //alert("From Mockups.startScan() 1000 ");// + gMacid + " " + this.gMacid);	
   //bleacon.startScanning(/*uuid,major,minor*/);
   //startScanning();
   
}

exports.stopScan = function() {

	//console.log("stopScan " + gMacid + " " + this.gMacid);
	bleacon.stopScanning();
   
}

function stopScanWrapper(){
	
	bleacon.stopScanning();
	
}

function startScanning() {
  
  	
		bleacon.on('discover', function (bleacon) {

			// Format = {"uuid":"b9407f30f5f8466eaff925556b57fe6d","major":19602,"minor":10956,"measuredPower":-74,"rssi":-63,"accuracy":0.5746081071882325,"proximity":"near"}

			//console.log(JSON.stringify(bleacon));
			//alert(JSON.stringify(bleacon));

			detectionService.processDetection({
				agentId : this.gMacid,
				time : Date.now(),
				uuid : bleacon.uuid,
				major : bleacon.major,
				minor : bleacon.minor,
				tx : bleacon.measuredPower,
				rssi : bleacon.rssi,
				proximity : bleacon.accuracy,
				proximityTxt: bleacon.proximity
			});
			stopScanWrapper();
		});

	
}



