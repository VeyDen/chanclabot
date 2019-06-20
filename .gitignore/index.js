const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NTkxMDc0NzYyNjQyNjg1OTcy.XQt9bg.kMdctI_9she8yEHeIdoJUwotlLY';

client.on('ready', ()  =>{
    client.user.setGame("c!help", "pour voir les commandes")
    console.log('This bot is ready') ;
})

client.login(process.env.TOKEN);
