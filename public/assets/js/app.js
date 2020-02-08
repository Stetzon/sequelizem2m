$('#create-pet').submit(function(event) {
  event.preventDefault();

  $.ajax({
    url: '/pets',
    method: 'POST',
    data: {
      name: $(this).find('input').val().trim()
    }
  }).then(function(result) {
    location.reload();
  })
})

$('#create-user').submit(function(event) {
  event.preventDefault();

  $.ajax({
    url: '/users',
    method: 'POST',
    data: {
      name: $(this).find('input').val().trim()
    }
  }).then(function(result) {
    location.reload();
  })
})