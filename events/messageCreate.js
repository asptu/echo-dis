let client = require('../index')

module.exports = {
    name: 'messageCreate',
    once: false,
    execute (message) {

       const fs =  require('fs')

       let cChannel = fs.readFileSync('./data/cChannel.txt','utf8')
       let pChannel = fs.readFileSync('./data/pChannel.txt','utf8')
    
      console.log(message.channel.id)
      console.log(cChannel)

    if (message.author.bot) return
        if (cChannel == undefined || null) return
            if (message.channel.id == cChannel) {
                console.log('Current channel')

                let polling = client.channels.cache.get(pChannel) 



         }



    
    }

}
