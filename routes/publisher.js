var mongoose= require('mongoose');

var express= require('express');
var bodyParser = require('body-parser');
var Publisher= require('../models/Author_first');
var publisherRouter = express.Router();
var MongoClient= require('mongodb').MongoClient,
    assert = require('assert');
publisherRouter.use(bodyParser.json());

var url= 'mongodb://localhost:27017/sql2md';

publisherRouter.route('/:name')

    .get(function (req,res,next) {


        MongoClient.connect(url, function (err, db) {
            assert.equal(err, null);
            console.log("Connected successfully to the server");
            console.log(req);



            var collections = db.collection("records");


            collections.find({Publisher: new RegExp(req.params.name, 'i')}).toArray(function (err, author) {
                assert.equal(err, null);
                console.log("Found");
                res.json(author)
                console.log(author)

            })
        })

    })

    .delete(function (req,res,next) {
        Publisher.remove({}, function (err, resp) {
            if(err) throw err;
            res.json(resp);

        });
    });


module.exports= publisherRouter;