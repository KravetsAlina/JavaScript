$(function () {
	var $links = $('.menu a');

	$links.on ('click', function (e) {
			var $submenu = $(this).siblings('.submenu');//на уровне одного eлемента ищем другой. т е на уровне а ищем ul c submenu
			e.preventDefault();//чтобы при клике не обновлялась страница
			$submenu.slideToggle();//медленное выпадание меню и прятанье
	});

});