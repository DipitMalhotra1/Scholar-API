/**
 * Created by dipit on 6/2/17.
 */
var mongoose= require('mongoose');

var express= require('express');
var bodyParser = require('body-parser');
var titles= require('../models/Title');
var titleRouter = express.Router();
var MongoClient= require('mongodb').MongoClient,
    assert = require('assert');
titleRouter.use(bodyParser.json());

var url= 'mongodb://localhost:27017/sql2md';

titleRouter.route('/:name')

    .get(function (req,res,next) {


        MongoClient.connect(url, function (err, db) {
            assert.equal(err, null);
            console.log("Connected successfully to the server");
            console.log(req);




            var collections = db.collection("authors");


            collections.find({Title: req.params.name}).toArray(function (err, author) {
                assert.equal(err, null);
                console.log("Found");
                res.json(author)
                console.log(author)

            })
        })

    })

    .delete(function (req,res,next) {
        titles.remove({}, function (err, resp) {
            if(err) throw err;
            res.json(resp);

        });
    });

// authorRouter.route('/:authorId')
//
//     .get(function (req,res,next) {
//         ID.findById(req.params.authorId,function (err,author) {
//             if (err) throw err;
//             res.json(author);
//
//         });
//     })
//     .put(function (req,res,next) {
//         ID.findByIdAndUpdate(req.params.authorId,
//
//             {$set: req.body},
//             {
//                 new: true
//             },
//
//             function (err, author) {
//                 if (err) throw err;
//                 res.json(author);
//
//             });
//     })
//
//     .delete(function (req,res,next) {
//
//         ID.findByIdAndRemove(req.params.authorId, function (err, resp) {
//             if(err) throw err;
//             res.json(resp);
//
//         });
//     });


// authorRouter.route('/Title=')
//
//     .get(function (req,res,next) {
//         console.log(req.params.Title);
//
//
//         if (req.params.Title) {
//             ID.findOne({$where: "this.Title== 'Notes on the Difficulty of Studying the State (1977)'"}, function (err, author) {
//                 if (err) throw err;
//                 res.json("author");
//
//             });
//         }
// });



// .put(function (req,res,next) {
//     ID.findByIdAndUpdate(req.params.authorId,
//
//         {$set: req.body},
//         {
//             new: true
//         },
//
//         function (err, author) {
//             if (err) throw err;
//             res.json(author);
//
//         });
// })
//
// .delete(function (req,res,next) {
//
//     ID.findByIdAndRemove(req.params.authorId, function (err, resp) {
//         if(err) throw err;
//         res.json(resp);
//
//     });
// });


// authorRouter.route('/:authorId/title')
//     .get(function (req, res, next) {
//         ID.findById(req.params.authorId, function (err, author) {
//             if (err) throw err;
//             res.json(author.Title);
//         });
//     })
//
//     .post(function (req, res, next) {
//         ID.findById(req.params.authorId, function (err, author) {
//             if (err) throw err;
//             author.comment.push(req.body);
//             author.save(function (err, author) {
//                 if (err) throw err;
//                 console.log('Updated Title!');
//                 res.json(author);
//             });
//         });
//     })
//
//     .delete(function (req, res, next) {
//         ID.findById(req.params.authorId, function (err, author) {
//             if (err) throw err;
//             for (var i = (author.Title.length - 1); i >= 0; i--) {
//                 author.Title.id(author.Title[i]._id).remove();
//             }
//             author.save(function (err, result) {
//                 if (err) throw err;
//                 res.writeHead(200, {
//                     'Content-Type': 'text/plain'
//                 });
//                 res.end('Deleted all comments!');
//             });
//         });
//     });
//
// dishRouter.route('/:dishId/comments/:commentId')
//     .get(function (req, res, next) {
//         Dishes.findById(req.params.dishId, function (err, dish) {
//             if (err) throw err;
//             res.json(dish.comment.id(req.params.commentId));
//         });
//     })
//
//     .put(function (req, res, next) {
//         // We delete the existing commment and insert the updated
//         // comment as a new comment
//         Dishes.findById(req.params.dishId, function (err, dish) {
//             if (err) throw err;
//             dish.comment.id(req.params.commentId).remove();
//             dish.comment.push(req.body);
//             dish.save(function (err, dish) {
//                 if (err) throw err;
//                 console.log('Updated Comments!');
//                 res.json(dish);
//             });
//         });
//     })
//
//     .delete(function (req, res, next) {
//         Dishes.findById(req.params.dishId, function (err, dish) {
//             dish.comments.id(req.params.commentId).remove();
//             dish.save(function (err, resp) {
//                 if (err) throw err;
//                 res.json(resp);
//             });
//         });
//     });

module.exports= titleRouter;