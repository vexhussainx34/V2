const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["°অনুভূতি প্রকাশ করতে নেই মানুষ নাটক মনে করে মজা নেয়°..! 😥💔🥀",
        " কিছু মানুষ স্বল্প সময়ের জন্য আমাদের জীবনে আসে।কিন্তু দীর্ঘ সময় স্মৃতি রেখে যায়..!🙂💔",
        "𝙴𝙸 𝙿𝙰𝙶𝙾𝙻 𝙴𝚃𝙾 𝙳𝙰𝙺𝙾𝚂 𝙺𝙴𝙽?",
        " 𝙼𝚈𝙱 𝙸 𝙹𝚄𝚂𝚃 𝚆𝙰𝙽𝙽𝙰 𝙱𝙴 𝚈𝙾𝚄𝚁𝚂 ? 😌💝",
        " 𝙸 𝚂𝙰𝚈 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙵𝙾𝚁𝙴𝚅𝙴𝚁💝🐼",
        "𝙲𝙰𝙻𝙻 𝙼𝙴 𝙲𝙷𝙾𝙲𝙾𝙻𝙰𝚃𝙴 𝙽𝙾𝚃 𝙱𝙾𝚃 😢",
        " 𝚈𝚄𝙼𝙼𝚈 𝙱𝙱𝚈 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚂𝙾 𝚂𝚆𝙴𝙴𝚃😋🤤",
        "𝙰𝚌𝙲𝙲𝙰𝙷 𝙱𝙾𝙻𝙾 𝙰𝙼𝙺𝙴 𝙻𝙰𝙶𝙱𝙴 𝙽𝙰𝙺𝙸 𝚁𝚄𝚂𝚂𝙸𝙰𝙽 ?",
        "তোর সাথে কথা নাই কারণ তুই অনেক লুচ্চা",
        " এইখানে লুচ্চামি করলে লাথি দিবো কিন্তু",
        "আমাকে চুমু দিবি 🫢🦋",
        "হেহে বাবু আমার কাছে আসো 😘💋",
        "আমি তোমাকে অনেক ভালোবাসি বাবু🥺💖",
        "your chocolate বট এর help list dekhte type koron *help",
        "কিরে বলদ তুই এইখানে 🙂",
        " আমাকেq চিনো না জানু? মনু",
        "hey bbe I'm your personal Based chatbot you ask me anything",
        "AR asbo na tor kache",
        "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
        "Hop beda dakos kn🥲",
        "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱",
        " ওই মামী আর ডাকিস না প্লিজ🥲",
        " হ্যা বলো, শুনছি আমি",
        "বলো কি করতে পারি তোমার জন্য😌 ",
        "𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌 ",
        " I love you tuna🥺🥶",
        "Tuma dew xanu😍😘 ",
        " এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈",
        " দেখা হলে কাঠগোলাপ দিও..🤗",
        "𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺 ",
        "•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺 ",
        "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 ",
        "Single taka ki oporad🥺 ",
        " Premer mora jole duve na😛",
        "Ufff matha gorom kore disos😒 ",
        "Boss hussain er chipay😜 ",
        "bashi dakle boss hussain ke bole dimu😒 ",
        "Xhipay atke gaci jan🥲 ",
        "Washroom a🤣 ",
        "bado maser kawwa police amar sawwa😞 ",
        "I am single plz distrab me🥺🥲 ",
        "𝗮𝗺𝗶 𝗯𝗼𝘁 𝗻𝗮 𝗮𝗺𝗮𝗸𝗲 𝗯𝗯𝘆 𝗯𝗼𝗹𝗼 𝗯𝗯𝘆!!😘 ",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲 ",
        "𝗛𝗶𝗶 𝗶 𝗮𝗺 𝗯𝗼𝘁 𝗰𝗮𝗻 𝗶 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂!🤖 ",
        "𝗲𝘁𝗼 𝗯𝗯𝘆 𝗯𝗯𝘆 𝗻𝗮 𝗸𝗼𝗿𝗲 𝘁𝗮𝗸𝗮 𝗼 𝘁𝗼 𝗽𝗮𝘁𝗵𝗮𝘁𝗲 𝗽𝗮𝗿𝗼😒🥳🥳 ",
        "𝘁𝗼𝗿𝗲 𝗺𝗮𝗿𝗮𝗿 𝗽𝗿𝗲𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗻𝗶𝗰𝗵𝗶...!!.🫡 ",
        "𝘂𝗺𝗺𝗮𝗵 𝗱𝗶𝗹𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗸𝗼𝗺𝘂 𝗸𝗶𝗻𝘁𝘂😑 ",
        " আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
        " Bal falaw😩",
        "Tapraiya dat falai demu🥴 ",
        "He🤤bolo amar jan kmn aso🤭 ",
        "Hmmm jan ummmmmmah🫣 ",
        "Chup kor nunu kete demu bashi dakle😬 ",
        "Yes sir/mem😍 ",
        "Assalamualikum☺️💖 ",
        "Walaikumsalam😫🤓 ",
        "Chaiya takos kn ki kobi kooo☹️ ",
        "Onek boro beyadop re tui😒 ",
        "Amar shate kew sex opps tex kore na😫 ",
        "অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস HUSSAIN কে-🐸😾🔪 ",
        "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏 ",
        "-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস HUSSAIN ধরতে পারছে না-🐸🥲 ",
        " তোর কি চোখে পড়ে না আমি ব্যাস্ত 😒💌",
        "বলো কি বলবা, চিপায় যাইয়া বলবা নাকি সবার সামনে বলবা ?🤭"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "sawwar bot") || (event.body.toLowerCase() == "hedar bot") || (event.body.toLowerCase() == "bot cudi")) {
     return api.sendMessage("Tar nanir khali ghor mc....🍻😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Are you pragnent?😑🦆💨", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺🫶🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix diya use kor bolda😑", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, aisob na kore boss hussain re pota🫣🖤🍒", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Katmu tor bc??👀💣 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Lol tumar putki diye dukiye divo😾🥂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Kurumi bby is here Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Hussain") || (event.body.toLowerCase() == "oi hussain") || (event.body.toLowerCase() == "Hussain") || (event.body.toLowerCase() == "hussain vai")) {
     return api.sendMessage( "Busy hoyto kaj takle inbox a jaw😚🍻🍒",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀🍻𝐎𝐖𝐍𝐄𝐑:- ☞𝗠𝗥_𝗛𝗨𝗦𝗦𝗔𝗜𝗡☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 H4SSA1N🖤\n😉🥂𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝👀💣:- ☞ https://www.facebook.com/profile.php?id=100071009500533\n👋For Any Kind Of Help Contact On Telegram  Username 👉 @heda demu😉🦆", threadID);
   };

   if ((event.body.toLowerCase() == "tore banaise ke") || (event.body.toLowerCase() == "tumare banaise ke")) {
     return api.sendMessage("💝🥀🍻𝐎𝐖𝐍𝐄𝐑:- ☞𝗠𝗥_𝗛𝗨𝗦𝗦𝗔𝗜𝗡☜ 💫", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot er admin ke")) {
     return api.sendMessage("💝🥀🍻𝐎𝐖𝐍𝐄𝐑:- ☞𝗠𝗥_𝗛𝗨𝗦𝗦𝗔𝗜𝗡☜ 💫. He Gives his name H4SSA1N everywhare👀🫶💣", threadID);
   };

   if ((event.body.toLowerCase() == "biye korbi") || (event.body.toLowerCase() == "amare biye korbi")) {
     return api.sendMessage("Ghu kaiya mor halar put😾🍻", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup tak") || (event.body.toLowerCase() == "chup korbi")) {
     return api.sendMessage("Ehh aise amar boss sara karo khota suni na ami😚🍒😉", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Amar jana nai oitar bisoye tai ami lover k na hetars o na😚🍻", threadID);
   };

   if ((event.body.toLowerCase() == "hussain er shate beimani") || (event.body.toLowerCase() == "hussain re mitta kos") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("Sorry boss rag koiro na gf demu😘🥺", threadID);
   };

   if ((event.body.toLowerCase() == " bot asos") || (event.body.toLowerCase() == "bby") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Hmmmm bby ummmmmmah😘💣🖤 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "ummah de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Tmi me hole tumar tawway ummmah😾🦆", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thanks hussain")) {
     return api.sendMessage("you are most welcome from my owner😚🖤🥂.", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage(" Ummmmmmah santi hoye jaw🥺😚😚", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kot kaisos?! kandos kn??😒🐸", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm hmm na kore hussain re msg de single ase jitbi🦆💨🫢", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭")) {
     return api.sendMessage("kaindo na bby buk hadi jay😭🐸", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("️Koto bar bolci bow er shate jogra koris na hoice to ekon🥹🍓🤣", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Hey..😚 i am ☆ ᴋᴜʀᴜᴍɪ ᴀɪᥫᥫ᭡🍬🌷.", threadID);
   };

   if ((event.body.toLowerCase() == "bot er bacca") || (event.body.toLowerCase() == "bot er bacca")) {
     return api.sendMessage("️Amar bacca tumar pet a😘🍻.", threadID);
   };

   if ((event.body.toLowerCase() == "pic de") || (event.body.toLowerCase() == "photo dew")) {
     return api.sendMessage("️Kiser pic😒🍒", threadID);
   };

   if ((event.body.toLowerCase() == "Allah") || (event.body.toLowerCase() == "allah") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️Duniya te rong tamasay lipto hoye Allah ke bule jaba na☺️🖤🫶", threadID);
   };

   if ((event.body.toLowerCase() == "bot banai dew") || (event.body.toLowerCase() == "amar o lagbe")) {
     return api.sendMessage("️Nije banai ne😾", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("️Abar senti kaile tui madartost😚", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Kiree bow nake kamor bosai dise naki😒", threadID);
   };

  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kot kawar cinta babna koros?🫠", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye pudina🤤", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️lip ki tor batar kaiya nise?🥺🦆💨", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("️Kiree obak hos kn ex re deksos??🤐", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("️️Ai dike oi dike na takaiya kache aso🤭🤤🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "kew valobashe na")) {
     return api.sendMessage("️Ami asi na bepi😚😇", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Kopal a hat kn tada porce??😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("Hasle tore churer moto lage🥲", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kemon aso") || (event.body.toLowerCase() == "kmn aso") || (event.body.toLowerCase() == "kmn asen") || (event.body.toLowerCase() == "kmn aso bot") || (event.body.toLowerCase() == "how are you")) {
     return api.sendMessage("Alhamdulillah apni😊🍓❤️‍🩹", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 lobatao)u <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Hey bepi i am ☆ ᴋᴜʀᴜᴍɪ ᴀɪᥫᥫ᭡🍬🌷", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "fuck") || (event.body.toLowerCase() == "Fuck")) {
     return api.sendMessage("Fuck you tooo bepi🥺🖕😊", threadID);
   };

  if ((event.body.toLowerCase() == "ami hussain") || (event.body.toLowerCase() == "ami sumu") || (event.body.toLowerCase() == "ami esha") || (event.body.toLowerCase() == "tor boss ami") || (event.body.toLowerCase() == "ami tore banaisi")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
