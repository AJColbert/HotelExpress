$(document).ready(function () {
  var bookingsList = $("tbody");

  $(".delete-item-button").on("click", function() {
    console.log("hey");
    //var id = $(this).attr("id");

    // $.ajax("/api/list/" + id, {
    //     type: "DELETE"
    // }).then(
    //     function () {
    //         window.location.reload();
    //     }
    // );

  });

  getBookings();

  //to be fixed by Daryll
  function createBookingRow(bookingData) {
    var newTr = $("<tr>");
    var deleteButton =$("<input>").addClass("btn btn-primary delete-item-button").attr("id", bookingData.id).attr("value","delete");

    newTr.data("booking", bookingData);
    newTr.append("<td>" + bookingData.id + "</td>");
    newTr.append("<td>" + bookingData.checkInDate + "</td>");
    newTr.append("<td>" + bookingData.checkOutDate + "</td>");
    newTr.append("<td>" + bookingData.roomId + "</td>");
    newTr.append("<td>" + bookingData.room.room_type + "</td>");
    newTr.append("<td>" + bookingData.guest.lastName + "</td>");
    newTr.append("<td>" + bookingData.guest.firstName + "</td>");
    newTr.append("<td>" + bookingData.specialRequests + "</td>");
    newTr.append("<td>").append(deleteButton);
    newTr.append("<td>" + "<input class='btn btn-primary delete-item-button' type='update' value='Update'" + "</td>").attr("id", bookingData.id);
    return newTr;
  }

  function getBookings() {
    $.get("/api/bookings/", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createBookingRow(data[i]));
      }
      renderBookingsList(rowsToAdd);
    });
  };

  function renderBookingsList(rows) {
    if (rows.length) {
      console.log(rows);
      bookingsList.prepend(rows);
    } else {
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