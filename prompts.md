# ChatBotUsed
ChatGPT4-o

## Prompt 1
You are a senior front-end engineer. You are a master using javascript, htlm and css.
I want to create a simple and robust stopwatch and countdown web application from scratch.

The application should have 4 different screen:

* First screen:
    * It should show two buttons to select STOPWATCH or COUNTDOWN
    * If the user click on STOPWATCH, the second screen should be shown.
* Second screen (stopwatch):
    * It should show the next visual items.
        * Stopwatch timer with format 00:00:00.000
        * Button START/STOP 
        * Button CLEAR.
    * If user click on START button, the stopwatch start and START button changes to PAUSE.
    * If user click on PAUSE button, the stopwatch stops and PAUSE button changes to START.
    * If user click on CLEAR button, the stopwatch should be reset to 00:00:00.000
* Third screen (countdown configuration)
    * It should show the next visual items.
        * Countdown timer with format 00:00:00.000
        * The maximum countdown value is 99:59:59.000
        * An easy and safe visual way to set the countdown value should be provided. Be careful!
        * Only hours, minutes and seconds can be configured.
        * Button SET.
        * Button CLEAR.
    * If user click on CLEAR button, the countdown should be reset to 00:00:00.000
    * If user click on SET the Four screen should be open with the value settled by the user.
* Four screen (countdown):
    * It should show the next visual items.
        * Countdown timer with the value configured in the screen 3.
        * Button START/PAUSE 
        * Button CLEAR.
    * If user click on CLEAR button, the countdown should be reset to initial configured value.
    * If user click on START button, the countdown starts and START button changes to PAUSE.
    * If user click on PAUSE button, the countdown stops and PAUSE button changes to START.


The UX should follow the next guides:
    - All the componentes needs to follow the design provided in the image attached. Should be the same.
    - STOPWATCH, SET, START, PAUSE should have the same color then the button Start in the image provided.
    - Buttons COUNTDOWN, CLEAR should have same design than Clear in the image.
    - The counter should display the milliseconds under the seconds like the design in the image provided.

I wan't to generate all only in two files. One called index.html and another with the logic called script.js


# Prompt 2
Lets solve some issues that I've found:

* The timer display in all screens where it appears, don't show the milliseconds in the proper position. Please, remember the images it should be placed under second and with a less font size than the other units.
* I like the way to input the countdown values, but...could you improve a little bit the style to be aligned with the rest elements?
* You forgot assign the style in the four screen.

# Prompt 3
Lets solve two issues, maybe I could not express properly

* The timer display in all screens where it appears, don't show the milliseconds in the proper position. Please, remember the images it should be placed just under seconds, not moved to any side, just under! And with a less font size than the other units.
* You forgot assign the style in the four screen. Please, button start/pause and button clear does not have the proper design. Remeber buttons start/pause green and button clear red. 




  