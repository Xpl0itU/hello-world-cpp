const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log("Starting Jax\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);


});

client.on('message', message => {
  if (message.content === 'j.help') {
    message.reply('help text');
  }
});

client.on('message', message => {
    if (message.content === 'j.info') {
        message.reply('This shit uh I mean bot it is made by Xpl0it_U and RageousGD,if you want you can check ur YouTube Channels:');
    }
});

client.on('message', message => {
    if (message.content === 'j.info') {
        message.reply('https://www.youtube.com/channel/UC2dq8ZQANR6HoFms5MgU_7Q?view_as=subscriber');
    }
});

client.on('message', message => {
    if (message.content === 'j.info') {
        message.reply('https://www.youtube.com/channel/UCrpRalQ_3KOQosIGrw0EHpQ');
    }
});

client.on('message', message => {
  if (message.content === 'j.ping') {
      message.reply('https://tse4.mm.bing.net/th?id=OIP.Ab8MAxDixluJFcjOUMx48gEsDI&pid=15.1');
  }
});

client.login('MzU0Njk0Mjc3OTc0MTk2MjI1.DJCARQ.HZWEsSwNh8l-oin4t7gzCcZQFwY');
