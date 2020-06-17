const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$4반월') {
    message.reply('중국어   과학(김태임)   사회   영어   역사   기술   체육');
  }
});

client.on('message', (message) => {
    if(message.content === '$4반화') {
      message.reply('가정   수학   국어(박숙)   과학(김태임)   체육   중국어   영어');
    }
});

client.on('message', (message) => {
  if(message.content === '$4반수') {
    message.reply('수학   영어   과학(손형래)   음악   국어(박숙)   사회');
  }
});

client.on('message', (message) => {
    if(message.content === '$4반목') {
      message.reply('가정   과학(손형래)   수학   역사   미술   영어');
    }
});

client.on('message', (message) => {
    if(message.content === '$4반금') {
      message.reply('수학   국어(이은영)   체육   국어(박숙)   스포츠   창체   창체');
    }
});

client.on('message', (message) => {
    if(message.content === '$재현이') {
      message.reply('https://ifh.cc/g/AwQpeS.jpg');
    }
});

client.on('message', (message) => {
    if(message.content === '$아이잉') {
      message.reply('https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866');
    }
});

client.on('message', (message) => {
    if(message.content === '$사용법') {
      message.reply('https://ifh.cc/g/jjrIAs.png');
    }
});
  
client.on('message', (message) => {
    if(message.content === '$아이잉') {
      message.reply('https://tenor.com/view/jihyo-gif-8279711');
    }
});

client.on('message', (message) => {
    if(message.content === '$재현이') {
      message.reply('https://ifh.cc/g/gyX2aY.jpg');
    }
});

client.on('message', (message) => {
  if(message.content === '$심심하다') {
    message.reply('https://www.youtube.com/channel/UCTgdj1HMrJCYbEp0wSDS32A?view_as=subscriber');
  }
});

client.on('message', (message) => {
  if(message.content === '$하이드로펌프') {
    message.reply('https://ifh.cc/g/B6iDbB.png');
  }
});
client.login(token);