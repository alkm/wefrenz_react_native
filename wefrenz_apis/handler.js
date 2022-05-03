'use strict';

require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./db');
const Note = require('./models/Note');
const signInInfo = require('./models/signininfo');
const userInfo = require('./models/userinfo');



module.exports.signUp = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {

      let email = JSON.parse(event.body).email;
      let password = JSON.parse(event.body).password;
      let fullName = JSON.parse(event.body).fullname;

      signInInfo.findOne({username: email}, function(err, users){
        if(err){
          //res.send(err);
          callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not sign up.'
          });
        }else{
          if(users == null){
            // create a user, information comes from AJAX request from Angular
            signInInfo.create({
              username : email,
              password: password,
              done : false
            }, function(err, users) {
              if (err){
                //res.send(err);
                callback(null, {
                  statusCode: err.statusCode || 500,
                  headers: { 'Content-Type': 'text/plain' },
                  body: 'Could not sign up.'
                });
              }else{
                let profilePicObj = {};
                profilePicObj.previewPicDimension = '100x100';
                profilePicObj.profilePicDimension = '75x75';
                profilePicObj.imageBuffer = 'assets/images/defaultprofilepic.jpg';
                  userInfo.create({
                  username : email,
                  fullname : fullName,
                  profilepic : profilePicObj,
                  wallpicpath : "",
                  wallpicpos : "",
                  appearance : "offline",
                  easyrtcid : "",  
                  done : false
                }, function(err, users) {
                  if (err){
                    //res.send(err);
                    callback(null, {
                      statusCode: err.statusCode || 500,
                      headers: { 'Content-Type': 'text/plain' },
                      body: 'Could not sign up.'
                    });
                  }else{
                    //res.json({"status": "success", "message": "Account created successfully"});
                    callback(null, {
                      headers: { 'Content-Type': 'text/plain' },
                      body: '{"status": "success", "message": "Account created successfully"}'
                    });
                  }
                });  
              }
            });
          }else{
            
            //console.log("This User "+JSON.stringify(users)+" already Exists");
            //res.json({"status": "failure","message": "This User "+users.username+ " already Exists"});
            callback(null, {
              headers: { 'Content-Type': 'text/plain' },
              body: '{"status": "failure","message": "This User "'+users.username+ '" already Exists"}'
            });
          }
        }

      });
    });
  };


module.exports.signIn = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {

        /*callback(null, {
          statusCode: 200,
          body: JSON.stringify('inside'+JSON.parse(event.body).email)
        })*/
        let email = JSON.parse(event.body).email;
        let password = JSON.parse(event.body).password;

      signInInfo.findOne({username: email}, function(err, users){
        if(err){
          //res.send(err);
          callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not sign in.'
          });
        }else{
          if(users == null){
            //res.json({"status": "failure", "message": "Invalid username"});
            callback(null, {
              headers: { 'Content-Type': 'text/plain' },
              body: 'Invalid username.'
            });
          }else{
            if(users.password == password){
              userInfo.findOne({username: email}, function(err, info){
                if(err){
                  //console.log(err);
                  callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not sign in.'
                  });
                }else{
                  //req.mySession.username = info.username;
                  //req.mySession.userid = info._id;
                  //ssn = req.session;
                  //ssn.username = info.username;
                  //res.json({"status": "success","message": "Welcome "+info.fullname, "info": info});
                  callback(null, {
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify(info)
                  });
                }
              });

            }
            else{
              //res.json({"status": "failure", "message": "Wrong Password"});
              callback(null, {
                headers: { 'Content-Type': 'text/plain' },
                body: 'Wrong Password".'
              });
            }
          }
        }
      });
    });
};

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Note.create(JSON.parse(event.body))
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the note.'
        }));
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Note.findById(event.pathParameters.id)
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the note.'
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Note.find()
        .then(notes => callback(null, {
          statusCode: 200,
          body: JSON.stringify(notes)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the notes.'
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Note.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the notes.'
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Note.findByIdAndRemove(event.pathParameters.id)
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed note with id: ' + note._id, note: note })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the notes.'
        }));
    });
};

