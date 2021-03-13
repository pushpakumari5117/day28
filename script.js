const button=document.getElementById('button')
const toasts=document.getElementById('toasts')
const messages = [
  'Hi','Hello','check your email',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
]
const types=[
  'info',
  'success',
  'error'
]
button.addEventListener('click',()=>createNotification())
function createNotification(message=null,type=null){
  const notif=document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type?type:getRandomType())
  notif.innerText=message?message:getRandomMessages()
  toasts.appendChild(notif)
  setTimeout(()=>{
    notif.remove()
  },3000)
}
function getRandomMessages(){
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
  return types[Math.floor(Math.random() * types.length)]
}