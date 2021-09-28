
export interface Tool {
    title: string;
    description: string;
    url: string;
    backgroundColor: string;
    sideColor: string;
  }
  
export const toolArray: Tool[] = [
    {
      title: 'HTML',
      description: 'Expert at DOM manipulation through both native javascript and React',
      url: 'https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/html-white.png?alt=media&token=7c8f9e89-bcbc-4ee6-b1c3-2dcb7b744ebe',
      backgroundColor: '#119FFA',
      sideColor: '#B54E62'
    },
    {
      title: 'React',
      description: 'Proficient in the production of web apps using the language React',
      url: 'https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/react-white.png?alt=media&token=d395d16d-7bed-4da6-8e1e-a81cb794f06d',
      backgroundColor: '#5B5658',
      sideColor: '#3AADBE'
    },
    {
      title: 'TypeScript',
      description: 'Learned the foundations of typescript. Class based object oriented javascript programming',
      url: 'https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/typescript.png?alt=media&token=36a74ac8-d284-4fd0-a470-65d320b3b853',
      backgroundColor: '#ffb703',
      sideColor: '#3C4084'
    }
  ]