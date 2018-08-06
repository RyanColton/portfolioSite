import Canje from '../canjeco.png'
import ET from '../e=t.png'

export const listings = [
  {
    title: 'Employed Equals True',
    text: 'A developer focused job site build to aid developers find the right job based on their skill set.',
    image: {
      position: 'right',
      src: ET,
    },
    links: [
      {
        link: 'https://github.com/TeamDevFinder/dev-finder',
        name: 'github',
      },
      {
        link: 'http://employedequalstrue.com',
        name: 'home',
      },
    ],
  },
  {
    title: 'Canje',
    text: 'Born from a desire to have a place to trade duplicate wedding gifts, canje.co is a bartering marketplace where you can connect with others to trade the items you no longer want or need.',
    image: {
      position: 'left',
      src: Canje,
    },
    links: [
      {
        link: 'https://github.com/RyanColton/canjeApp',
        name: 'github',
      },
      {
        link: 'http://canje.co',
        name: 'home',
      },
    ],
  }
]
