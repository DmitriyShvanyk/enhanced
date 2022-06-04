(function () {

	'use strict'

	window.addEventListener("load", function () {
		// Access the form element...
		const form = document.querySelector('.form')

		function sendData(phpHandler) {
			const XHR = new XMLHttpRequest();
			const FD = new FormData(form);

			// Define what happens on successful data submission
			XHR.addEventListener("load", function (event) {
				//alert(event.target.responseText);
				const fancyboxThanks = new Fancybox([
					{
						src: "<div class='thanks text-center'><h2>THANK YOU!</h2><p>Your application has been accepted.</p></div>",
						type: "html",
					},
				]);

				setTimeout(() => {
					fancyboxThanks.close();
					document.location.reload();
					//form.reset()
				}, 3000)
			});

			// Define what happens in case of error
			XHR.addEventListener("error", function (event) {
				alert('Oops! Something went wrong.');
			});

			// Set up our request
			XHR.open("POST", phpHandler);

			// The data sent is what the user provided in the form
			XHR.send(FD);
		}

		function selectCity(e) {
			if(e.target.matches('.select--location select')) {
				if(e.target.value == "Mineola") {
					//console.log("Mineola")
					e.target.closest('.form').addEventListener("submit", function (event) {
						event.preventDefault();
						sendData("php/formContactsMineola.php");
					})
				}
				if(e.target.value == "Richmond Hill") {
					//console.log("Richmond Hill")
					e.target.closest('.form').addEventListener("submit", function (event) {
						event.preventDefault();
						sendData("php/formContactsRichmond.php");
					})
				}
			}
		}

		form?.addEventListener('change', (e) => {
			selectCity(e)
		})
	});

})();