window.document.addEventListener('DOMContentLoaded', function () {
	var navbar = document.querySelector('navbar#navbar');
	window.addEventListener('scroll', function () {
		if (document.body.scrollTop > 0) {
			navbar.style.position = 'fixed';
		} else {
			navbar.style.position = 'relative';
		}
	})
})