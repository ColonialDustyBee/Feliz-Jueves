# Feliz-Jueves

A small discord bot built entirely in Node.js which utilizes the Discord API as well as the dayjs API to calculate the current day.

This project stemmed from the fact that my friend needed to know exactly when it was Thursday. So I decided to make a small discord bot that simply sends a video if the day falls on Thursday. However, shortly after they also wanted me to add a feature that will also send that same video if a message that contains a word is sent. Which is why I decided to create this discord bot with a feature that automatically sends a video if a message is sent on Thursday as well as if someone says the word "jueves" in anyway shape or form.

It's very basic and small but I will improve on it whenever I have free time.

# A Small Overview

I decided to run this project entirely within replit's cloud so that it runs 24/7 without having the need to run it in my local machine. If you wish to do the same thing, feel free to fork this repo and make the necessary changes.

index.js - Main file where the magic happens. It sets the bot up as well the command that creates and then sends the video as an attachment if the current day is thursday or if someone says "jueves". Both can also occur simulatenously and you can change the day to whatever you want by changing the dayjs.day to a different number. I suggest looking up the dayjs documentation if you did wish to do that however.

server.js - This file is necessary if you wish for the bot to run for longer than an hour if you're hosting it on replit. It will simply ping a request to a server to keep it alive and receive a response. I recommend setting up an account to uptimerobot and linking the website that is generated to uptimerobot so that it runs for longer than an hour.

# Instructions on how to set it up

I would highly suggest you look up the discord.js documentation - https://discordjs.guide/#before-you-begin which outlines everything you need to know about setting up a discord bot, as well as potentially answering any questions you might have.

If you did wish to set up your own version. You'll first have to fill out a discord bot application through discord's developer portal - https://discord.com/developers/docs/intro

Afterwards, add the bot to a discord server by inviting it using the tools provided to you in the discord developer portal.

Once that's done, use the code provided on a replit that is running Node.js to turn the bot online. Ensure the following two things are done however: Generate a token from the discord developer portal and add the token as an env to maintain privacy within the "client.login()" function

Ensure the following two things are done however: Generate a token from the discord developer portal and add the token as an env to maintain privacy within the "client.login()" function. Ensure that any file that you would like for the bot to send is within the same root directory as your other files in your replit or at least in a folder that is readily accessible.

Once that's done, set up an uptimerobot account and link the webpage that is generated when you run your code on replit to uptimerobot. It should be a straight forward process to follow but if you are unsure, simply search it up.
