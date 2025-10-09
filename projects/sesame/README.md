# Sesame

> Started in: 2022-11
>
> ![Python](https://img.shields.io/badge/Python-3776AB?logo=Python&logoColor=FFDE57)
> ![Debian](https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=FFFFFF)
> ![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-A22846?logo=raspberry%20pi&logoColor=FFFFFF)
> ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=FFFFFF)

Sesame is a personal home automation project that allows a Raspberry Pi to unlock the front door of my accommodation using servomotors and relays connected to the intercom system. It turns a standard door entry setup into a remotely controlled smart access device.

I built Sesame to make it easier to get into my flat without needing my keys, especially when carrying bags or arriving late. With it, I can unlock the door by tapping a button on my watch, or someone can send 'OPEN SESAME' to the WhatsApp groupchat.

Developing Sesame helped me learn how to combine software and hardware for real-world automation. I gained experience using Python’s 'gpiozero' for GPIO control, 'playwright' for browser automation, and designing mechanical solutions using servos and relays.


## Background

The intercom system in my accommodation required pressing a physical button to unlock the front door, and later this was changed to a touch screen button. I wanted a way to open it remotely without modifying the building’s wiring or replacing the system.

Using a Raspberry Pi, relays, foil, and servo motors, I built a mechanism that could press both physical and touchscreen buttons to trigger the intercom. The setup uses Python’s 'gpiozero' for hardware control and Playwright for browser automation. I can now just tap a button on my watch and buzz myself in, alternatively if someone's locked out they can send 'OPEN SESAME' to the WhatsApp groupchat to be automatically buzzed in.
