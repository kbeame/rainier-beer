const expect = require('chai').expect;
const fs = require('fs');
const Router = require(__dirname + '/../lib/router');

describe('rainier-beer router', () => {
  it('should be a router', () => {
    expect(Router.routes).to.have.property('GET');
    expect(Router.routes).to.have.property('POST');
    expect(Router.routes).to.have.property('PUT');
    expect(Router.routes).to.have.property('PATCH');
    expect(Router.routes).to.have.property('DELETE');
  });
});
