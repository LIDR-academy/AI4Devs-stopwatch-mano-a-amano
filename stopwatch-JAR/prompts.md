// ChatGPT 4o

# First prompt
Hello! You're an amazing Senior Frontend Developer. 

We want to create a new stopwatch application, accessible in a web browser. 

Application structure
The application will contain three pages:
- The home page: This page will have the application's title and a menu with two options: stopwatch and countdown. Both items will have icons and big items. 
- The stopwatch page will contain a stopwatch counter with two buttons: start and clear and the counter.
- The countdown page will contain a countdown counter and an interface to select the start counter and set two buttons: set for a start and clear for resetting the counter. For example, the user could add 01:00:00 and the countdown will start from this number to 00:00:00. 

Tech stack
- Split the application code into three files: html file, css file and javascript file
- Use the Bootstrap library to create the interface and the components. 

Behavior
- Don't create three HTML pages, create one page and the different sections will be changed dynamically.
- Add the tags in the HTML file to put the title in the web browser tab.

# Second prompt
Let's modify some things in the project:
- On the main page, enlarge the two options with a size of 50% of the page and add an image icon for each option. 
- On the stopwatch section, enlarge the counter, more big, include milliseconds, and enlarge the two buttons. 
- On the countdown section, enlarge the counter, more big, and change the interface to use buttons to set the countdown and not an input text, the user must use only the mouse to introduce the value. 
In both sections, when the stopwatch or the countdown is active, the number should be visible in the tab web browser, if not, show the application title.

# Third prompt
Ok, fix some problems:
- The two options now are broken, like the image is not accessible, use icons from the bootstrap library and not images.
- The timers are small, enlarge the timers to a big size like h2.
- The interface of the countdown is not very well for the user experience, add buttons like 1,2,3,4... and the user will introduce clicking in the buttons the countdown. For example, if I want to introduce 00:12:12, I will click on button 0, button 0 again, then button 1, then button 2, then button 1, and finally, button 2.
- In the countdown section, include a menu with the last 10 countdowns introduced and, if the user clicks in one of them, set it as an active countdown.

# Forth prompt
The two options on the main page are very close and the icons didn't appear, apart, the options don't have button style.
The countdown is not working, I can't select a countdown.

# Fifth prompt
One last fix, in the countdown, now, if I click in the last countdowns, the current countdown keeps running, the behavior is: stop the current countdown and put the selected countdown from the list.