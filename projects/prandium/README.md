# Prandium

> Started in: 2021-11
>
> ![Python](https://img.shields.io/badge/Python-3776AB?logo=Python&logoColor=FFDE57)


Prandium is a bot to book meals at Gonville and Caius college, University of Cambridge.

We have to book meals in advance and they can be very competitive. People wake up early to book meals and still often miss them. So I created Prandium. I have been able to sleep in and get a place at any meal I would like for over a year now. I also let some friends occasionally use it too.


## Background

At my college (Gonville and Caius) we have to book meals in advance if we would like to dine at the college. The booking webpage may open as early as 6am and places may sell out in less than 5 seconds depending on the menu, number of courses and formality of the meal. This resulted in people setting alarms to wake up early to book meals and often still missing them due to being a few seconds slow. So I created Prandium to book meals for me.

I let some friends use Prandium for free last year but now I have started allowing other people to use Prandium for a small fee.


## Information for Clients

Currently, the maximum number of pre-bookings I'm accepting per meal is 7, since I don't want to flood the system

Pre-bookings for each term open 1 week before the start of full term

Pre-bookings and cancellations need to be requested at least 18 hours before the signup opens so that I have time to update Prandium's list

Prandium can not only book meals (including gallery seating), but also specify dietary requirements, number of vegetarians, number of guests and guests' names for no extra cost

Clients can request for their data to be deleted at any time - this will also delete any of their current pre-bookings. Their data will be deleted at the end of every term anyway.


### Prices

There are S, A, B and C tier pre-bookings for each meal in order of increasing price


Tiers for each meal are filled in order of increasing price (except S), so it's better to pre-book early


Pre-bookings can be upgraded to a higher tier (B to A) if available but, don't worry, they won't be downgraded (A to B)


Payment is due via bank transfer after each successful booking (this includes getting accepted from, but not to, the waiting list). If multiple meals have been pre-booked, total payment can be accepted at the end of term instead.


#### Tiers of Pre-bookings

##### S Tier

- Based on special consideration
- Free

##### A Tier

- First 4 pre-bookings (so the first 4 people that come to me to pre-book a certain meal)
  - This includes S tier pre-bookings (so 1 S tier pre-booking and 3 A tier pre-bookings means that no more A tier pre-bookings are available for that meal)
- £1

##### B Tier

- Next 2 pre-bookings
- £2

##### C Tier

- Next 1 pre-bookings
- £3


## Usage

### Format of Prebooking Meals

```json
[
    {
        "date": "<date as dd-mm-yyyy>",
        "eventName": "<meal name>",
        "numVegetarians": "<number of vegetarians>",
        "numGuests": "<number of guests>",
        "guestsNames": "<guests' names>",
        "dietaryRequirements": "<dietary requirements>"
    }
]
```

- Number of vegetarians is optional
- Number of guests is optional
- Guests' names is optional
- A meal can be commented and not parsed by prefixing \<date\> with '//'


#### Date Format

- dd-mm-yyyy
- Section divider is '-'


### Format of Preferences

```json
{
	"password": "<password>",
	"vegetarianDays": [<day number>],
	"dietaryRequirements": "<dietary requirements>"
}
```

- Vegetarian days is optional
- Dietary requirements is optional
- For \<day number\> Monday is 0
