const {SlashCommandBuilder, ChannelType, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } =require('discord.js');
const configFile = require('../../token.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('secretchannel')
    .setDescription('創建一個秘密的小房間'),

    async execute(interaction){
        const member = interaction.member;
        if (!member.voice.channel) return interaction.reply(`Please join the any Voice channel in guild`)
        // console.log(interaction.guild.channels);
        
        const buttonaction = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('join-voice-channel')
                .setLabel('加入!')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false)
            );

        const embeds = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('emo小房間')
			.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
			.setDescription('我好emo~');
        

        if(interaction.guild.channels.cache.find(channel => channel.name.toLowerCase() === `bot's home`)) {
            interaction.reply({ content:`系統出現問題，請通知管理員處理!!` })
            return ;
        }
        const Category = await interaction.guild.channels.create({
            name: `backroom`,
            type: ChannelType.GuildCategory,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [`0x0000000000000400`], // 0x0000000000000400 => VIEW_CHANNEL
                }],
            })
    
            
        if(interaction.guild.channels.cache.find(channel => channel.name.toLowerCase() === `Voicechannel`)){
            interaction.reply({ content:`系統出現問題，請通知管理員處理!!` })
            return ;
        }
        const voiceChannels = await interaction.guild.channels.create({
                name: "小黑屋", 
                type: ChannelType.GuildVoice,
                parent: Category,
            })
        

        member.voice.setChannel(voiceChannels);
        await interaction.reply({ embeds: [embeds], components: [buttonaction]})
    }
};
