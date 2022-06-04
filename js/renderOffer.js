(function() {

    'use strict'

    // render offer
	function renderOffer(){
		const offerItems = document.querySelector('.offer__items')
		if(!offerItems) return
		const offerItemsContent = `<div class="row justify-content-center">
			<div class="col-md-4 col-sm-6">
				<div class="offer__item">
					<div class="offer__pict d-flex align-items-end justify-content-center">
						<img class="offer__img lazyload" data-sizes="auto" src="#" data-src="img/offer/i1.png" width="104" height="101" alt="">
					</div>
					<h3 class="subtitle offer__subtitle">
						We Treat A Variety<br class="d-none d-sm-block"> of&nbsp;Diagnoses
					</h3>
					<a href="services-variety.html" class="btn btn--sm offer__btn">READ MORE</a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="offer__item">
					<div class="offer__pict d-flex align-items-end justify-content-center">
						<img class="offer__img lazyload" data-sizes="auto" src="#" data-src="img/offer/i2.png" width="161" height="81" alt="">
					</div>
					<h3 class="subtitle offer__subtitle">
						Postsurgical<br class="d-none d-sm-block">
						Rehab
					</h3>
					<a href="services-postsurgical-rehab.html" class="btn btn--sm offer__btn">READ MORE</a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="offer__item">
					<div class="offer__pict d-flex align-items-end justify-content-center">
						<img class="offer__img lazyload" data-sizes="auto" src="#" data-src="img/offer/i3.png" width="75" height="118" alt="">
					</div>
					<h3 class="subtitle offer__subtitle">
						Sports Physical<br class="d-none d-sm-block"> Therapy
					</h3>
					<a href="services-sports-physical-therapy.html" class="btn btn--sm offer__btn">READ MORE</a>
				</div>
			</div>
		</div>`

		offerItems.insertAdjacentHTML('beforeend', offerItemsContent)
	}


    // dom loaded
	renderOffer()

})();