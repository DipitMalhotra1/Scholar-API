/**
 * Created by dipit on 6/2/17.
 */

var mongoose= require('mongoose');

var express= require('express');
var bodyParser = require('body-parser');
var Authors_3= require('../models/Author_2');
var authorRouter = express.Router();
var MongoClient= require('mongodb').MongoClient,
    assert = require('assert');
authorRouter.use(bodyParser.json());

var url= 'mongodb://localhost:27017/sql2md';

authorRouter.route('/:name')

    .get(function (req,res,next) {


        MongoClient.connect(url, function (err, db) {
            assert.equal(err, null);
            console.log("Connected successfully to the server");
            console.log(req);




            var collections = db.collection("records");


            collections.find({Author3Lastname: new RegExp(req.params.name, 'i')}).toArray(function (err, author) {
                assert.equal(err, null);
                console.log("Found");
                res.json(author)
                console.log(author)

            })
        })

    })

    .delete(function (req,res,next) {
        Authors_3.remove({}, function (err, resp) {
            if(err) throw err;
            res.json(resp);

        });
    });


module.exports= authorRouter;