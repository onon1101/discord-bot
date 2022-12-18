function loadCommands(client){
    const fs = require('fs');
    const ascii = require('ascii-table');
    const table = new ascii().setHeading("Commands", "Status");

    const commandsArray = [];

    const commandsFolder = fs.readdirSync('./commands')
    // console.log(commandsFolder);
    for (const folder of commandsFolder) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));
        
        for (const file of commandFiles){
            const commandFile = require(`../commands/${folder}/${file}`);
            // console.log(`../commands/${folder}/${file}`);
            
            client.commands.set(commandFile.data.name, commandFile);
            commandsArray.push(commandFile.data.toJSON());
            // console.log(`${commandsArray}`);

            table.addRow(file, "loaded");
            continue;
        }
    }
    // console.log(`${commandsArray}`);
    client.application.commands.set(commandsArray);
    return console.log(table.toString(), "\nLoaded Commands");
}

module.exports = {loadCommands}