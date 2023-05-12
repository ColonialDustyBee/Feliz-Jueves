// PACKAGES //
const { Client, IntentsBitField } = require('discord.js');
const { AttachmentBuilder } = require('discord.js');
const dayjs = require("dayjs");
const keepAlive = require("./server");
const jueves = dayjs().day(4).format('d').toString()
const juevesAttachment = new AttachmentBuilder('./FelizJueves.mp4', { name: 'FelizJueves.mp4' }) 
var correctDay = true;
const client = new Client({ // These simply allow for the discord bot to have access to the permissions that are granted. You can change these as you see fit.
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


client.on('ready', () => {
  console.log('Bot is on');
})

client.on('messageCreate', async (message) => {
  var currentDay = dayjs().format('d').toString()
  console.log("Current Day: ", currentDay)
  console.log('Correct Day: ', jueves)
  if (currentDay === jueves && correctDay === true) { // Will only send once
    message.channel.send({ files: [juevesAttachment] });
    correctDay = false;
  }
  if (currentDay !== jueves) {
    correctDay = true;
  }
  if (message.content.toLowerCase().includes("jueves")) {
    message.channel.send({ files: [juevesAttachment] });
  }
});

client.login(// YOUR TOKEN GOES HERE // ); // please ensure that you create an env that way you don't willingly give out your token.
keepAlive() // Calls server
