export function spoler() {
	let slideUp = (target, duration = 500) => {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.display = "none";
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}

	let slideDown = (target, duration = 500) => {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
			target.style.display = "block";
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}

	let slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return slideDown(target, duration);
		} else {
			return slideUp(target, duration);
		}
	}

	const spolerLink = document.querySelectorAll('[data-spoler-link]');
	const spoler = document.querySelectorAll('[data-spoler]');

	if (spolerLink.length > 0) {
		for (let i = 0; i < spolerLink.length; i++) {
			spolerLink[i].addEventListener('click', e => {
				spolerLink[i].classList.toggle("active-spoler-link");
				e.preventDefault();
				if (spoler.length > 0) {
					for (let y = 0; y < spoler.length; y++) {
						if (e.currentTarget.dataset.spolerLink == spoler[y].dataset.spoler) {
							slideToggle(spoler[y])
							spoler[y].classList.toggle("active-spoler");
						}
					}
				}
			})
		}
	}
}