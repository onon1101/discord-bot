const config = require('../../token.json');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',

    execute(member){
        const { user, guild } = member;
        // member.guild.channels.cache.get('1053944187533406208').send({ content:'test' });
        const welcomeChannel = member.guild.channels.cache.get(config.welcomeChannel);//config.Channel );
        
        const welcomemessage = `讓我們歡迎新成員 - @${member.user.username} 喵喵!!`;


        const welcomeEmbed = new EmbedBuilder()
            .setColor(getRandomColor())
            .setTitle(`新成員 - ${member.user.username}`)
            //.setURL('https://discord.js.org/')
            .setAuthor({ name: 'New Member ! '})
            // .setDescription( '你永遠是我的寶 ' )
            .setThumbnail(member.user.displayAvatarURL())
            // .addFields({ name: '\u200B', value: '\u200B' })
            .addFields({ name: 'Server name', value: member.guild.name, inline:true })
            // //     { name: 'Inline field title', value: 'Some value here', inline: true },
            // //     { name: 'Inline field title', value: 'Some value here', inline: true },
            .addFields({ name: 'Server Members', value: String(member.guild.memberCount), inline:true })
            // .setImage( member.user.displayAvatarURL() )
            // .addFields({ name: '\n',value: '\n'})
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Today', iconURL: member.user.defaultAvatarURL });

        
        welcomeChannel.send({ embeds: [welcomeEmbed] });
    }
};