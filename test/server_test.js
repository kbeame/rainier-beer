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

  it('should respond to DELETE request', (done) => {
    request('localhost:3000')
    .delete('/delete')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('so much delete');
      done();
    });
  });

  it('should handle PUT request', (done) => {
    request('localhost:3000')
    .put('/put')
    .send('I put up with you all day long')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('I put up with you all day long');
      done();
  });
});

it('should handle PATCH', (done) => {
  request('localhost:3000')
  .patch('/patch')
  .end((err, res) => {
    expect(err).to.eql(null);
    expect(res.status).to.eql(200);
    expect(res.text).to.eql('Patch up for what');
    done();
  });
});

  it('should get a post to /duck', (done) => {
    request('localhost:3000')
    .post('/duck')
    .send('I have posted to postroute')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('I have posted to postroute');
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
