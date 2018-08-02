$(document).ready(function () {
    var guestList = $("tbody");

    getGuests();

    function createGuestRow(guestData) {
        var newTr = $("<tr>");
        newTr.data("room", guestData);
        newTr.append("<td>" + guestData.id + "</td>");
        newTr.append("<td> " + guestData.firstName + "</td>");
        newTr.append("<td> " + guestData.lastName + "</td>");
        newTr.append("<td> " + guestData.phoneNumber + "</td>");
        newTr.append("<td> " + guestData.email + "</td>");
        return newTr;
      }

    function getGuests() {
        $.get("/api/guests", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createGuestRow(data[i]));
          }
          renderGuestList(rowsToAdd);
        });
      };

    function renderGuestList(rows) {
        //room.children().not(":last").remove();
        //authorContainer.children(".alert").remove();
        if (rows.length) {
          console.log(rows);
          guestList.prepend(rows);
        }
        else {
          renderEmpty();
        }
      }
    
      // Function for handling what to render when there are no authors
      function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.text("No guests in the database.");
        guestList.append(alertDiv);
      }
    
});