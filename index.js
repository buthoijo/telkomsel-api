const app = require('./src/app');

app.set('port', process.env.PORT || 5000);

app.listen(app.post('port'), function() {
  console.log('Node app is running at localhost:' + app.post('port'));
});
