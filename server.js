const express = require('express');
const app = express();
const port = 8080;

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use('/', express.static('dist/dprcalc'));
app.use(requireHTTPS);
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/dprcalc/'}
);
});
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${process.env.PORT || port}!`));