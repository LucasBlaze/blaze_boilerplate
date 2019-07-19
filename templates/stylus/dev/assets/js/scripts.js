'use strict';

import $ from 'jquery';
import 'slick-carousel';
import 'jquery-mask-plugin';

const $prevArrow = '<span class="o-slick-arrow o-slick-arrow--prev" aria-label="anterior"></span>',
	  $nextArrow = '<span class="o-slick-arrow o-slick-arrow--next" aria-label="próximo"></span>';

var APP = {

	common: {

		init: function () {

			//Show loading image during requisitions
			/*$(document).ajaxStart( () => $('.js-loader').show() );
			$(document).ajaxComplete( () =>	$('.js-loader').hide() );*/

		}
	},

	pages: {

		init: function () {

		},

		index: function () {

		},
	}

};

var UTIL = {
	exec: function (controller, action) {
		var namespace = APP;
		action = (action === undefined) ? "init" : action;

		if (controller !== "" && namespace[controller] && typeof namespace[controller][action] == "function") {
				namespace[controller][action]();
		}
	},

	init: function () {
		var body = document.body;
		var controller = body.getAttribute("data-controller");
		var action = body.getAttribute("data-action");

		UTIL.exec("common");
		UTIL.exec(controller);
		UTIL.exec(controller, "common");
		UTIL.exec(controller, action);
	}
};

$(document).ready(UTIL.init);