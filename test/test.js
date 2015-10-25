var request = require('supertest')
    , express = require('express');
var chai = require('chai');
var assert = chai.assert;

var app = require('../app');

describe('Testing Routes', function() {
    it.skip("renders successfully", function(done) {
        request(app).get('/').expect(200, done);
    });

    it.skip("posts successfully", function(done) {
        var tu = {
            username: "teacher1",
            password: "test",
            email: "teacher1@gmail.com",
            teacher: true
        };
        request(app)
            .post('/register')
            .send(tu)
            // end handles the response
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                console.log(res);
                assert.equal(res.status, 200);
                done();
            });
    });

    it.skip("logins successfully", function(done) {
            var tu = {
                username: "test1111",
                password: "test"
            };
            request(app)
                .post('/login')
                .send(tu)
                // end handles the response
                .end(function(err, res) {
                    if (err) {
                        throw err;
                    }
                    assert.equal(res.status, 200);
                    assert.isNotNull(res.token, "should of created a token");
                    done();
                });
    });
    it("create class successfully", function(done) {
        var newClass = {
            name: "Sexed",
            teacherId: "24d18c68-ecf0-4457-809f-ac02a818c27d"
        };
        request(app)
            .post('/class')
            .send(newClass)
            // end handles the response
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                assert.equal(res.status, 200);
                assert.isNotNull(res.code, "should of created a code");
                done();
            });
    });

    it.skip("create lecture successfully", function(done) {
        var lecture = {
            name: "Condoms",
            classId: "bd7c51a5-367c-444c-9cf5-1ce712c67eba",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        };
        request(app)
            .post('/class/bd7c51a5-367c-444c-9cf5-1ce712c67eba/lecture')
            .send(lecture)
            // end handles the response
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                assert.equal(res.status, 200);
                done();
            });
    });
    it("get classes successfully", function(done) {
        request(app).get('/classes').expect(200, done);
    });



});