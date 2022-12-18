const config = require('./token.json');
const { loadEvents } = require('./Handing/EventLoader');
const { Client, GatewayIntentBits, Collection, Guild } = require('discord.js');
const { loadCommands } = require('./Handing/CommandsLoader');


const client = new Client({
	intents:[ 
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.Guilds,
	 ],
});

client.commands = new Collection();

client.login(config.token).then(()=>{
	loadEvents(client);
	loadCommands(client);
});

