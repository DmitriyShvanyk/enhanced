;
(function () {

	"use strict";

	// load fonst
	function loadFonst(href) {
		const head = document.querySelector('head');
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		head.appendChild(link)
	}

	loadFonst('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');



	// init navbar
	function initNavbar() {
		const navbar = document.querySelector('.navbar');
		if (!navbar) return
		const navbarMenu = navbar.querySelector('.navbar__menu')
		const navbarCollapse = navbar.querySelector('.navbar__collapse');
		const navbarClose = navbar.querySelector('.navbar__close');
		const hamburger = document.querySelector('.hamburger');

		function showNavbarCollapse() {
			navbarCollapse.classList.add('navbar__collapse--active');
		}

		function hideNavbarCollapse() {
			navbarCollapse.classList.remove('navbar__collapse--active');
		}

		hamburger.addEventListener('click', showNavbarCollapse);
		navbarClose.addEventListener('click', hideNavbarCollapse);


		// init menu for mobile
		if (window.matchMedia("(max-width: 991px)").matches) {

			function initMenu(e) {
				if (e.target.classList.contains('menu__drop')) {
					const item = e.target.closest('.menu__item')
					item.classList.toggle('menu__item--active')
					const submenu = item.querySelector('.submenu')
					if (!submenu) return
					submenu.classList.toggle('submenu--active')
				}
			}

			navbarMenu.addEventListener('click', (e) => {
				initMenu(e)
			})
		}
	}



	// init swiper
	function initSwiper() {
		const swiperEl = document.querySelector('.swiper')
		if (!swiperEl) return

		// swiper gallery
		const swiperGallery = new Swiper('.gallery__swiper', {
			preloadImages: false,
			lazy: true,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});

		// swiper reviews
		const swiperReviews = new Swiper('.reviews__swiper', {
			loop: false,
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}



	// date dob
	function initDateDOB() {
		const dateDOB = document.querySelectorAll('.js-date-dob')
		if (!dateDOB) return

		dateDOB.forEach(el => {
			flatpickr(el, {
				altInput: true,
				altFormat: "d/m/Y",
				dateFormat: "d/m/Y",
				disableMobile: "true",
				maxDate: "today"
			});
		})
	}


	// date visit
	function initDateVisit() {
		const dateVisit = document.querySelectorAll('.js-date-visit')
		if (!dateVisit) return

		dateVisit.forEach(el => {
			flatpickr(el, {
				minDate: "today",
				altInput: true,
				altFormat: "d/m/Y",
				dateFormat: "d/m/Y",
				disableMobile: "true",
				disable: [date => (date.getDay() === 0)]
			});
		})
	}



	// render social
	function renderSocial() {
		const social = document.querySelectorAll('.social')
		if (!social) return
		const socialContent = `<a href="https://www.facebook.com/EnhancedPT" class="social__link d-flex align-items-center justify-content-center ms-0" aria-label="Facebook" rel="noopener">
				<svg class="social__i" width="22" height="23">
					<use xlink:href="#i-fb"></use>
				</svg>
			</a>
			<a href="https://www.instagram.com/enhancedphysicaltherapy/" class="social__link social__link--tw d-flex align-items-center justify-content-center" aria-label="Twitter" rel="noopener">
				<svg class="social__i">
					<use xlink:href="#i-inst"></use>
				</svg>
			</a>
			<a href="https://www.yelp.com/biz/enhanced-physical-therapy-mineola" class="social__link social__link--yelp d-flex align-items-center justify-content-center" aria-label="Yelp" rel="noopener">
				<svg class="social__i">
					<use xlink:href="#i-yelp"></use>
				</svg>
			</a>
			<a href="https://www.youtube.com/user/enhancedptny" class="social__link social__link--ytb d-flex align-items-center justify-content-center" aria-label="Youtube" rel="noopener">
				<svg class="social__i">
					<use xlink:href="#i-ytb"></use>
				</svg>
			</a>
			<a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="social__link social__link--g d-flex align-items-center justify-content-center me-0" aria-label="Google+" rel="noopener">
				<svg class="social__i">
					<use xlink:href="#i-g"></use>
				</svg>
			</a>`
		social.forEach(el => el.innerHTML = socialContent)
	}



	// load google map
	function loadGoogleMap(containerEl, iframeEl) {
		const container = document.querySelector(containerEl)
		const iframe = iframeEl
		if (!container) return
		container.innerHTML = iframe
	}

	setTimeout(() => {
		loadGoogleMap('.contacts__map--mineola', `<iframe loading="lazy" title="Mineola" src="https://maps.google.com/maps?q=137%20Willis%20Avenue&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`)
		loadGoogleMap('.contacts__map--richmond', `<iframe loading="lazy" title="Richmond" src="https://maps.google.com/maps?q=86-11%20Lefferts%20Blvd&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`)
	}, 3000);



	// render footer
	function renderFooter() {
		const footerEl = document.querySelector('.footer')
		if (!footerEl) return
		const footerContent = `<div class="container footer__container justify-content-between">
		<div class="footer__left">
			<a href="index.html" class="logo footer__logo d-inline-flex">
				<img class="logo__img lazyload" data-sizes="auto" src="#" data-src="img/logo-white.png"  width="218" height="44" alt="ENHANCED PT">
			</a>
			<div class="footer__infos">
				<div class="footer__info">
					<h3 class="footer__info-title text-uppercase">Mineola Location & Hours</h3>
					<p>137 Willis Avenue | Mineola, NY 11501</p>
					<p>Tel: <a class="footer__info-link" href="tel:+5168335880">516-833-5880</a> |
						Fax: <a class="footer__info-link" href="tel:+5168335881">516-833-5881</a></p>
					<p>Email: <a class="footer__info-link"
							href="mailto:info@drjacobkurianpt.com">info@drjacobkurianpt.com</a></p>
				</div>
				<div class="footer__info">
					<h3 class="footer__info-title text-uppercase">RIchmond Hill Location & Hours</h3>
					<p>86-11 Lefferts Blvd. 3rd Floor | Richmond Hill, NY 11418</p>
					<p>Tel: <a class="footer__info-link" href="tel:+7185815599">718-581-5599</a> |
						Fax: <a class="footer__info-link" href="tel:+7188801374">718-880-1374</a></p>
					<p>Email: <a class="footer__info-link"
							href="mailto:richmond@drjacobkurianpt.com">richmond@drjacobkurianpt.com</a></p>
				</div>
			</div>
		</div>
		<div class="footer__right d-flex flex-column">

			<!--menu.begin-->
			<div class="menu footer__menu d-block">
				<a href="about.html" class="menu__link d-block">ABOUT</a>
				<a href="services-main.html" class="menu__link d-block">OUR SERVICES</a>
				<a href="location-mineola.html" class="menu__link d-block">LOCATIONS</a>
				<a href="patient-info.html" class="menu__link d-block">PATIENTs</a>
				<a href="teams.html" class="menu__link d-block">OUR TEAM</a>
				<a href="http://drjacobkurianpt.com/blog/" class="menu__link d-block">BLOG</a>
				<a href="contacts.html" class="menu__link d-block">CONTACT</a>
			</div>
			<!--menu.end-->

			<!--social.begin-->
			<div class="social footer__social d-flex align-items-center"></div>
			<!--social.end-->
		</div>
	</div>`

		footerEl.insertAdjacentHTML('beforeend', footerContent)
	}


	// dom loaded
	document.addEventListener("DOMContentLoaded", () => {
		initNavbar()
		renderFooter()
		renderSocial()
		initDateDOB()
		initDateVisit()

		setTimeout(() => {
			initSwiper()
		}, 3000)
	})



	// render svg
	function renderSvg(selector, xmlString) {
		const doc = new DOMParser().parseFromString(xmlString, 'application/xml');
		const elem = document.querySelector(selector);
		elem.appendChild(
			elem.ownerDocument.importNode(doc.documentElement, true)
		)
	}

	const svgSprites = `<svg class="sr-only" version="1.1" height="0" xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink">
		<symbol id="i-fb" viewBox="0 0 320 512">
			<path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
		</symbol>
		<symbol id="i-inst" viewBox="0 0 448 512">
		<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
		</symbol>
		<symbol id="i-tw" viewBox="0 0 20 21">
			<g clip-path="url(#clipTw)">
				<path
					d="M19.1668 2.84481C18.3688 3.4077 17.4852 3.83823 16.5501 4.11981C16.0483 3.54273 15.3813 3.13372 14.6393 2.94808C13.8974 2.76244 13.1164 2.80914 12.4019 3.08185C11.6874 3.35456 11.0738 3.84014 10.6443 4.4729C10.2147 5.10567 9.98989 5.85509 10.0001 6.61981V7.45314C8.53567 7.49111 7.08454 7.16632 5.77599 6.50768C4.46743 5.84904 3.34208 4.877 2.50015 3.67814C2.50015 3.67814 -0.833186 11.1781 6.66681 14.5115C4.95059 15.6764 2.90611 16.2606 0.833481 16.1781C8.33348 20.3448 17.5001 16.1781 17.5001 6.59481C17.4994 6.36268 17.4771 6.13113 17.4335 5.90314C18.284 5.06438 18.8842 4.0054 19.1668 2.84481Z"
					fill="currentColor" />
			</g>
			<defs>
				<clipPath id="clipTw">
					<rect width="20" height="20" fill="currentColor" transform="translate(0.000152588 0.344727)" />
				</clipPath>
			</defs>
		</symbol>
		<symbol id="i-yelp" viewBox="0 0 384 512">
			<path fill="currentColor" d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"></path>
		</symbol>
		<symbol id="i-ytb" viewBox="0 0 576 512">
			<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
		</symbol>
		<symbol id="i-g" viewBox="0 0 640 512">
			<path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
		</symbol>
	</svg>`

	setTimeout(() => {
		renderSvg('body', svgSprites);
	}, 3000);

})();