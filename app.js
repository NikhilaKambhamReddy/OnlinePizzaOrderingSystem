
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


app.post('/savedata', function(req,res){
	console.log(req.body);
	console.log(req.body.orderId);
	
	MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
		if (err) {
			res.send(err);
		    throw err;
		} else {
		    console.log("successfully connected to the database");		    
		}
		var collection = db.collection('usercollection');
		console.log(req.body);
		collection.insert({orderid:req.body.orderId, cheese: req.body.cheeseOptions,sauce:req.body.sauceOptions,meat:req.body.meatOptions,nonmeat:req.body.nonMeatOptions}, function(err, docs) {
		    collection.count(function(err, count) {
		        console.log(format("count = %s", count));
		       	db.close();
		
			});
			});

		});

//	res.redirect('/getlist');

});


app.get('/getlist', function(req, res) {
	
	var g=[];

	MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
		if (err) {
			res.send(err);
		    throw err;
		} else {
		    console.log("successfully connected to the database");		    
		}
		var collection = db.collection('usercollection');
	
		 collection.find({}).toArray(function(err, data) {
		        if (err) {
		            callback(err);
		            console.log(err);
		        } else {
		        	var f= JSON.stringify(data);
		        	console.log(f[0]);
		            console.log(JSON.stringify(data));
		            res.send(data);
		        }
		 });
	});
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
