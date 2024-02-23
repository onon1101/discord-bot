import fs from "fs";
import ascii from "ascii-table";
import { Client } from "discord.js";

const eachConditions = [
  restAndOnce: { run: (client: Client, event: any) => { client.once(event.name, (...args) => event.execute(...args, client)) } },
  notRestAndOnce: { run: (client: Client, event: any) => { client.once(event.name, (...args) => event.execute(...args, client)) } },
  restAndNotOnce: { run: (client: Client, event: any) => { client.rest.on(event.name, (...args) => event.execute(...args, client)) } },
  notRestAndNotOnce: { run: (client: Client, event: any) => { client.on(event.name, (...args => event.execute(...args, client)) } },
];

export const loadEvents = (client: Client) => {
  const folders = fs.readdirSync("@/Events");

  const table = ascii().setHeading("Events", "Status");

  folders.map((folderPath) => {
    const file = fs.readFileSync(`@/Events/${folderPath}`);

    const event = require(`@/Events/${folderPath}/${file}`);

    eachConditions[event.status].run(client, event);
  });
};
