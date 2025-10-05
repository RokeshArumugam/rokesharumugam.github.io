# Salt

> Started in: 2023-08
>
> [View Project](https://chrome.google.com/webstore/detail/salt/mjmcaioleoioplapgocohdkkcdlhlhci)
>
> ![Rating](https://img.shields.io/chrome-web-store/stars/mjmcaioleoioplapgocohdkkcdlhlhci?label=Chrome%20Web%20Store%20Rating&labelColor=4285F4&logo=Chrome-Web-Store&logoColor=white)
>
> ![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=FFFFFF)
> ![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=FFFFFF)
> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000000)

Salt is a browser extension that enhances the meal booking website at my college (Gonville and Caius) at the University of Cambridge.

Salt applies almost all of the improvements (and more) from my Meal Booking Website project on top of the old website via a browser extension (albeit not as efficiently as replacing the old website would be).


## Background

At my college (Gonville and Caius) we have to book meals in advance if we would like to dine at the college. The old meal booking website looks as if was made quite a while ago and I noticed that a lot of students (myself included) felt that it could be greatly improved. So I created an improved version (which can be seen [here](meal_booking_website.html)) over the long vacation that is more fitting of our esteemed college.

However, it seems uncertain whether the college will actually use it, so in the meantime I converted it into Salt: a browser extension that everyone can benefit from immediately, for free! It works on Google Chrome and Microsoft Edge.


## Description

We all know Caius' current meal booking website leaves a lot to be desired.

Well, fear not!

No longer shall booking a meal be such a tasteless experience.

Salt drastically improves the UI, making information more readable, accessible and mobile-friendly.

It also adds several quality-of-life features (many student-requested) such as:

- A calendar to choose your meal
- One-click booking from the main page
- Actual signup open dates instead of '4 days before'
- The ability to filter through who's booked in for a meal to find your friends
- In case that still takes too long, the ability to add your friends' names on the profile page so they always show at the top of the list	
- Meals have tags (such as gowns, suits, black-tie, guests allowed, etc) so you don't have to read through all that text
- The allergen key can also be seen above the menu so you finally know what all those letters mean
- You can quickly copy meal details to send to guests so they know the time, place, dress code, menu, etc
- Dark mode so booking meals at 6am doesn't wake you up too much
- And much more!

Note: if you're logged into a Google Account or Chrome Profile with your @cam.ac.uk email address, the
university doesn't let you use extensions. To use Salt you'll have to sign out of both your Google Account
and Chrome Profile to install it, then you can sign back into your Google Account.

Note: Salt was designed with students' experience in mind so it may be a little off for staff (they are very
welcome to give feedback so I can improve it for them!)


## Screenshots

![Calendar](https://rokesharumugam.com/IMAGES/salt/carouselImages/calendar.png)
![History](https://rokesharumugam.com/IMAGES/salt/carouselImages/history.png)
![Event](https://rokesharumugam.com/IMAGES/salt/carouselImages/event.png)
![Profile](https://rokesharumugam.com/IMAGES/salt/carouselImages/profile.png)
![Filter](https://rokesharumugam.com/IMAGES/salt/carouselImages/filter.png)


## Usage

### Versioning Convention

MAJOR.MINOR.PATCH


### Messages Format

```json
[
	{
		"page": "<filename or ALL>",
		"name": "<identifier for message>",
		"repeatWaitTime": <wait time in ms>,
		"repeatShowInitial": <true or false>,
		"showOnce": true,
		"lines": [
			"line1",
			"line2"
		]
	}
]
```

- Default page is "index.html"
- name is optional but needed if using repeatWaitTime or showOnce
- repeatWaitTime is optional
- repeatShowInitial is optional
- Default repeatShowInitial is true
- Default showOnce is false
