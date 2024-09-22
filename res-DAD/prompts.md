# Prompts

**AI used:** ChatGPT 4 (one free chat, limit reached with the last prompt)
**Author:** Daniel Artola

## prompt 1

    I would like to create a stopwatch and a countdown, based in the one in this url: "https://www.online-stopwatch.com/", can you check the url and acknowledge it? Also I need you to consider this image that I attach for the UI/UX. I don't need a summary.

### Considerations for prompt

I specified the url to inspire the AI and the Image to copy the styles

## prompt 2

    I need to create a similar project with a stopwatch and a countdown but with different look and feel. Act as an expert frontend developer and create me two files:
    
    - index.html: with the basic html for a stopwatch and a countdown, split in two sections. I would need you to link a css file and the js file that you'll create me for this project.
    - style.css: with the styles for the stopwatch and the countdown. You can use the styles you want, but I would like to see a good looking project and responsive
    - script.js: with the logic for the stopwatch and the countdown.
      
    
    For the stopwatch I need to show hours, minutes, seconds and milliseconds. I need the buttons start, stop and reset. Take these considerations:
    
    - the start button should be disabled if the stopwatch is running
    - the stop button should be disabled if the stopwatch is not running
    - the reset button should be disabled if the stopwatch is not running and the time is 0. If the stopwatch is running, the reset button should be also disabled.
    
    For the countdown I need to show hours, minutes, seconds and milliseconds. I need the buttons start and stop. Take these considerations:
    
    - the start button should be disabled if the countdown is running
    - the stop button should be disabled if the countdown is not running
    - the reset button should be disabled if the countdown is not running and the time is 0. If the countdown is running, the reset button should be also disabled.
    - I want to set the initial time with buttons like a calculator, with a button for each number, and two buttons to set the time I choose as the countdown time, and another to reset the amount of time I set.
    - when the I press the start button, the countdown should start from the time I set.
    - when the countdown reaches 0, it should stop and show a message "Time is over"
    - when the countdown is running, the buttons to set the time should be disabled.
    
    I need the project to be responsive and to look good. I would like to see a good use of css and a good structure in the js file, with comments to ensure what each function does. I also need to use the last version of javascript and css, use also semantic html. I want buttons with colors that helps to do the UI more intuitive.

### Considerations for prompt

 1. Added a role to act as it: expert frontend developer
 2. List the files I want to determine the structure
 3. List the functionalities that I want
 4. List the considerations that I need for each feature, like buttons behavior or logic
 5. Finish the prompt ensuring the technologies, best practices and te UX of the design

## prompt 3

    I found some errors in the code, please take these considerations and list me only the changes I should do in the current code to fix them. Try to group all the changes in a single list. I want to fix all of them changing only once each file. Here's the list of changes:
    - the disabled buttons should have a gray color to distinguish them from the enabled buttons, getting back the original color when they are enabled.
    - the colors and styles don't match the image I sent you, please change them to match the image.
    - the countdown doesn't show the buttons to set the time, please add them, and ensure that the logic is correct to set the time and enable or disabled the corresponding buttons as I explained in the prompt 2.

### Considerations for prompt

I added the list of the errors that I saw, all of them to save time getting solutions for each one that could led to change several times the same code and forcing me to merge them or change several times the same function. In previous experiences I had this kind of problems

## prompt 4

    Now, I would need to enable the set-time section and buttons for the countdown when the time is over, to allow the user to set again the initial time. Also, notice that the image I send you has a particular black thick border in the buttons and inputs, I want you to copy it also. Give me only the changes I should apply on each file.

### Considerations for prompt

The last prompt, fix the previous bugs but create a new one, so I decided to go only for this last bug.
  
## prompt 5

    now the countdown doesn't starts when the initial time is set. please fix it and give me the whole code for each file with the code complete and fixed

### Considerations for prompt

I realized that if I ask to list only the changes, the IA doesn't inform the code to clean or remove, so I asked the whole file to copy paste them and avoid human errors keeping dead code or duplicate functions or code.

## prompt 6

    the specificity for css in buttons don't show the border nor the gray background when disabled. Please fix it

## prompt 7

    Last fix, show the stopwatch and the countdown divs in a column for desktop. Consider to fit the elements always inside the view.

# Conclusions

Asking acknowledge to ChatGPT sometimes is not enough, and you have to remind him to respect the images and urls that you share, also specify what do you want to keep exactly (like the borders in the css) can help.
Asking to show only the changes needed for adding a feature or solve a problem can led to dead code, duplicated functions or call non existent functions.
Even if you ask for best practice or specific technologies, ensure that the AI is using what you asked for is crucial. As an example, I asked for semantic html but the code only shown divs, not sections or details or whatever.
