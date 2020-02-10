$('#create-pet').submit(function(event) {
  event.preventDefault();

  $.ajax({
    url: '/pets',
    method: 'POST',
    data: {
      name: $(this).find('input[name=name]').val().trim(),
      user: $(this).find('select[name=user]').val(),
      role: $(this).find('select[name=role]').val(),
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

$('#update-user-pet').submit(function(event) {
  event.preventDefault();

  $.ajax({
    url: '/pets',
    method: 'PATCH',
    data: {
      pet: $(this).find('select[name=pet]').val(),
      user: $(this).find('select[name=user]').val(),
      role: $(this).find('select[name=role]').val(),
    }
  }).then(function(result) {
    location.reload();
  })
})
