/**
 * Created by dipit on 6/2/17.
 */
var mongoose= require('mongoose');

var express= require('express');
var bodyParser = require('body-parser');
var Journal= require('../models/Author_first');
var journalRouter = express.Router();
var MongoClient= require('mongodb').MongoClient,
    assert = require('assert');
journalRouter.use(bodyParser.json());

var url= 'mongodb://localhost:27017/sql2md';

journalRouter.route('/:name')

    .get(function (req,res,next) {


        MongoClient.connect(url, function (err, db) {
            assert.equal(err, null);
            console.log("Connected successfully to the server");
            console.log(req);



            var collections = db.collection("records");


            collections.find({Journal: new RegExp(req.params.name, 'i')}).toArray(function (err, author) {
                assert.equal(err, null);
                console.log("Found");
                res.json(author)
                console.log(author)

            })
        })

    })

    .delete(function (req,res,next) {
        Journal.remove({}, function (err, resp) {
            if(err) throw err;
            res.json(resp);

        });
    });


module.exports= journalRouter;