// link to express
let connect = require('connect');
let url = require('url');

// create a new connect object
let app = connect(); // option2: let app = new connect();
// hello "page"
let hello = function(req, res, next) {
    res.end("Hello, this now restarts with Nodemon");
};

// create good buy page
let goodbye = function(req, res, next) {
    res.end('Goodbye guys!');
};

// index "page"

let index = function(req, res, next) {
    res.end("this is our home page");
};

// tax calculator "page" 
let tax = function(req, res, next) {

    // get the fulll querystring ?amount=1000
    let qs = url.parse(req.url, true).query;


    //get the amount value from querystring
    let amount = qs.amount;

    //calculate tax and total
    let hst = amount *.13;
    let total = parseFloat(hst) + parseFloat(amount);
    let num = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
   

    
    //display all

    res.end('<h1>Tax Calculator</h1>' + 
            'Amount: ' + amount + '<br />'  + 
            'HST: ' + hst + '<br />' +
            'Total: ' + num);
};



let notFound = function(req,res,next) {
    res.writeHead(404);
    res.end('Page not found');
}

let api = function(req, res, next) {

    // create json object
   let person = JSON.stringify({
        "name": "Ralph",
        "age": "12",
        "nationality": "Canadians"
   });
   res.writeHead(200, {"Content-Type": "application/json"});
    res.end(person);
};



// map the url's to the correct virtual pages
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/tax', tax);
app.use('/', api);
app.use('/', index);



// art the connect http Server
app.listen(3000);
console.log('Server running at http://localhost:3000/');
