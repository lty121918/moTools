// 这里的js其实是操作popup.html产生的dom的
let messages = '我真是船只的值'
// popup ---> content
chrome.tabs.query({
  active: true,
  currentWindow: true
}, (tabs) => {
  let message = {
      info: '来自popup的情书💌'
  }
  chrome.tabs.sendMessage(tabs[0].id, message, res => {
      console.log('popup=>content')
      console.log(res,'res')
  })
})