$(document).ready(function() {

  var myDataRef = new Firebase('https://skynews.firebaseio.com/'); //instantiates firebase database
  $('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      myDataRef.push({name: name, text: text}); //pushes the data up to firebase
      $('#messageInput').val('');
    }
  });
  myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
  });
  function displayChatMessage(name, text) {
    $('<div/>').text(text).prepend($('<strong/>').text(name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  };

});



