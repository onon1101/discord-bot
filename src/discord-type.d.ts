import {Message, PermissionResolvable} from "discord.js";

export interface ICommand {
    name: string,
    execute: (message: Message, args: string[]) => void,
    permissions: PermissionResolvable[],
    aliases: string[],
    cooldown?: number,
}