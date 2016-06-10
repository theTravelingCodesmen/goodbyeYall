'use strict'
require(TEST_HELPER) // <--- This must be at the top of every test file.

let request = require('supertest')
let routes = require(__server + '/app.js')

describe("serving assests", function() {

 let
 app = TestHelper.createApp();
 app.use('/', routes)
 app.testReady()

 it_("serves /dist/bundle.js", function * () {
   this.timeout(5000);

   //
   // Notice how we're in a generator function (indicated by the the *)
   // See test/test-helper.js for details of why this works.
   //
   yield request(app)
     .get('/dist/bundle.js')
     .expect('Content-Type',/javascript/)
     .expect(200)
 });
 it_('serves /index.html', function * (){
  yield request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)

 })
 

});
