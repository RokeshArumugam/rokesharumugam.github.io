# NIA

> Started in: 2024-07
>
> [View Project](https://nia.rokesharumugam.com)
>
> ![Status](https://img.shields.io/website?url=https%3A//nia.rokesharumugam.com&label=Status&up_message=Online&down_message=Offline)
>
> ![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=FFDE57)
> ![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=FFFFFF)
> ![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=FFFFFF)
> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000000)
> ![Bash](https://img.shields.io/badge/Bash-4EAA25?logo=gnu%20bash&logoColor=FFFFFF)
> ![Pandas](https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=FFFFFF)
> ![Flask](https://img.shields.io/badge/Flask-3BABC3?logo=flask&logoColor=FFFFFF)
> ![Apache](https://img.shields.io/badge/Apache-D22128?logo=apache&logoColor=FFFFFF)
> ![Debian](https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=FFFFFF)
> ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=FFFFFF)

NIA (Non-Irritating Allocator) is a web application that automates room allocations for students at Gonville & Caius College, University of Cambridge. It takes student preferences and available rooms from simple spreadsheets and uses a simulated annealing algorithm to generate an optimised, transparent allocation in seconds.

I built NIA after seeing the repeated frustration caused by unreliable college systems and the stress placed on student representatives tasked with manual allocation. NIA replaces that process with a fair, fast, and reproducible system that anyone can use - students or administrators alike.

The project showcases skills in algorithm design, full-stack Flask-based web development, applied optimisation, and real-world problem solving. I have shared it with the college accommodation office to demonstrate how it could simplify future allocations for both staff and students.


## Background

In previous years, accommodation at Gonville & Caius College was assigned through a balloting website that routinely crashed under load. For clinical medical students, the system was even less structured: one student was appointed to allocate rooms manually based on survey responses.

To make this process faster, fairer, and less stressful, I created NIA (Non-Irritating Allocator). It began as a Python algorithm that parses preference and room data from Google Form and Excel outputs, then uses simulated annealing to optimise allocations. The algorithm can handle situations where there are too many or too few rooms, ensuring the best possible satisfaction balance across all students.

In 2025, when the accommodation officer became unresponsive and no formal allocation plan was communicated, I developed a Flask web interface for NIA and deployed it on the Student-Run Computing Facility (SRCF) servers. This made the system publicly accessible via a browser, with real-time progress updates and downloadable results.


## Description

- ⚡ Processes allocations in seconds to minutes, even for large datasets
- 🧮 Uses simulated annealing to maximise overall student satisfaction
- 🏠 Handles shortages or surpluses of rooms gracefully
- 📂 Accepts simple Excel files - one sheet for rooms, one for preferences
- 🎯 Considers budget, room size, location, parking, and friendship groups
- 💾 Results are downloadable and include percentage satisfaction scores
- 🏆 100% satisfaction is impossible, anything above 50% is a win
- 📊 Template spreadsheets and example Google Forms are provided
- 🌐 Fully hosted on SRCF servers; no setup required for users
