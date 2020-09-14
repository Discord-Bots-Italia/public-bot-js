/*
    Simple Discord Bot 
    for the Discord Bots Italia community
*/

// Imports
const Discord = require('discord.js');
const fs = require('fs')

// Discord
let client = new Discord.Client();
client.config = require('./config.js');

// Discord Events
const eventFiles = fs.readdirSync("./events/").filter(file => file.endsWith(".js"));
eventFiles.forEach(file => {
  const filename = `./events/${file}`;
  const eventName = file.split(".")[0];
  const event = require(filename);
  client.on(eventName, event.bind(null, client));
});

// Discord Commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
commandFiles.forEach(file => {
  const filename = `./commands/${file}`;
  const command = require(filename);
  const commandName = file.split(".")[0];
  client.commands.set(commandName, command);
});

client.login(client.config.token)