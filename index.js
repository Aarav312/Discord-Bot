const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzIzNjg2MjcxMTA4Nzc2MDM2.Xu18yg.c5wb7kKTBbP5ZGziau8p6msPcsE';

bot.on('ready' , () =>{
    console.log('This Bot is online!');

})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        message.channel.send('HELLO FRIEND');
    }
            
})

bot.login(token);

