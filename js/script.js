window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

// !(function () {
// 				function t(t, e) {
// 					return function () {
// 						window.carrotquestasync.push(t, arguments);
// 					};
// 				}
// 				if ("undefined" == typeof carrotquest) {
// 					var e = document.createElement("script");
// 					(e.type = "text/javascript"),
// 						(e.async = !0),
// 						(e.src = "https://cdn.carrotquest.app/api.min.js"),
// 						document.getElementsByTagName("head")[0].appendChild(e),
// 						(window.carrotquest = {}),
// 						(window.carrotquestasync = []),
// 						(carrotquest.settings = {});
// 					for (
// 						var n = [
// 								"connect",
// 								"track",
// 								"identify",
// 								"auth",
// 								"onReady",
// 								"addCallback",
// 								"removeCallback",
// 								"trackMessageInteraction",
// 							],
// 							a = 0;
// 						a < n.length;
// 						a++
// 					)
// 						carrotquest[n[a]] = t(n[a]);
// 				}
// 			})(),
// 				carrotquest.connect("54878-6d3782a4cda05fdcfa0d4c3fe6");