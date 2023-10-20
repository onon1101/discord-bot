const { execute } = require("./interactionVoiceChannels");

module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldVoiceState, newVoiceState){
        if (!oldVoiceState) return;
        
        const Category_channel = await oldVoiceState.guild.channels.cache.find(channel => channel.name.toLowerCase() === `bot's home`)
        const Voice_channel = await oldVoiceState.guild.channels.cache.find(channel => channel.name.toLowerCase() === `voicechannel`)
        if(!Category_channel) return;
        if(!Voice_channel) return;

        // console.log(typeof Voice_channel.members.size);

        if (Voice_channel.members.size === 0){
            oldVoiceState.guild.channels.delete(Category_channel.id,'delete Category channel')
                .then(console.log)
                .catch(console.error);

            oldVoiceState.guild.channels.delete(Voice_channel.id,'delete Voice channel')
                .then(console.log)
                .catch(console.error);

            
        }
        // console.log(voiceChannels);
    }
};
