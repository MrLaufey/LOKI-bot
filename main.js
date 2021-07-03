const Discord = require('discord.js');
const client = new Discord.Client();





client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	console.log(message.content);
});


client.on('message', message => {
	if (message.content === 'loki?') {
		
		message.channel.send('I am Loki, of Asgard, and I am burdened with glorious purpose.');
	}else if (message.content === 'what is love?') {
		message.channel.send('Love is a dagger, It s a weapon to be wielded far away or up close. You can see yourself in it. Its beautiful until it makes you bleed, But ultimately, when you reach for it...');
	}else if (message.content === 'server?') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
});



client.login('ODYwNDY0NjQ3ODg2OTk1NDU2.YN7oJg.vKFG5-s-r0chJ6rJxsMmGR3FKs8');