const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '1:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '2:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '3:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '4:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '5:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '6:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '7:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '8:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '9:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '10:00 AM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '11:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '12:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '1:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '2:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '3:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '4:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '5:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '6:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '7:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '8:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '9:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '10:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' },
    { time: '11:00 PM', message: '──── •🖤🍻• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐒𝐀𝐑𝐕𝐄𝐑🌷🌊 ──── •🤍• ────' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour00, minute: parseInt(minute, 00) }, 'Asia/Dhak').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
