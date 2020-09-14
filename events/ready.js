module.exports = async client => {
    // Log some useful variables when online
    console.log("I am ready!");
    console.log(`I am logged in as ${client.user.tag}`);
    console.log(`Node version: ${process.version}`);
    console.log(`Discord.JS version: ${require('discord.js').version}`);
    console.log("Invite: https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&permissions=8&scope=bot");
    console.log(`===========================`);
    client.user.setActivity(client.config.activity);
};
