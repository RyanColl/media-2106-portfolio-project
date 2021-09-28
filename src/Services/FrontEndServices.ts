import firebaseHandler from '../firebase/firebaseHandler';
const {getTime} = firebaseHandler;

// set backgorund based on time
export const setBackgroundBasedOnServerTime = async () => {
    let time: string = (await getTime()).data
    let index = time.search(':')
    let hour = parseInt(time.substr(0, index))
    console.log(`heres our time: ${time}, our index: ${index}, and our hour: ${hour}`)
    switch(hour % 6) {
      case 0: return 'river'
      case 1: return 'mountains'
      case 2: return 'wolf'
      case 3: return 'adventure1'
      case 4: return 'adventure1'
      case 5: return 'adventure2'
      case 6: return 'snow'
      default: return 'river'
    }
}

export const setBackground = (pageName: string) => {
    switch(pageName) {
      case 'Home': return 'river.jpeg'
      case 'Apps': return 'wolf.png'
      case 'Tools': return 'adventure2.jpeg'
      case 'About': return 'adventure1.jpeg'
      default: return 'river.jpeg'
    }
}