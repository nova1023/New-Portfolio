
//Dependencies ===============================================
const Express = require("express");

//Setup ======================================================
var app = Express();
var port = process.env.PORT || 3000;

app.use(Express.static("public"));

//Routing ====================================================
app.get('/', function(req, res)
{
    res.sendFile("index.html");
});

// app.get("/projects", function(req, res)
// {
//     res.sendFile(__dirname + "/public/projects.html");
// });

//Start Listening ============================================
app.listen(port, function()
{
    console.log("Listening on port: " + port);
});