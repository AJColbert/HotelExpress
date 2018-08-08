$(document).ready(function () {
    var bookingsList = $("tbody");

    getBookings();

//to be fixed by Daryll
    function createBookingRow(bookingData) {
        var newTr = $("<tr>");
        newTr.data("booking", bookingData);
        newTr.append("<td>" + bookingData.id + "</td>");
        newTr.append("<td>" + bookingData.room.id + "</td>");
        newTr.append("<td>" + bookingData.room.room_type + "</td>");
        newTr.append("<td>" + bookingData.firstName + "</td>");
        newTr.append("<td>" + bookingData.lastName + "</td>");
        newTr.append("<td>" + bookingData.checkInDate + "</td>");
        newTr.append("<td>" + bookingData.checkOutDate + "</td>");
        newTr.append("<td>" + bookingData.specialRequests + "</td>");
        newTr.append("<td>" + '<input class="btn btn-primary delete-item-button" type="delete" value="Delete"' + "</td>");
        newTr.append("<td>" + '<input class="btn btn-primary delete-item-button" type="delete" value="Update"' + "</td>");
        return newTr;
      }

    function getBookings() {
        $.get("/api/bookings/", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createBookingRow(data[i]));
          }
          renderBookingsList(rowsToAdd);
        });
      };

    function renderBookingsList(rows) {
        //room.children().not(":last").remove();
        //authorContainer.children(".alert").remove();
        if (rows.length) {
          console.log(rows);
          bookingsList.prepend(rows);
        }
        else {
          renderEmpty();
        }
      }
    
      // Function for handling what to render when there are no authors
      function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.text("No bookings in the database.");
        bookingsList.append(alertDiv);
      }
    
});