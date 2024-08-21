import axios from 'axios'

const handler = async (m, { oreo, usedPrefix, command }) => {
  try {
    const response = await axios.get('https://meme-api.com/gimme', {
      responseType: 'json',
    })

    const memeData = response.data
    const imageUrl = memeData.url
    const title = memeData.title

    oreo.sendFile(m.chat, imageUrl, 'meme.jpg', title, m)
    m.react('😆')
  } catch (error) {
    console.error(error)
    m.reply('Sorry, an error occurred while fetching the meme.')
  }
}

handler.help = ['meme']
handler.tags = ['fun']
handler.command = ['meme', 'memes']

export default handler
