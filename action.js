$('.press').click(function () {
  $('.collapse').collapse('hide');
});

$('#navbarNavAltMarkup').click(function (e) {
  $('.press').removeClass('active--nav');
  let hasclass = $(e.target).hasClass('.active--nav');
  if (hasclass == false) {
    $(e.target).addClass('active--nav');
  }
});
$('.list-group-item').click(function (e) {
  $('.list-group-item').removeClass('active--nav');
  let havclass = $(e.target).hasClass('.active--nav');
  if (havclass == false) {
    $(e.target).addClass('active--nav');
  }
});
