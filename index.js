'use strict';

var should = require('should'),
	request = require("request");
	// request = require('supertest');
	// app = require('../../server'),
	// mongoose = require('mongoose'),
	// User = mongoose.model('User'),
	// Offering = mongoose.model('Offering'),
	// Rating = mongoose.model('Rating'),
	// agent = request.agent(app);

/**
 * Globals
 */
// var credentials, credentials2, user, user2, offering, offeringGlobal;
/* Adjust to location of API server. */
var URLroot = 'http://localhost:8000'

/**
 * Basic test for working network connection.
 */
// describe('basic connection test', function(done) {

// 	it('should be able to make a basic request', function(done) {
// 		request('http://duckduckgo.com', function(error, response, body) {
// 			(response.statusCode).should.equal(200);
// 			done();
// 		});
// 	});
// });


describe('basic dummy test', function(done) {

	it('should be able to perform a basic addition', function(done) {
		(4 + 4).should.equal(8);
		done();
	});
});