const lib = require(process.cwd() + '/node_modules/passport-github2');
lib.Strategy.prototype.authenticate = function () {
  this.success({ id: 'fixture-user', username: 'fixture', displayName: 'Fixture User', photos: [{value:'https://example.invalid/avatar.png'}], _json: {bio:'Fixture',html_url:'https://example.invalid/fixture'} });
};
