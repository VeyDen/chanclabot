const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()  => {
    client.user.setGame("c!help", "pour voir les commandes")
    console.log('This bot is ready') ;
})

client.login(process.env.TOKEN);
