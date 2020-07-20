// RES
console.log('hi from file with .ts extension')
export default function(socket, io) {
  return Object.freeze({
    hi() {
      console.log('hi rxd!')
      return 'world'
    }
  })
}