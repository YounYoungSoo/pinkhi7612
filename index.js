const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '$사용법 을 입력해보세요' }, status: 'online' })
});

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
    message.reply('수학  ₩/n  영어  ₩/n  과학(손형래)  ₩/n  음악  ₩/n  국어(박숙)  ₩/n  사회');
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

client.on('message', (message) => {
  if(message.content === '$클래스룸') {
    message.reply('https://classroom.google.com/u/0/h');
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});


client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content.startsWith('$전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('$전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}
client.login(token);