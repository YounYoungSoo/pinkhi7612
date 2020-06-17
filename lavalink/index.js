const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const config =require('./database/config.json');
const {Manager} = require('@lavacord/discord.js');
const nodes ={
  id: '1',
  host: 'localhost',
  port: 2333,
  password: "pw"
};
const mainPlayer = new Manager(bot, nodes);

mainPlayer.on('error', err=> {
  console.error(err);
});

bot.on('ready', async () => {
  await mainPlayer.connect();
  console.log("Ready!");
});

const queue = new Map();

const fetch = require('node-fetch');
const {URLSearchParams} = require('url');

const getSongs = async (search) => {
  const node = mainPlayer.idealNodes[0];

  const params = new URLSearchParams();
  params.append("identifier", search);

  return fetch(`http://${node.host}:${node.port}/loadtracks?${params}`, {headers: {Authorization: node.password}})
      .then(res => res.json())
      .then(data => data.tracks)
      .catch(err => {
          console.error(err);
          return null;
      });
};

const fmt = (str) => {
  return `**:books:  ${str}**`;
}

const command = {
  help: async (msg, args) => {
      msg.channel.send(fmt("Please visit our discord server for assistance! https://discord.gg/NnTrXjZ"));
  }
}

bot.on('message', async msg => {
  if(msg.author.bot) return;

  if(!msg.guild) return;

  const msgArray = msg.content.split(" ");
  const prefix = ">";
  
  if(!msgArray[0].startsWith(prefix)) return;

  const cmd = msgArray[0].substring(prefix.length);
  const args = msgArray.shift();

  if(!command.hasOwnProperty(cmd)) return msg.channel.send(fmt("No command associated with input."));

  command[cmd](msg, args);
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