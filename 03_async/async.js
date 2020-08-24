const axios = require('axios')

class Ajax {
  static echo(data) {
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        if (data) {
          resovle(data)
        } else {
          reject(new Error('error'))
        }
      }, 200)
    })
  }

  static async get() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      )
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = Ajax
