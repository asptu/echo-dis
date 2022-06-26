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

                try {
                    if (message.attachments.size > 0) {
                        message.attachments.forEach(attachment => {
                            const ImageLink = attachment.proxyURL;
                            polling.send(`${ImageLink}`)
                        });
                    }
                    if (message.content == '' || undefined) return

                        polling.send(message.content)   

                  } catch (err) {
                  console.log(err)
                    message.channel.send('errored')
                  
                  }

         }
    
    }

}
