# Blaze

> Started in: 2024-10
>
> ![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=FFDE57)
> ![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=FFFFFF)
> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000000)
> ![Bash](https://img.shields.io/badge/Bash-4EAA25?logo=gnu%20bash&logoColor=FFFFFF)
> ![Pandas](https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=FFFFFF)
> ![Caddy](https://img.shields.io/badge/Caddy-1F88C0?logo=caddy&logoColor=FFFFFF)
> ![Debian](https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=FFFFFF)
> ![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-A22846?logo=raspberry%20pi&logoColor=FFFFFF)
> ![Cloudflare Tunnels](https://img.shields.io/badge/Cloudflare%20Tunnels-F38020?logo=cloudflare&logoColor=FFFFFF)
> ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=FFFFFF)

Blaze is a tool that automatically converts my university timetable from a website format into a live, subscribable calendar (.ics) feed. It ensures my calendar is always up to date and accessible from my phone.

I built Blaze to remove the hassle of repeatedly logging into the university timetable website (which required several clicks and often changed without notice) and to avoid the common issue of turning up to cancelled sessions. It now keeps my phone calendar automatically synced every 15 minutes. Blaze has been running continuously in my university accommodation network, saving me and others from missed sessions and wasted trips.

The project demonstrates full-stack automation, system reliability, and self-hosted deployment skills using Python, browser automation, and secure tunnelling on a Raspberry Pi. It's been a strong exercise in systems integration, network configuration, and secure automation, combining software and infrastructure skills to solve a real-world problem.


## Background

My university timetable is only accessible via a secure website that requires Microsoft authentication with two-factor login. Frequent, unannounced timetable changes meant that students would sometimes arrive at cancelled or rescheduled lectures.

Blaze solves this problem by automatically logging into the university site using Python-based browser automation, fetching the latest timetable data, exporting it to a .ics calendar file, and updating automatically every 15 minutes via a scheduled cron job. The file is hosted on my personal Raspberry Pi using a Caddy web server, and made publicly accessible via Cloudflare Tunnels. My phone's calendar app subscribes to this feed, syncing updates automatically every 15 minutes.

Cookies are cached locally to speed up authentication, and no database is used - the app simply regenerates the calendar file on each update cycle.
