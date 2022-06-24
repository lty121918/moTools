// 所谓content-scripts，其实就是Chrome插件中向页面注入脚本的一种形式（虽然名为script，其实还可以包括css），
// 借助content-scripts我们可以实现通过配置的方式轻松向指定页面注入JS和CSS（如果需要动态注入，可以参考下文），
// 最常见的比如：广告屏蔽、页面CSS定制，等等。

// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	// 数据处理和返回。是不是有点类似redux中reducer数据处理的感觉
	switch (request.type) {
		case 'get_editable':
			// 将当前文档是否可编辑的信息返回给popup，控制开关的形态
			sendResponse(document.body.contentEditable);
			break;
		case 'toggle':
			// 切换可编辑状态
			document.body.contentEditable = ![true, 'true'].includes(
				document.body.contentEditable
			);
		default:
			break;
	}
});

setTimeout(function () {

	function ReadFile(data) {
		console.log(data)
	}
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		ReadFile(xhr.responseText);

	};
	try {
		xhr.open("get", "../test.txt", true);
		xhr.send();
	}
	catch (ex) {
		console.log("catch")
		ReadFile(ex.message);
	}
	let text ="12121212152dsgsfjksdalghbdgf; sdhgahg;ihg"
	let body = document.querySelector('body')
	let moContent = document.createElement('div');
	moContent.style = 'position:absolute;right:10px;top:30px;width:300px;height:3                       00px;backgroundColor:white;zIndex:999999;overflow:auto;'
	moContent.onmouseover = function () {
		moContent.style.opacity = '1'
	}
	moContent.onmouseout = function () {
		moContent.style.opacity = '0'
	}
	// moContent.setAttribute('class', 'mocontent')
	console.log(body);
	let textContent = document.createElement('p');
	textContent.id = 'haskell';
	textContent.innerText = text;
	moContent.appendChild(textContent);
	body.appendChild(moContent);
	console.log(textContent);
	console.log(moContent);
	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		console.log(request.info)
		sendResponse('我收到了你的情书，popup~')
	})
}, 100)

