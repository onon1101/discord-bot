const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    
    async execute(interaction, client) {
        
        if (!interaction.isButton()) return;
        else if (interaction.customId === 'join-voice-channel'){

            const member = interaction.member;
            if (!member.voice.channel){
                return interaction.update({content:`喵~ 先進來任一個語音頻道八`});
            }

            const Voice_channel = await interaction.guild.channels.cache.find(channel => channel.name.toLowerCase() === `voicechannel`)
            
            member.voice.setChannel(Voice_channel);

            interaction.update({ content:`喵喵`,embeds:[], components: []});
        }
    },
};