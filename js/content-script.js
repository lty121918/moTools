let text = `第一章 小二上酒（ 每一个钟头上传一章， 直到传完二十章！ 红票和收藏别忘了～）北凉王府龙盘虎踞于清凉山， 千门万户， 极土木之盛。作为王朝硕果仅存的异姓王， 在庙堂和江湖都是毁誉参半的北凉王徐骁作为一名功勋武臣， 可谓得到了皇帝宝座以外所有的东西， 在西北三州， 他就是当之无愧的主宰， 只手遮天， 翻云覆雨。难怪朝廷中与这位异姓王政见不合的大人们私下都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天王府很热闹， 位高权重的北凉王亲自开了中 第二章 都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的的方法d,<p id="test">111<p>,更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天`
// chrome.runtime.onMessage.addListener(function (request, sender) {
// text = request.value
let resultText = '' //页面上展示的文字
let menuList = '' //菜单里的内容
setTimeout(() => {

	// Todo：调整样式，替换成正则表达式

	format() //处理小说内容和菜单内容
	let body = document.querySelector('body')
	// 创建插入到body上的父盒子
	const moContent = document.createElement('div');
	moContent.style = 'display: flex;flex-direction: row;box-sizing: border-box;position: fixed;width: 500px;right: 30px;top: 10%;z-index:9999999;background-color:aqua;align-items: flex-start;justify-content: space-around'
	// moContent.onmouseover = function () {
	// 	moContent.style.opacity = '1'
	// }
	// moContent.onmouseout = function () {
	// 	moContent.style.opacity = '0'
	// }
	// 设置文字和目录按钮的父盒子
	const infoContent = document.createElement('div');
	infoContent.style = ' width: 400px;background-color: blueviolet;'
	// 设置菜单盒子
	const menuContent = document.createElement('div');
	menuContent.innerHTML=`<a>目录</a>`
	menuContent.style = 'padding: 5px;background-color: cadetblue;'
	// 创建小说文本盒子
	const textContent = document.createElement('div');
	textContent.innerHTML = resultText;
	textContent.style='width: 100%;height: 200px;overflow-x: auto;'
	// 创建目录盒子
	const catalogue = document.createElement('div');
	catalogue.style = 'display: flex;flex-direction: column;height: 200px;padding: 5px;background-color:blue;'
	catalogue.innerHTML = menuList;



	body.appendChild(moContent);
	moContent.appendChild(catalogue);
	moContent.appendChild(infoContent);
	infoContent.appendChild(textContent);
	infoContent.appendChild(menuContent);
}, 1000);

/**
 *  @function 处理小说文本和菜单目录
 */
const format = () => {
	for (let i = 0; i < text.length; i++) {
		if (text[i] == "第" && text[i + 2] == "章") {

			text[i] = "<a>text[i]text[i+1]text[i+2]</a>"
			// menuList //菜单内容里插入
			resultText = text.replace(text[i], `<span id="${i}">${text[i]}${text[i + 1]}${text[i + 2]}</span>`)
			menuList += `<a href="#${i}">${text[i]}${text[i + 1]}${text[i + 2]}</a>`
			console.log(menuList);
		}
	}
}
// });