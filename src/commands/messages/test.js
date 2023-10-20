const config = require('../../token.json');
const { SlashCommandBuilder, EmbedBuilder, InteractionCollector } = require('discord.js')

// var getRandomColor = function(){    
//     return  '0x' + (function(color){    
//          return (color +=  '0123456789ABCDEF'[Math.floor(Math.random()*16)])    
//          && (color.length == 6) ?  color : arguments.callee(color);    
//     })('');    
// } 


module.exports = {
    data: new SlashCommandBuilder()
    .setName('welcome')
	.setDescription('welcomeMessage'),

    async execute(interaction){
        const guild = await interaction.client.guilds.cache.get('1035479237819367514')

        console.log(guild.memberCount)
    },
};
