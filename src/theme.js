//  https://uigradients.com/#Celestial
//    #c33764 → #1d2671
//
// https://uigradients.com/#SweetMorning
//
//    #ff5f6d → #ffc371
//
// https://uigradients.com/#Predawn
//
//    #ffa17f → #00223e
//
// https://uigradients.com/#Dawn
//
//    #f3904f → #3b4371
var colors = {
  primary: ['#c33764', '#1d2671'],
  secondary: ['#ff5f6d', '#ffc371'],
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  white: '#fff',
  light: '#f8f9fa',
  muted: '#6c757d',
  dark: '#343a40'
}

var fonts = {
  headline: 'Roboto',
  main: 'Roboto'
}
fonts.heading = fonts.sans
fonts.body = fonts.serif
fonts.link = fonts.sans

// http://tachyons.io/docs/typography/scale/
var fontSizes = [
  '0.875rem', // 0
  '1rem', // 1
  '1.25rem', // 2
  '1.5rem', // 3
  '2.25rem', // 4
  '3rem', // 5
  '5rem', // 6
  '6rem' // 7
]

// http://tachyons.io/docs/layout/spacing/
const space = [
  '0rem', // 0
  '0.25rem', // 1
  '0.5rem', // 2
  '1rem', // 3
  '2rem', // 4
  '4rem', // 5
  '8rem', // 6
  '16rem', // 7
  '32rem', // 8
  '64rem' // 9
]

export default {
  colors,
  fonts,
  fontSizes,
  lineHeights: fontSizes,
  space,
  sizes: space
}
