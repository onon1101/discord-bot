// import npm library
import "dotenv/config";
import { Client, GatewayIntentBits, Collection } from "discord.js";

// import .ts file
// import loadEvents from '@/handler/events'
// import loadCommands from '@/handler/Commands'
//
// declare module "discord.js" {
//   export interface Client {
//     commands: Collection<any, any>
//   }
// }

const { Guilds, GuildMessages, MessageContent, GuildMembers, GuildPresences } = GatewayIntentBits;

const client: Client = new Client({
  intents: [Guilds, GuildMessages, MessageContent, GuildMembers, GuildPresences]
})

client.commands = new Collection();

// client.login(process.env.TOKEN)
//   .then(() => loadEvents(client))
//   .then(() => loadCommands(client))

console.log("hello world");
