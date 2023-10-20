const { ActivityType } = require('discord.js');
const config = require('../../token.json');


module.exports = {
    name: 'ready',
    // once: true,
    async execute(client) {

        client.currentStatus = async() =>{

            let currentDate = new Date();
            let offset = currentDate.getTimezoneOffset() / 60

            currentDate.setHours(currentDate.getHours() + (offset + 8))
            let guild = await client.guilds.cache.get(config.guildId)
            let onlineCount = await guild.members.cache.filter((member) => member.presence?.status == "online" && !member.user.bot).size;
            let minutes = currentDate.getMinutes()

            if (minutes < 10 ){
                minutes = '0' + minutes;
            } 
            

            const options = [
                {
                    type: ActivityType.Playing,
                    text: `Member count：${guild.memberCount}`,
                    status: 'online',
                },
                {
                    type: ActivityType.Listening,
                    text: '等待命令',
                    status: 'idle',
                },
                {
                    type: ActivityType.Watching,
                    text: `Online：${onlineCount}`,
                    status: 'online',
                },
                {
                    type: ActivityType.Watching,
                    text: `Date：${currentDate.getFullYear()}/${currentDate.getMonth()+1}/${currentDate.getDate()}`,
                    status: 'online',
                },
                {
                    type: null,
                    text: `Time：${currentDate.getHours()}:${minutes}`,
                    status: 'online',
                },

            ]
            

            const option = Math.floor(Math.random() * options.length);

            client.user.setPresence({
                activities: [{ 
                    name: options[option].text, 
                    type: options[option].type, 
                }],
                status: options[option].status,
            });
        }

        setInterval(client.currentStatus, 5 * 1000);

    }
};
