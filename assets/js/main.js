/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);


contactPopulation();
// contact info to populate the footers
function contactPopulation() {
	let footElem = document.getElementById("footer");

	// remove prepopulated footer element information
	while (footElem.hasChildNodes()) {
		footElem.removeChild(footElem.firstChild);
	}

	let sectElem = document.createElement("section");

	// Contact Me title
	let titleElem = document.createElement("h2");
	titleElem.innerHTML = "Contact Me";
	sectElem.appendChild(titleElem);

	// element that contains info for contacting options
	let contactElem = document.createElement("dl");
	contactElem.setAttribute("class", "alt");
	let emailDetailElem = document.createElement("dt");
	emailDetailElem.innerHTML = "Email";
	contactElem.appendChild(emailDetailElem);
	let emailInfoElem = document.createElement("dd");
	let emailAnchor = document.createElement("a");
	emailAnchor.setAttribute("href", "mailto:riddlen1@southernct.edu");
	emailAnchor.setAttribute("target", "_blank");
	emailAnchor.innerHTML = "riddlen1@southernct.edu";
	emailInfoElem.appendChild(emailAnchor);
	contactElem.appendChild(emailInfoElem);
	sectElem.appendChild(contactElem);

	// element that contains links to socials
	let socialsList = document.createElement("ul");
	socialsList.setAttribute("class", "icons");
	// create the LinkedIn element
	let linkedinElem = document.createElement("li");
	let linkedinElemAnchor = document.createElement("a");
	linkedinElemAnchor.setAttribute("href", "https://www.linkedin.com/in/nathanriddle2/");
	linkedinElemAnchor.setAttribute("class", "icon brands fa-linkedin alt");
	linkedinElemAnchor.setAttribute("target", "_blank");
	linkedinElemAnchor.setAttribute("alt", "a link to my LinkedIn profile");
	let linkedinElemSpan = document.createElement("span");
	linkedinElemSpan.setAttribute("class", "label");
	linkedinElemSpan.innerHTML = "LinkedIn";
	linkedinElemAnchor.appendChild(linkedinElemSpan);
	linkedinElem.appendChild(linkedinElemAnchor);
	socialsList.appendChild(linkedinElem);
	// create the GitHub element
	let githubElem = document.createElement("li");
	let githubElemAnchor = document.createElement("a");
	githubElemAnchor.setAttribute("href", "https://github.com/nate1099");
	githubElemAnchor.setAttribute("class", "icon brands fa-github alt");
	githubElemAnchor.setAttribute("target", "_blank");
	githubElemAnchor.setAttribute("alt", "a link to my GitHub profile");
	let githubElemSpan = document.createElement("span");
	githubElemSpan.setAttribute("class", "label");
	githubElemSpan.innerHTML = "GitHub";
	githubElemAnchor.appendChild(githubElemSpan);
	githubElem.appendChild(githubElemAnchor);
	socialsList.appendChild(githubElem);
	sectElem.appendChild(socialsList);
	footElem.appendChild(sectElem);
}
