$(document).ready(function () {
    var firstName;
    var lastName;
    var phoneNumber;
    var email;
    var specialRequests;
    var checkInDate;
    var checkOutDate;
    var room_type;
<<<<<<< HEAD
=======
    var capacity;
>>>>>>> origin/dawn_dev
    var now = new Date();;
    var minDate = now.toISOString().substring(0, 10);

    $('#startDate').prop('min', minDate);
    $('#endDate').prop('min', minDate);

    $("#submitBookingButton").on("click", handleBookingFormSubmit);

    function handleBookingFormSubmit(event) {
        event.preventDefault();

        firstName = $("#firstName").val().trim();
        lastName = $("#lastName").val().trim();
        phoneNumber = $("#guestPhone").val().trim();
        email = $("#guestEmail").val().trim();
        specialRequests = $("#guestNotes").val().trim();
        checkInDate = $("#startDate").val().trim();
        checkOutDate = $("#endDate").val().trim();
        room_type = $("#roomType").val().trim();
<<<<<<< HEAD

        if (!firstName || !lastName || !guestEmail || !startDate || !endDate || !guestPhone) {
=======
        capacity = $("#guestCount").val().trim();

        if (!firstName || !lastName || !guestEmail || !guestCount || !startDate || !endDate || !guestPhone) {
>>>>>>> origin/dawn_dev
            alert("Please fill in all fields.");
        } else {
            postGuest({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email
            })
        };
    }

    //post Guest info
    function postGuest(guest) {
        $.post("/api/guests", guest)
            .then(function (data) {
<<<<<<< HEAD
                console.log(data);
=======
                console.log(check);
>>>>>>> origin/dawn_dev
                $.get("/api/availablerooms/" + checkInDate + "/" + checkOutDate + "/" + room_type, function(room){
                    console.log(room);
                    postBooking({
                        guestId: data.id,
                        roomId: room[0].id,
                        checkInDate: checkInDate,
                        checkOutDate: checkOutDate,
<<<<<<< HEAD
                        room_type: room_type,
                        specialRequests: specialRequests
=======
                        room_type: room_type
>>>>>>> origin/dawn_dev
                    });
                });
               
            });
    }

<<<<<<< HEAD
    function resetForm(){
        console.log("reset done!");
        $("#firstName").val("");
        $("#lastName").val("");
        $("#guestPhone").val("")
        $("#guestEmail").val("")
        $("#guestNotes").val("")
        $("#startDate").val("")
        $("#endDate").val("")
        $("#roomType").val("")
    }

=======
>>>>>>> origin/dawn_dev
    function postBooking(bookingDetails){
        $.post("/api/bookings", bookingDetails)
        .then(function(data){
            console.log(data);
<<<<<<< HEAD
            resetForm();
        })
    }


});
=======
        })
    }
});
>>>>>>> origin/dawn_dev
