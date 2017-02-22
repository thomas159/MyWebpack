var messages = require('./messages');

var app = document.getElementById('app');
app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>';

if(module.exports) {
    module.hot.accept();
}