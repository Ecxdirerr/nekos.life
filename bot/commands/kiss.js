/**
 * Created by Tom on 7/29/2017.
 */
exports.run = async (bot, message,args) => {
    if (args < 1) return message.reply(" :x: O.o you wanna kiss yourself??");
    let stats = await bot.getStats();
    stats.lewd++;
    bot.saveStats(stats);
    await bot.snekfetch.get('https://nekos.life/api/kiss')
        .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
        .then(r => message.channel.send(`${args} You got a kiss from ${message.author.username} :heart:`,{
            embed: {
                color: bot.getRandomColor(),
                image: {
                    url: r.body.url
                }
            }
        }).catch(e => console.warn('wew tf happened here ' + e)));

};