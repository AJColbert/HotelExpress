$(document).ready(function () {

            var now = new Date();
            var minDate = now.toISOString().substring(0, 10);

            $('#startDate').prop('min', minDate);
            $('#endDate').prop('min', minDate);

            $("#submitBookingButton").on("click", handleBookingFormSubmit);

            function handleBookingFormSubmit(event) {
                var firstName = $("#firstName").val().trim();
                var lastName = $("#lastName").val().trim();
                var phoneNumber = $("#guestPhone").val().trim();
                var email = $("#guestEmail").val().trim();
                // var specialRequests = $("#guestNotes").val().trim();
                // var checkInDate = $("#startDate").val().trim();
                // var checkOutDate = $("#endDate").val().trim();
                // var room_type = $("#roomType").val().trim();
                // var capacity = $("#guestCount").val().trim();

                event.preventDefault();
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
                    .then(console.log("data posted"));
            }
        });