import fs from "fs";
import ascii from "ascii-table";
import { Client } from "discord.js";

interface IModule {
  data: {
    name: string;
  };
}

const loadCommands = (client: Client) => {
  const table = ascii().setHeading(); // Add missing method call to setHeading()

  const commandsArray = [];

  const commandsFolder = fs.readdirSync("@/commands");

  commandsFolder.map((folderPath, idx) => {
    // wtf the format...
    const commandFiles = fs
      .readdirSync(`@/commands/${folderPath}`)
      .filter((file) => file.endsWith(".js"));

    commandFiles.map((file, idx) => {
      const commandsSingleFile = require(`@/commands/${folderPath}/${file}`);
      client.commands.set(commandsSingleFile.data.name, commandsSingleFile);
      commandsArray.push(commandsSingleFile.data.toJson());
      table.addRow(file, "loaded");
    });
  });
};

export default loadCommands;
