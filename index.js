const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
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

  if(message.content == '$도움말') {
    let img = 'https://ifh.cc/g/4TpxYu.png';
    let embed = new Discord.RichEmbed()
      .setTitle('봇 명령어 도움말')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 시간표봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('$반요일', '예)4반월  --각 반의 시간표를 알려줌-- ')
      .addField('$재현이', '--재현이의 움짤을 틀어줌--')
      .addField('$클래스룸', '--클래스룸 링크를 열어줌--')
      .addField('$아이잉', '--간단한 애교 움짤을 틀어줌--')
      .addField('하이드로펌프', '--설사지린 재현이를 틀어줌--')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 시간표봇', img)

    message.channel.send(embed)
  } else if(message.content == '$4반월') {
    let helpImg = 'https://ifh.cc/g/4TpxYu.png';
    let commandList = [
      {name: '1교시', desc: '중국어'},
      {name: '2교시', desc: '과학(김태임)'},
      {name: '3교시', desc: '사회'},
      {name: '4교시', desc: '영어'},
      {name: '5교시', desc: '역사'},
      {name: '6교시', desc: '기술'},
      {name: '7교시', desc: '체육'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 월', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 시간표 봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반화') {
    let helpImg = 'https://ifh.cc/g/4TpxYu.png';
    let commandList = [
      {name: '1교시', desc: '가정'},
      {name: '2교시', desc: '수학'},
      {name: '3교시', desc: '국어(박숙)'},
      {name: '4교시', desc: '과학(김태임)'},
      {name: '5교시', desc: '체육'},
      {name: '6교시', desc: '중국어'},
      {name: '7교시', desc: '영어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 화', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 시간표 봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반수') {
    let helpImg = 'https://ifh.cc/g/4TpxYu.png';
    let commandList = [
      {name: '1교시', desc: '과학(손형래)'},
      {name: '2교시', desc: '영어'},
      {name: '3교시', desc: '수학'},
      {name: '4교시', desc: '음악'},
      {name: '5교시', desc: '국어(박숙)'},
      {name: '6교시', desc: '사회'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 시간표 봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반목') {
    let helpImg = 'https://ifh.cc/g/4TpxYu.png';
    let commandList = [
      {name: '1교시', desc: '가정'},
      {name: '2교시', desc: '과학(손형래)'},
      {name: '3교시', desc: '수학'},
      {name: '4교시', desc: '역사'},
      {name: '5교시', desc: '미술'},
      {name: '6교시', desc: '영어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 목', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 시간표 봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반금') {
    let helpImg = 'https://ifh.cc/g/4TpxYu.png';
    let commandList = [
      {name: '1교시', desc: '수학'},
      {name: '2교시', desc: '국어(이은영)'},
      {name: '3교시', desc: '체육'},
      {name: '4교시', desc: '국어(박숙)'},
      {name: '5교시', desc: '스포츠'},
      {name: '6교시', desc: '창체'},
      {name: '7교시', desc: '창체'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 금', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 시간표 봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }


  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
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

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);