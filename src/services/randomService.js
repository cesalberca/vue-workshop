export function getRandomNumber() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(Math.random())
    }, 1000)
  })
}
