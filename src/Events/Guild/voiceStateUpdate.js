const config = require('../../token.json');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'voiceStateUpdate',
    
    execute(oldVoiceState, newVoiceState){

        function embeds(setField2, setField1, setAuthor, color){
            const welcomeEmbed = new EmbedBuilder()
            .setColor(color)
            .setAuthor(setAuthor)
            // .setDescription(setDescription)
            .addFields(setField1)
            .addFields(setField2)

            .setTimestamp()
            .setFooter({ text: 'Today'});//, iconURL: member.user.defaultAvatarURL });

            return welcomeEmbed;
        }


        // console.log(oldVoiceState.channel)
        if (oldVoiceState.channel!=null && newVoiceState.channel!=null && oldVoiceState.channel.name != newVoiceState.channel.name ) {// The member changed the channel.
            

            // console.log(`${newVoiceState.member.user.tag} from ${oldVoiceState.channel.name} connected to ${newVoiceState.channel.name}.`);
            const textChannel = newVoiceState.guild.channels.cache.get(config.messageChannel);

            welcomeEmbed = embeds(
                { name: '~ 亂移動bad', value:`<@${newVoiceState.member.user.id}>`,inline: true},
                { name: '~ 事件', value:`<#${oldVoiceState.channel.id}> 移動到 <#${newVoiceState.channel.id}> .`,inline: true},
                { name: newVoiceState.member.user.tag, iconURL: newVoiceState.member.user.displayAvatarURL(), url: newVoiceState.member.user.displayAvatarURL() },
                '0x141F78',
            );

            textChannel.send({ 
                //content:`<@${newVoiceState.member.user.id}> from <#${oldVoiceState.channel.id}> connected to <#${newVoiceState.channel.id}> .`
                embeds: [welcomeEmbed]
            });
        }

        else if (newVoiceState.channel && oldVoiceState.channel===null)  { // The member connected to a channel.
            // console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
            const textChannel = newVoiceState.guild.channels.cache.get(config.messageChannel);

            // const welcomeEmbed = new EmbedBuilder()
            // .setColor('0x009200')
            // .setAuthor({ name: newVoiceState.member.user.tag, iconURL: newVoiceState.member.user.displayAvatarURL(), url: newVoiceState.member.user.displayAvatarURL() })
            // .setDescription(`<@${newVoiceState.member.user.id}> connected to <#${newVoiceState.channel.id}> .`)
            // .setTimestamp()
            // .setFooter({ text: 'Today'});//, iconURL: member.user.defaultAvatarURL });

            welcomeEmbed = embeds(
                { name: '~ 來吧!!', value: `<@${newVoiceState.member.user.id}>`, inline: true },
                { name: '~ 事件', value: `加入了語音頻道 <#${newVoiceState.channel.id}> .`, inline: true },
                { name: newVoiceState.member.user.tag, iconURL: newVoiceState.member.user.displayAvatarURL(), url: newVoiceState.member.user.displayAvatarURL() },
                '0x009200',
            );

            textChannel.send({ 
                //content:`<@${newVoiceState.member.user.id}> connected to <#${newVoiceState.channel.id}> .`
                embeds: [welcomeEmbed]
            });
        } 

        else if (oldVoiceState.channel && newVoiceState.channel===null) { // The member disconnected from a channel.
            // console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
            const textChannel = newVoiceState.guild.channels.cache.get(config.messageChannel);

            // const welcomeEmbed = new EmbedBuilder()
            // .setColor('0xFF0000')
            // .setAuthor({ name: newVoiceState.member.user.tag, iconURL: newVoiceState.member.user.displayAvatarURL(), url: newVoiceState.member.user.displayAvatarURL() })
            // .setDescription(`<@${oldVoiceState.member.user.id}> disconnected from <#${oldVoiceState.channel.id}> .`)
            // .setTimestamp()
            // .setFooter({ text: 'Today'});//, iconURL: member.user.defaultAvatarURL });

            welcomeEmbed = embeds(
                { name: '~ 滾開拉!!!!', value: `<@${oldVoiceState.member.user.id}>`, inline: true },
                { name: '~ 事件', value: `離開了語音頻道 <#${oldVoiceState.channel.id}> .`, inline: true },
                { name: newVoiceState.member.user.tag, iconURL: newVoiceState.member.user.displayAvatarURL(), url: newVoiceState.member.user.displayAvatarURL() },
                '0xFF0000',
            );

            textChannel.send({ 
                //content:`<@${oldVoiceState.member.user.id}> disconnected from <#${oldVoiceState.channel.id}> .`
                embeds: [welcomeEmbed]
            });
        };
    }
}