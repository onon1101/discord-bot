// import npm library
import config from "dotenv";
import { Client, GatewayIntentBits, Collection } from "discord.js";

// import .ts file
// import type "@/global_type"

config.config()

const { Guilds, GuildMessages, MessageContent, GuildMembers, GuildPresences } = GatewayIntentBits;

const client: Client = new Client({
  intents: [Guilds, GuildMessages, MessageContent, GuildMembers, GuildPresences]
})

// client.command = new Collection<string, ICommand>();

// client.login(process.)

console.log("hello world");
