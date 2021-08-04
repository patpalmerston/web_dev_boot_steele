console.log("before conditional")

const password = prompt("enter pass")

if(password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('valid')
} else {
  console.log('invalid')
}