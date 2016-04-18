const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../lib/server.js');

describe('rainier-beer server', () => {
  it('should respond to a GET request', (done) => {
    request('localhost:3000')
    .get('/moose')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(210);
      expect(res.text).to.eql('Hello Kat');
      done();
    });
  });

  it('should get a 404 error', (done) => {
    request('localhost:3000')
    .get('/badroute')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res).to.have.status(404);
      expect(res.text).to.eql('404 Not Found');
      done();
    });
  });
});
