var fs = require('fs');
var path = require('path');

[
'simple',
'fancy',
'with-comments'
].forEach(function(name) {
  var fullpath = path.resolve(__dirname, name + '.ssh-config');
  exports[name] = fs.readFileSync(fullpath, { encoding: 'utf8' });
});
