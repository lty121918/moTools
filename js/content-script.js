let text = ""
chrome.runtime.onMessage.addListener(function (request, sender) {
	text = request.value
	console.log(sender,12121);
	let body = document.querySelector('body')
	let moContent = document.createElement('div');
	moContent.style = 'position:fixed;right:20px;top:50px;padding:10px;width:320px;height:350px;backgroundColor:white;z-index:999999;overflow-y:auto;overflow-x:hidden'
	moContent.onmouseover = function () {
		moContent.style.opacity = '1'
	}
	moContent.onmouseout = function () {
		moContent.style.opacity = '0'
	}
	let textContent = document.createElement('p');
	textContent.id = 'text';
	textContent.innerText = text;
	moContent.appendChild(textContent);
	body.appendChild(moContent);
});


