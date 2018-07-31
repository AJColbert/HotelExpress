$(document).ready(function () {

    //sets the current date as earliest possible booking date
    var now = new Date(),
        minDate = now.toISOString().substring(0, 10);

    $('#startDate').prop('min', minDate);
    $('#endDate').prop('min', minDate);

    $("#submitBookingButton").on("click", function () {
        event.preventDefault();
        captureInput();
    })

    function captureInput() {

        var guestName = $("#guestName").val();
        var guestEmail = $("#guestEmail").val();
        var guestCount = $("#guestCount").val();
        var guestNotes = $("#guestNotes").val();
        var startDate = $("#startDate").val();
        var endDate = $("#endDate").val();
        var guestPhone = $("#guestPhone").val();

        if (!guestName || !guestEmail || !guestCount || !startDate || !endDate || !guestPhone) {
            alert("Please fill in all fields.");
        } else {
            newBooking = {
                "guestName": guestName,
                "guestEmail": guestEmail,
                "guestCount": guestCount,
                "guestNotes": guestNotes,
                "startDate": startDate,
                "endDate": endDate,
                "guestPhone": guestPhone
            };
            console.log(newBooking);
            postBooking();
        }
    }
});

function postBooking() {
    $.ajax("/api/list", {
        type: "POST",
        data: newBooking
    }).then(function () {
        console.log(newBooking + " added");
        location.reload();
    })
}