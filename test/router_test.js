const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const Router = require(__dirname + '/../lib/router');

const router = new Router();

describe('rainier-beer router', () => {
  it('should be a router', () => {
    expect(router.routes).to.have.property('GET');
    expect(router.routes).to.have.property('POST');
    expect(router.routes).to.have.property('PUT');
    expect(router.routes).to.have.property('PATCH');
    expect(router.routes).to.have.property('DELETE');
  });

  it('should respond with an error with an invalid route', (done) => {
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
