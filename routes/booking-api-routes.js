// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app)
{
    app.get("/api/availablerooms", function (req, res) {
        sequelize.query("SELECT roomid FROM bookings WHERE (CheckInDate BETWEEN DATE(:checkInDate) AND (DATE(:checkOutDate)-1) ) AND (checkOutDate BETWEEN DATE(:checkInDate) AND (DATE(:checkOutDate))) LIMIT 1;", {
            replacements: req.body,
            type: sequelize.QueryTypes.SELECT
        }).then(room => {
            console.log(room);
            res.json(room);
        });
    });
    // GET route for getting all of the bookings
    app.get("/api/bookings", function (req, res) {
        db.booking.findAll({
                include: [db.room]
            })
            .then(function (dbBooking) {
                res.json(dbBooking);
            }).catch(function (err) {
                //DO Seomthing
                res.json('{"Error":"Coud not find stuff"}' + err);
            });
    });

    // Get route for retrieving a single booking
    app.get("/api/bookings/:id", function (req, res) {
        db.booking.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.room]
            })
            .then(function (dbBooking) {
                res.json(dbBooking);
            });
    });

    // booking route for saving a new booking 
<<<<<<< HEAD
    //TODO: Write BOOKING POST SEQUELIZE
    app.post("/api/bookings", function (req, res) {
=======
    app.post("/api/bookings", function (req, res)
    {
>>>>>>> origin/dev
        console.log(req.body);


        
        db.booking.create(req.body)
            .then(function (dbBooking) {
                res.json(dbBooking);
            });
    });

    // DELETE route for deleting bookings
    app.delete("/api/bookings/:id", function (req, res) {
        db.booking.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbBooking) {
                res.json(dbBooking);
            });
    });

    // PUT route for updating bookings
    app.put("/api/bookings", function (req, res) {
        db.booking.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbBooking) {
                res.json(dbBooking);
            });
    });
};