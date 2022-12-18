function loadEvents(client) {
    const fs = require('fs');
    const ascii = require('ascii-table');
    const folders = fs.readdirSync('./Events');
    //[ 'Client', 'Guild' ]

    const table = new ascii().setHeading('Events', 'Status');

    for(const folder of folders) {
        const files = fs.readdirSync(`./Events/${folder}`).filter((file) => file.endsWith('.js'));
        
        for (const file of files) {
            const event = require(`../Events/${folder}/${file}`);
            // { name: 'ready', once: true, execute: [AsyncFunction: execute] }
            if (event.rest){
                if (event.rest.once) { 
                    client.once(event.name, (...args) => event.execute(...args, client));
                    event.execute(...args,client);
                }
                else {
                    client.rest.on(event.name, (...args) => event.execute(...args, client)) ;
                    event.execute(...args, client);
                }
            }else{

                if (event.once) client.once(event.name, (...args) => event.execute(...args, client)) ;
                else client.on(event.name, (...args) => event.execute(...args, client));
            }

            
            table.addRow(file, "loaded");
            continue;
        }
    }
    return console.log(table.toString(), "\nLoaded events")
}

module.exports = {loadEvents};