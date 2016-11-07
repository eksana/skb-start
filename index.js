var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDgwMjJmY'+
'jc0ZDAwMTFiZTdmYWYiLCJ1c2VybmFtZSI6InNlci52YWpucnViQHlhbmRleC5ydSIsInJvbGUiO'+
'iJ1c2VyIiwiaWF0IjoxNDc4MDIzMTcxfQ.lfBrJyKtjwURxB5gDOWltKclXRIhSnnTmH3cTa0Rcc8';

var skb = new Skb(token);
skb.taskHelloWorld('Hello');