exports.run = async (client, message, args) => {
  const msg = await message.channel.send(`Pong!`);
  msg.edit(`:ping_pong:Pong! Latency: \`${msg.createdTimestamp - message.createdTimestamp}ms\`. API Latency: \`${Math.round(client.ws.ping)}ms\``);
};

exports.config = {
  aliases: ["pong"], // Array of aliases
};