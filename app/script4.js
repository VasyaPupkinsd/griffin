var maxLength = 25;

// Спрацьовує при кожному введенні символу
$('textarea').on('keyup', function() { 
  var textlen = maxLength - $(this).val().length; 
  $('#rchars').text(textlen); 
  
  // Обрізаємо рядок якщо більше допустимого
  if($(this).val().length >= maxLength)
    $(this).val($(this).val().substring(0, maxLength));
});
