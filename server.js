import express from 'express';
import path from 'path';

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, 'app'), {
  dotfiles: 'ignore',
  index: false
}));

app.use(express.static('./public'));

app.get("/", function (req, res) {
	res.redirect("/que");
});

app.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


/**
 * Error Handling
 */

app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

app.listen(port);

console.log('Visit: localhost:' + port);