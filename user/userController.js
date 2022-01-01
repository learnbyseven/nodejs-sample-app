const express = require('express');
var mysql = require('mysql2');
var connection = mysql.createConnection({
	host     : 'dbbackend-svc.db-backend.svc.cluster.local',
	port     : '3306',
	user     : 'dbuser',
	password : 'db@123',
	database : 'userdb'
    });
    connection.connect((err) => {
        if (err) {
        console.log("Error in connecting DB" + err.stack);
        return;
        }
        console.log("DB connected")
            return connection;})
class User { 
    get (req, res) {
        let getuserquery = 'SELECT * FROM userdata';
        connection.query(getuserquery, function(err, result){
            res.send(result);
    })
    }
    add (req, res) {
        let adduserquery = 'INSERT INTO userdata SET ?'
        let userinfo = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            cryptocoins: req.body.cryptocoins 
        }
        connection.query (adduserquery, userinfo, (err, result) => {
            res.send(result);
                    }
        )}

    delete (req, res) {
        let username = req.params.name;
        let deleteuserquery = "DELETE FROM userdata WHERE name = ?";
        connection.query(deleteuserquery, username, (err, result) => {
            res.send(result);
        })
    }
    }
    
module.exports = User

