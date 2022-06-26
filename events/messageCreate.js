let client = require('../index')

module.exports = {
    name: 'messageCreate',
    once: false,
    execute (message) {

       const fs =  require('fs')

       let cChannel = fs.readFileSync('./data/cChannel.txt','utf8')
       let pChannel = fs.readFileSync('./data/pChannel.txt','utf8')
    

    if (message.author.bot) return
        if (cChannel == undefined || null) return
            if (message.channel.id == cChannel) {

                let polling = client.channels.cache.get(pChannel) 

                if (message.content == undefined || null) return
                    polling.send(message.content)

         }
    
    }

}
