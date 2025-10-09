# AVT

> Started in: 2025-09
>
> [View Project](https://avt.rokesharumugam.com)
>
> ![Status](https://img.shields.io/website?url=https%3A//avt.rokesharumugam.com&label=Status&up_message=Online&down_message=Offline)
>
> ![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=FFDE57)
> ![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=FFFFFF)
> ![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=FFFFFF)
> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000000)
> ![Bash](https://img.shields.io/badge/Bash-4EAA25?logo=gnu%20bash&logoColor=FFFFFF)
> ![Flask](https://img.shields.io/badge/Flask-3BABC3?logo=flask&logoColor=FFFFFF)
> ![Apache](https://img.shields.io/badge/Apache-D22128?logo=apache&logoColor=FFFFFF)
> ![Debian](https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=FFFFFF)
> ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=FFFFFF)

AVT is a lightweight web application built to support data collection for the Ambient Voice Technology study at Cambridge University Hospitals. The tool enables researchers to efficiently record and manage timing data from multiple patients in clinical settings.

I created AVT to replace a manual, error-prone workflow and add new features including automatic data uploads, local data persistence, and a cleaner, more intuitive interface. The app has improved accuracy and efficiency for researchers and simplified my role as data lead.

The project demonstrates rapid prototyping, user-centred design, and practical application of Python, Flask, and front-end development skills in a real-world research context. AVT is currently deployed on the SRCF servers and actively used by the research team.


## Background

The Ambient Voice Technology study investigates how voice-assisted technology can improve clinical efficiency. As part of the research, researchers record the duration of specific activities during outpatient sessions.

Researchers were using an existing website to collect data however it was missing a few quality-of-life features. To streamline this process, I created AVT - a Flask-based app that allows researchers to start and stop multiple timers for different patients, save their progress locally, and upload completed datasets directly to the server which then appear on my laptop via an SSHFS mount. This replaced a slow, manual workflow where files were emailed to me for cleaning and aggregation.

AVT is now deployed and actively used by the research team, running on the Student-Run Computing Facility (SRCF) servers at the University of Cambridge.

For me, this project was an excellent exercise in rapid prototyping, user-centred design, and building lightweight web tools for real-world use in a research context.


## Advantages Over Its Predecessor

- Researchers can upload their data which automatically appears on my laptop via an SSHFS mount
- Data is saved to local storage to prevent loss on page refresh
- Easily add or remove patient slots (no longer fixed at 12)
- Guidance links and tooltips for new users
- Clean, intuitive UI/UX designed for speed and clarity in a clinical environment
- Optional CSV download for backup or offline processing
