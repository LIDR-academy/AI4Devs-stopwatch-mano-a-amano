You are an experienced web developer and UI designer, you know how to use HTML, Javascript and CSS nicely. You can also generate images and apply modern styles.
Create me a website that implements a stopwatch and a counter, depending on the user choice from a main menu.
The main menu offers two butons: 
- 'Stopwatch' and its a green upwards arrow (link one public from google images but make sure its working, dont use wikipedia)
- 'Countdown'  and its red down arrow(link one public from google images but make sure its working, dont use wikipedia)
Both buttons are centered on the screen and next to each other.
Use the menu.png file as design reference.
Depending on the user choice you switch to the Stopwatch interface or the Countdown interface.
The resulting code should be split in a HTML file, Javascript file and a CSS file.
Clicking Stopwatch will change the interface to the Stopwatch interface and clicking Countdown will switch the interface to the Countdown interface.

I will now explain the Stopwatch interface and functionality. There is a timer at the middle of the screen of initial value of zero and below it two buttons.
A green Start button and a red Clear button.
When the Start button is clicked, the timer will start counting upwards and the Start icon should change to a green Pause button.
If the Pause button is clicked, the timer should freeze and the Pause button turn to a blue Continue button. 
Clicking this blue Continue button will resume the timer and the button should change back to a green Pause button.
When the Clear button is clicked, the timer value should return to the initial value of zero.
At the bottom left of the website, there should be a green back button with the form of an arrow pointing to the left that returns the user to the main menu.
Use the stopwatch.png file as design reference.

I will now explain  the Countdown interface and functionality. There is a timer at the middle of the screen of initial value of zero and below a keyboard with the numbers
0 1 2 3 4 5 6 7 8 9, each one a button. On their right side two buttons: a green Set and a grey Clear.
When the user clicks the numbers from the displayed numbers, they are printed on the timer and considered as the initial countdown value.
After Set button is clicked, the keyboard numbers will be hidden and two buttons displayed:
A green Start button and a red Clear button.
Clicking the start button will start the countdown timer and the button change to Pause.
Clicling the pause button will freeze the timer and the button change to a blue Continue button.
Clicking the Clear button will reset the timer to the initial value and change the Pause button to a Start button.
At the bottom left of the website, there should be a green back button with the form of an arrow pointing to the left that returns the user to the main menu.
Use the countdown.png file as design reference.

-

When I click on the Stopwatch or Countdown buttons nothing happens, fix it. It should change to the Stopwatch interface or the Countdown interface. There is a reported error of 'Uncaught SyntaxError: Invalid or unexpected token at line 88 in script.js'. Return me the complete fixed script.js