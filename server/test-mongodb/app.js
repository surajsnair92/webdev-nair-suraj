module.exports = function(app)
{

    app.get('/api', (req, res) => {
      res.send('App works');
    });
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);


//  var connectionString = 'mongodb://webappmaker:webappmaker@ds163181.mlab.com:63181/webappmaker';
  var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
  if(process.env.MLAB_USERNAME) { // check if running remotely
    var username = process.env.MLAB_USERNAME; // get from environment
    var password = process.env.MLAB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds135514.mlab.com:35514/heroku_330hh7vq';
  }


  var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var TestSchema = mongoose.Schema({
        message: String
    });

    var TestModel = mongoose.model("TestModel", TestSchema);

    function findAllMessages(req, res) {

        TestModel
            .find()
            .then(
                function(tests) {
                    res.json(tests);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function createMessage(req, res) {
        console.log("in app");
        TestModel
            .create(req.body)
            .then(
                function(test) {
                    res.json(test);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteMessage(req, res) {
        TestModel
            .remove({_id: req.params.id})
            .then(
                function(result) {
                    res.json(result);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
};
