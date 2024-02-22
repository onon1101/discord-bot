import fs from "fs";
import ascii from "ascii-table";
import { Client } from "discord.js";

const eachConditions = [
  {
    IsRestOnce: true,
    run: (client: Client, event: any) => {},
  },
  { isNotRestOnce: true, run: (client: Client, event: any) => {} },
  {
    IsRestOnce: true,
    run: (client: Client, event: any) => {},
  },
  {
    IsRestNotOnce: true,
    run: (client: Client, event: any) => {},
  },
];

export const loadEvents = (client: Client) => {
  const folders = fs.readdirSync("@/Events");

  const table = ascii().setHeading("Events", "Status");

  folders.map((folderPath) => {
    const file = fs.readFileSync(`@/Events/${folderPath}`);

    const event = require(`@/Events/${folderPath}/${file}`);

    const { IsRest, IsOnce } = event;

    if (event.rest) {
      if (event.rest.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
        // event.execute(...args, client);
      }
    }
  });
};
