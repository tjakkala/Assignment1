'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
	obj = require('./listings.json');
	
/* Connect to your database */
mongoose.connect('mongodb://tjakkala1:Apollo1!@ds127034.mlab.com:27034/cen3031directory');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

Listing.insertMany(obj, function(err, docs) {if (err) throw err;}, {config: { autoIndex: false }});

/*
fs.readFile('listings.json', 'utf8', function (err,data) {
var listingData = JSON.parse(data);
//console.log(listingData);
for (var i = 0; i < listingData.length; i++) {
	var coordinates = undefined;
	var address = undefined;
	
	if (listingData[i].coordinates) coordinates = listingData[i].coordinates;
	if (listingData[i].address) address = listingData[i].address;
	
	var listing = new Listing({"code": listingData[i].code, "name": listingData[i].name, coordinates: coordinates, address: address});
	
	listing.save(function(err) {if (err) throw err;});
	};
});
*/

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */