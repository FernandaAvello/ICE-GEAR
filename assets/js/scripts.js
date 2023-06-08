$(function () {
  $('input').click(function () {
    $('input').css({
      'background-color': '#000',
      'border': '2px solid #e65765',
      'border-left': 'none',
      'border-right': 'none',
      'color': 'gray'
    })
    $('.inputSpanDefault').css({
      'background-color': '#000',
      'border': '2px solid #e65765',
      'color': '#e65765',
      'border-right': 'none',
    })
    $('.iconSpan').css({
      'background-color': '#000',
      'border': '2px solid #e65765',
      'color': '#e65765',
    })
    $('#icon1').css({
      'color': '#e65765'
    })
    $('#icon2').css({
      'color': '#e65765'
    })
    $('#icon3').css({
      'color': '#e65765'
    })
  })
// Comportamiento Input Verde
  $('#iconSpan1').click(function () {
    $('#iconSpan1').css({
      'background-color': '#90ef8f',
      'border': '2px solid #90ef8f',
    })
    $('#icon1').css({
      'color': 'green',
    })
    $('#inputSpan1').css({
      'background-color': '#90ef8f',
      'border': '2px solid #90ef8f',
      'color': 'green',
    })
    $('#input1').css({
      'background-color': '#90ef8f',
      'border-top': '2px solid #90ef8f',
      'border-bottom': '2px solid #90ef8f',
      'color': 'green',
    })
  })
// Comportamiento Input Amarillo
  $('#iconSpan2').click(function () {
    $('#iconSpan2').css({
      'background-color': '#f1ff1d',
      'border': '2px solid #f1ff1d',
    })
    $('#icon2').css({
      'color': 'orange',
    })
    $('#inputSpan2').css({
      'background-color': '#f1ff1d',
      'border': '2px solid #f1ff1d',
      'color': 'orange',
    })
    $('#input2').css({
      'background-color': '#f1ff1d',
      'border-top': '2px solid #f1ff1d',
      'border-bottom': '2px solid #f1ff1d',
      'color': 'orange',
    })
  })
// Comportamiento Input Azul
  $('#iconSpan3').click(function () {
    $('#iconSpan3').css({
      'background-color': '#add8e6',
      'border': '2px solid #add8e6',
    })
    $('#icon3').css({
      'color': 'blue',
    })
    $('#inputSpan3').css({
      'background-color': '#add8e6',
      'border': '2px solid #add8e6',
      'color': 'blue',
    })
    $('#input3').css({
      'background-color': '#add8e6',
      'border-top': '2px solid #add8e6',
      'border-bottom': '2px solid #add8e6',
      'color': 'blue',
    })
  })
})