$(document).ready(function () {
    var firstName;
    var lastName;
    var phoneNumber;
    var email;
    var specialRequests;
    var checkInDate;
    var checkOutDate;
    var room_type;
    var capacity;
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
        capacity = $("#guestCount").val().trim();

        if (!firstName || !lastName || !guestEmail || !guestCount || !startDate || !endDate || !guestPhone) {
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
                console.log(data.id);
                postBooking({
                    guestid: data.id,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                    room_type: room_type
                });
            })
    }

    function postBooking(bookingDetails){
        $.post("/api/bookings", bookingDetails)
        .then(function(data){
            console.log(data);
        })
    }
});