import {Client, GatewayIntentBits,Collection} from "discord.js";

import config from "dotenv";
import {ICommand} from "./discord-type";
import loadEvents from "./Handing/EventLoader.js";
import loadCommands from "./Handing/CommandsLoader";

config.config()

const client:any= new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ]
});

client.commands = new Collection<string, ICommand>();

client.login(process.env.token)
    .then(() => {
        // @ts-ignore
        loadEvents(client),
        // @ts-ignore
        loadCommands(client)
    });