function makeMarquee () {

	const title = 'FIFTY Music Festival — November 10-12, Desert Valley'

	const marqueeText = new Array (50).fill(title).join(' - ')
	// we make a new empty array with 50 spaces in it
	// we fill it with the text from our title (50 times)
	// we join them all together as one text string using a ' - '


	// querySelector and querySelectorAll are the same as $ in jQuery
	 const marquee = document.querySelector('.marquee span')

	// using innerHTML lets us set the content inside an element
	 marquee.innerHTML = marqueeText

	 // 1. we grab our .marquee span from the html 
	 // 2. we set our repeating title as the content

}

makeMarquee()

function random(min, max) {
   return Math.floor( Math.random() * ( 1 + max - min ) ) + min;
}



const circles = document.querySelectorAll('.circle')

circles.forEach(function(circle, index) {

	circle.animate([
	{transform: 'scale(1)'},
	{transform: 'scale(1.2)'},
	{transform: 'scale(1)'}
	], {
		delay: 300 * index,
		duration: 3000,
		iterations: Infinity
	})

})

const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach(function(squiggle, index) {

	const randomNum = random(0,45)

	squiggle.animate([
	{transform: 'rotate(0deg)'},
	{transform: `rotate(${randomNum}deg)`},
	{transform: 'rotate(0deg)'}
	], {
		delay: 300 * index,
		duration: 5000,
		iterations: Infinity
	})
})


// we want to detect when our .section enters the viewport
// when it does, we want to add a class of 'in-viewport', and when it exists we want to remove it again

inView('.section')
    .on('enter', section => {
    	section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    })

inView.threshold(0.5)


	// 1. we want to select each section on our page and loop through them
	// 2. in each section we want to grab the artists and shapes
	// 3. for both of these we want to add transition-delay effects
	// 4. we want to make sure our shapes only fade in after our artists

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
	// here we use querySelectorAll on our 'section' to only find elements inside of our section vs. our entire page
	const artists = section.querySelectorAll('.lineup li')
	const shapes = section.querySelectorAll('.shape')

	artists.forEach((artist, index) => {
		const delay = index * 100
		artist.style.transitionDelay = `${delay}ms`
	})

	shapes.forEach((shape, index) => {
		// we are setting to only start once all of our artists have faded in, using the .length property 
		const delay = (artists.length + index) * 100
		shape.style.transitionDelay = `${delay}ms`
	})
})


	// 1. whenever we click a .js-scroll link, we want to run a function
	// 2. we want to stop the link from jumping straight to our section (its default behavior)
	// 3. we want to find out the href attribute, and then grab that element
	// 4. then scroll to is using scrollIntoView

	const scrollLinks = document.querySelectorAll('.js-scroll') //grab all of the scroll links on the page

	scrollLinks.forEach(link => { 	// for each scroll link we are running a function on it
		link.addEventListener('click', (event) => {	// every time we click, we get an event snapshot that happens
			// using the event keyword we get access to a snapshot of what happened when we clicked on our link
			
			event.preventDefault()	// with that event, we get this default action which we're going to stop from happening

			const href = link.getAttribute('href')	// grab the href attribute from that particular link 
			document.querySelector(href).scrollIntoView({	// we're finding the element that it links to and scrolling it in
				behavior: 'smooth'	//	using the 'smooth' transition
			})
		})
	})


	