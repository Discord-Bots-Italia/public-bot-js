module.exports = async (client, message) => {
    
    // Ignore bots and non-commands
    if (message.author.bot) return;
    if (!message.content.startsWith(client.config.prefix)) return;

    // Define commans arguments
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Command check
    const cmd = client.commands.get(command) || client.commands.find(c => c.config.aliases.includes(command));
    if (!cmd) return;

    //Run command
    try {
        cooldownCache.add(limitFlag);
        setTimeout(() => {
            cooldownCache.delete(limitFlag);
        }, cmd.config.cooldown * 1000);

        await cmd.run(client, message, args);
    } catch (e) {
        console.error(e)
    }
}