var test = require('tap').test;

var fixtures = require('./fixtures');

var parser = require('..');

test('simple', function(t) {
  var entries = parser(fixtures.simple);
  var e = entries.filter(function(e) { return e.Host === 'server1' })[0];
  t.ok(e, 'found the entry');
  t.equals(e.Hostname, 's1.clo.ud', 'correct value for Hostname');
  t.equals(e.IdentityFile, 'id1.pem', 'correct value for IdentityFile');
  t.equals(e.User, 'root1', 'correct value for User');
  t.end();
});

test('fancy', function(t) {
  var entries = parser(fixtures.fancy);
  var e = entries.filter(function(e) { return e.Host === 'server1' })[0];
  t.ok(e, 'found the entry');
  t.equals(e.Hostname, 's1.clo.ud', 'correct value for Hostname');
  t.equals(e.IdentityFile, 'id1.pem', 'correct value for IdentityFile');
  t.equals(e.User, 'root1', 'correct value for User');
  t.equals(e.Common, 'things', 'correct value for Common');
  t.equals(e.Extra, 'stuff', 'correct value for Extra');

  e = entries.filter(function(e) { return e.Host === 'theException' })[0];
  t.ok(e, 'found the entry');
  t.notOk(e.IdentityFile, 'does not have a IdentityFile');
  t.notOk(e.User, 'does not have a User');
  t.notOk(e.Common, 'does not have a Common');
   t.equals(e.Extra, 'stuff', 'correct value for Extra');
  t.end();
});

test('with comments', function(t) {
  var entries = parser(fixtures['with-comments']);
  var e = entries.filter(function(e) { return e.Host === 'server1' })[0];
  t.ok(e, 'found the entry');
  t.equals(e.Hostname, 's1.clo.ud', 'correct value for Hostname');
  t.equals(e.IdentityFile, 'id1.pem', 'correct value for IdentityFile');
  t.equals(e.User, 'root1', 'correct value for User');
  t.end();
});
