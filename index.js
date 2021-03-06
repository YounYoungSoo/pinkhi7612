const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";    

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '$도움말 을 입력해보세요' }, status: 'online' })
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
  if(message.content === '$재현이') {
    message.reply('https://ifh.cc/g/gyX2aY.jpg');
  }
});

client.on('message', (message) => {
  if(message.content === '$재현이') {
    message.reply('https://ifh.cc/g/AwQpeS.jpg');
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

client.on('message', (message) => {
  if(message.content === '$아이잉') {
    message.reply('https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866');
  }
});

client.on('message', (message) => {
  if(message.content === '$아이잉') {
    message.reply('https://tenor.com/view/jihyo-gif-8279711');
  }
});

client.on('message', (message) => {
  if(message.content === '$부분일식') {
    message.reply('대충 못찍었다는 댓글');
  }
});

client.on('message', (message) => {
  if(message.content === '$재훈이') {
    message.reply('https://ifh.cc/g/qJIJrw.jpg');
  }
});

client.on('message', (message) => {
  if(message.content === '$diehd사이트') {
    message.reply('https://www.youtube.com/watch?v=4UUYdpEzNs8');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('fuck');
  }

  if(message.content == '$도움말') {
    let img = 'https://ifh.cc/g/WG5any.png';
    let embed = new Discord.RichEmbed()
      .setTitle('봇 명령어 도움말')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('$반요일', '예)4반월  --각 반의 시간표를 알려줌-- ')
      .addField('$급식요일', '--예)급식월 --학교 급식 식단표를 알려줌--')
      .addField('$재현이', '--재현이의 움짤을 틀어줌--')
      .addField('$클래스룸', '--클래스룸 링크를 열어줌--')
      .addField('$아이잉', '--간단한 애교 움짤을 틀어줌--')
      .addField('$하이드로펌프', '--설사지린 재현이를 틀어줌--')
      .addField('$재훈이', '--재현이 형 사진 틀어줌--')
      .addField('$업데이트', '--업데이트 현황을 보여줌--')
      .addField('$공지', '--제일중 정보봇에 관한 공지를 보여줌--')
      .addField('$diehd사이트', '--ㅗㅜㅑ한걸 보여줌--')
      .addField('$학교장인사말', '--교장선생님의 인사말을 보여줌--')
      .addField('$학교상징', '--학교의 상징들을 보여줌--')

      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  } 

  if(message.content == '$업데이트') {
    let img = 'https://ifh.cc/g/vGnMpu.png';
    let embed = new Discord.RichEmbed()
      .setTitle('업데이트 현황')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('업데이트 현황', '1반 시간표 추가\n1~6반 시간표 추가\n급식 기능 추가\n')
      .addField('업데이트 예정', '추가 업데이트 예정 없음\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$학교장인사말') {
    let img = 'https://ifh.cc/g/aMrOFm.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('학교장 인사말')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('화순제일중학교장 이종택', '우리 화순제일중학교는\n학생들의 저마다의 꿈을 소중하게 생각하고 그 꿈을 키울 수 있도록\n다양한 진로탐색을 위한 진로교육,\n사고의 폭과 깊이를 더해주는 독서교육,\n항상 남을 향한 배려와 봉사, 나눔을 실천할 수 있는 인성교육 등\n다양하고 특색있는 교육활동을 펼치고 있습니다.\n\n\n이러한 교육활동이 활발하게 펼쳐질 수 있도록 \n본교 홈페이지가 교사, 학생, 학부모, 지역 사회 여러분들의 \n만남, 나눔의 장이 되기를 기원합니다.\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$학교상징') {
    let img = 'https://ifh.cc/g/aMrOFm.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('학교상징')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('교훈', '근면, 성실, 창의\nhttps://ifh.cc/g/zhJT2m.jpg')
      .addField('교화', '들국화(순수, 희망)\nhttps://ifh.cc/g/5xdZXT.jpg')
      .addField('교색', '노랑(평화, 안정)\nhttps://ifh.cc/g/3cFQ5V.jpg')
      .addField('교기', '이미지\nhttps://ifh.cc/g/6l5vPZ.jpg')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$공지') {
    let img = 'https://ifh.cc/g/3cbifG.png';
    let embed = new Discord.RichEmbed()
      .setTitle('공지')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('피드백', '추가해주었으면 하는 부분이 있으면 디코 채팅방에서 말해주십시오. 적극적으로 반영하겠습니다.')
      .addField('랏되 봇 메이커 홈페이지 개설', '랏되 봇 메이커는 여러분의 성원에 힘입어 랏되 봇 메이커 홈페이지를 개설하였습니다. 앞으로 더 좋은 활동을 보여줄 것이며 많이많이 사용해 주시기 바랍니다.\nhttps://lattee.modoo.at')
      .addField('1~6반 시간표 추가', '$반요일 예)1반월 각 반의 시간표를 확인해 볼 수 있습니다')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$급식월') {
    let img = 'https://ifh.cc/g/cJkBHJ.png';
    let embed = new Discord.RichEmbed()
      .setTitle('월요일 식단표')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('월요일 식단표', '현미찹쌀밥\n쇠고기떡국\n꽁치캔김치조림\n마늘햄구이\n오이소박이\n둥근호박볶음\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$급식화') {
    let img = 'https://ifh.cc/g/cJkBHJ.png';
    let embed = new Discord.RichEmbed()
      .setTitle('화요일 식단표')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('화요일 식단표', '검정쌀밥\n수제돈가스/소스\n배추김치\n메밀소바\n카레어묵볶음\n야채샐러드/유자소스\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$급식수') {
    let img = 'https://ifh.cc/g/cJkBHJ.png';
    let embed = new Discord.RichEmbed()
      .setTitle('수요일 식단표')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('수요일 식단표', '자장밥\n떡갈비또띠아\n깍두기\n수제레몬에이드\n참나물초무침\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$급식목') {
    let img = 'https://ifh.cc/g/cJkBHJ.png';
    let embed = new Discord.RichEmbed()
      .setTitle('목요일 식단표')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('목요일 식단표', '삼겹살야채구이\n잡곡밥\n근대된장국\n생야채쌈\n배추김치\n비빔냉면\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  if(message.content == '$급식금') {
    let img = 'https://ifh.cc/g/cJkBHJ.png';
    let embed = new Discord.RichEmbed()
      .setTitle('금요일 식단표')
      .setURL('http://www.naver.com')
      .setAuthor('제일중 정보봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('금요일 식단표', '보리밥\n오리탕\n파닭\n메추리알햄떡조림\n배추김치\n고구마줄기볶음\n멜론\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제일중 정보봇', img)

    message.channel.send(embed)

    
  }

  else if(message.content == '$4반월') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
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
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반화') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
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
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반수') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '과학(손형래)'},
      {name: '2교시', desc: '영어'},
      {name: '3교시', desc: '수학'},
      {name: '4교시', desc: '음악'},
      {name: '5교시', desc: '국어(이은영)'},
      {name: '6교시', desc: '사회'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반목') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
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
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$4반금') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
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
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$2반월') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '과학(김태임)'},
      {name: '2교시', desc: '영어'},
      {name: '3교시', desc: '기술'},
      {name: '4교시', desc: '체육'},
      {name: '5교시', desc: '수학'},
      {name: '6교시', desc: '국어(이은영)'},
      {name: '7교시', desc: '사회'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('2반 월', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$2반화') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '중국어'},
      {name: '2교시', desc: '과학(손형래)'},
      {name: '3교시', desc: '영어'},
      {name: '4교시', desc: '수학'},
      {name: '5교시', desc: '국어(박숙)'},
      {name: '6교시', desc: '체육'},
      {name: '7교시', desc: '가정'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('2반 화', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$2반수') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '음악'},
      {name: '2교시', desc: '수학'},
      {name: '3교시', desc: '국어(이은영)'},
      {name: '4교시', desc: '역사'},
      {name: '5교시', desc: '영어'},
      {name: '6교시', desc: '중국어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('2반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$2반목') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '과학(손형래)'},
      {name: '2교시', desc: '체육'},
      {name: '3교시', desc: '미술'},
      {name: '4교시', desc: '영어'},
      {name: '5교시', desc: '사회'},
      {name: '6교시', desc: '스포츠'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('2반 목', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$2반금') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '국어(박숙)'},
      {name: '2교시', desc: '가정(선예슬)'},
      {name: '3교시', desc: '수학'},
      {name: '4교시', desc: '과학(김태임)'},
      {name: '5교시', desc: '역사'},
      {name: '6교시', desc: '창체'},
      {name: '7교시', desc: '창체'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('2반 금', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$3반월') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '과학(손형래)'},
      {name: '2교시', desc: '수학'},
      {name: '3교시', desc: '국어(이은영)'},
      {name: '4교시', desc: '영어'},
      {name: '5교시', desc: '체육'},
      {name: '6교시', desc: '음악'},
      {name: '7교시', desc: '중국어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('3반 월', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$3반화') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '수학'},
      {name: '2교시', desc: '미술'},
      {name: '3교시', desc: '체육'},
      {name: '4교시', desc: '역사'},
      {name: '5교시', desc: '사회'},
      {name: '6교시', desc: '과학(김태임)'},
      {name: '7교시', desc: '영어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('3반 화', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$3반수') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '사회'},
      {name: '2교시', desc: '중국어'},
      {name: '3교시', desc: '가정'},
      {name: '4교시', desc: '과학(손형래)'},
      {name: '5교시', desc: '체육'},
      {name: '6교시', desc: '수학'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('3반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$3반목') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '수학'},
      {name: '2교시', desc: '기술'},
      {name: '3교시', desc: '국어(박숙)'},
      {name: '4교시', desc: '과학(김태임)'},
      {name: '5교시', desc: '영어'},
      {name: '6교시', desc: '스포츠'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('3반 목', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$3반금') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '국어(이은영)'},
      {name: '2교시', desc: '국어(박숙)'},
      {name: '3교시', desc: '영어'},
      {name: '4교시', desc: '역사'},
      {name: '5교시', desc: '가정'},
      {name: '6교시', desc: '창체'},
      {name: '7교시', desc: '창체'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('3반 금', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$5반월') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '음악'},
      {name: '2교시', desc: '체육'},
      {name: '3교시', desc: '과학(손형래)'},
      {name: '4교시', desc: '국어(이은영)'},
      {name: '5교시', desc: '영어'},
      {name: '6교시', desc: '가정'},
      {name: '7교시', desc: '수학'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('5반 월', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$5반화') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '영어'},
      {name: '2교시', desc: '가정'},
      {name: '3교시', desc: '사회'},
      {name: '4교시', desc: '수학'},
      {name: '5교시', desc: '미술'},
      {name: '6교시', desc: '과학(손형래)'},
      {name: '7교시', desc: '기술'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('5반 화', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$5반수') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '국어(박숙)'},
      {name: '2교시', desc: '역사'},
      {name: '3교시', desc: '과학(김태임)'},
      {name: '4교시', desc: '체육'},
      {name: '5교시', desc: '사회'},
      {name: '6교시', desc: '수학'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('5반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$5반목') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '역사'},
      {name: '2교시', desc: '국어(박숙)'},
      {name: '3교시', desc: '과학(김태임)'},
      {name: '4교시', desc: '수학'},
      {name: '5교시', desc: '중국어'},
      {name: '6교시', desc: '영어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('5반 목', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$5반금') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '중국어'},
      {name: '2교시', desc: '영어'},
      {name: '3교시', desc: '국어(이은영)'},
      {name: '4교시', desc: '체육'},
      {name: '5교시', desc: '스포츠'},
      {name: '6교시', desc: '창체'},
      {name: '7교시', desc: '창체'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('5반 금', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$6반월') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '국어(이은영)'},
      {name: '2교시', desc: '국어(박숙)'},
      {name: '3교시', desc: '음악'},
      {name: '4교시', desc: '과학(김태임)'},
      {name: '5교시', desc: '영어'},
      {name: '6교시', desc: '수학'},
      {name: '7교시', desc: '역사'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('6반 월', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$6반화') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '영어'},
      {name: '2교시', desc: '역사'},
      {name: '3교시', desc: '중국어'},
      {name: '4교시', desc: '과학(손형래)'},
      {name: '5교시', desc: '수학'},
      {name: '6교시', desc: '가정'},
      {name: '7교시', desc: '사회'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('6반 화', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$6반수') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '가정'},
      {name: '2교시', desc: '체육'},
      {name: '3교시', desc: '국어(박숙)'},
      {name: '4교시', desc: '국어(이은영)'},
      {name: '5교시', desc: '과학(김태임)'},
      {name: '6교시', desc: '기술'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('6반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$6반목') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '미술'},
      {name: '2교시', desc: '수학'},
      {name: '3교시', desc: '사회'},
      {name: '4교시', desc: '체육'},
      {name: '5교시', desc: '과학(손형래)'},
      {name: '6교시', desc: '영어'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('6반 목', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$6반금') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '체육'},
      {name: '2교시', desc: '영어'},
      {name: '3교시', desc: '수학'},
      {name: '4교시', desc: '중국어'},
      {name: '5교시', desc: '스포츠'},
      {name: '6교시', desc: '창체'},
      {name: '7교시', desc: '창체'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('6반 금', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$1반월') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '국어(박숙)'},
      {name: '2교시', desc: '영어'},
      {name: '3교시', desc: '수학'},
      {name: '4교시', desc: '가정'},
      {name: '5교시', desc: '과학(손형래)'},
      {name: '6교시', desc: '사회'},
      {name: '7교시', desc: '국어(이은영)'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('1반 월', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$1반화') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '역사'},
      {name: '2교시', desc: '과학(김태임)'},
      {name: '3교시', desc: '영어'},
      {name: '4교시', desc: '국어(박숙)'},
      {name: '5교시', desc: '중국어'},
      {name: '6교시', desc: '미술'},
      {name: '7교시', desc: '체육'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('1반 화', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$1반수') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '기술'},
      {name: '2교시', desc: '음악'},
      {name: '3교시', desc: '체육'},
      {name: '4교시', desc: '수학'},
      {name: '5교시', desc: '영어'},
      {name: '6교시', desc: '과학(김태임)'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('1반 수', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$1반목') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '체육'},
      {name: '2교시', desc: '가정'},
      {name: '3교시', desc: '중국어'},
      {name: '4교시', desc: '영어'},
      {name: '5교시', desc: '수학'},
      {name: '6교시', desc: '스포츠'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('1반 목', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '$1반금') {
    let helpImg = 'https://ifh.cc/g/IIptUw.png';
    let commandList = [
      {name: '1교시', desc: '역사'},
      {name: '2교시', desc: '과학(손형래)'},
      {name: '3교시', desc: '사회'},
      {name: '4교시', desc: '수학'},
      {name: '5교시', desc: '국어(이은영)'},
      {name: '6교시', desc: '창체'},
      {name: '7교시', desc: '창체'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('1반 금', helpImg)
      .setColor('#186de6')
      .setFooter(`제일중 정보봇`)
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