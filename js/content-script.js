let text = `第一章 小二上酒（ 每一个钟头上传一章， 直到传完二十章！ 红票和收藏别忘了～）北凉王府龙盘虎踞于清凉山， 千门万户， 极土木之盛。作为王朝硕果仅存的异姓王， 在庙堂和江湖都是毁誉参半的北凉王徐骁作为一名功勋武臣， 可谓得到了皇帝宝座以外所有的东西， 在西北三州， 他就是当之无愧的主宰， 只手遮天， 翻云覆雨。难怪朝廷中与这位异姓王政见不合的大人们私下都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天王府很热闹， 位高权重的北凉王亲自开了中 第二章 都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的，第三章 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的的方法d,<p id="test">111<p>,更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天都会文绉绉骂一声徐蛮子， 而一些居心叵测的， 更诛心地丢了顶“ 二皇帝” 的帽子。今天第四章`;
chrome.runtime.onMessage.addListener(function (request, sender) {
  text = request.value;

  // setTimeout(() => {
  let [catalogueList, resultText] = format(text); //处理小说内容和菜单内容

  let body = document.querySelector("body");
  // 创建插入到body上的父盒子
  const moContent = document.createElement("div");
  moContent.setAttribute("draggable", "true");
  moContent.setAttribute("class", "moContent");
  // 设置文字和目录按钮的父盒子
  const infoContent = document.createElement("div");
  infoContent.setAttribute("class", "infoContent");
  // 设置菜单盒子
  const menuContent = document.createElement("div");
  menuContent.innerHTML = `<a id="catalogueButton">目录</a>`;

  // 创建小说文本盒子
  const textContent = document.createElement("div");
  textContent.innerHTML = resultText;
  textContent.setAttribute("class", "textContent");
  // 创建目录盒子
  const catalogue = document.createElement("div");
  catalogue.setAttribute("class", "catalogue");
  catalogue.innerHTML = catalogueList;
  // 事件委托具体实现
  catalogue.onclick = function (event) {
    event = event || window.event;
    var target = event.target;
    // 获取目标元素
    console.log(target, 111);
    if (target.nodeName == "A") {
      alert(target.innerHTML);
    }
  };
  body.appendChild(moContent);
  moContent.appendChild(catalogue);
  moContent.appendChild(infoContent);
  infoContent.appendChild(textContent);
  infoContent.appendChild(menuContent);
  // 点击目录按钮显示目录
  document
    .getElementById("catalogueButton")
    .addEventListener("click", function () {
      if (catalogue.style.display === "none") {
        catalogue.style = "display:flex";
      } else {
        catalogue.style = "display:none";
      }
    });

  console.time("answer time");
  //   drag(moContent);
  console.timeEnd("answer time");
  // }, 1000);
});

/**
 *  @function 处理小说文本和菜单目录
 */
function format(text) {
  let resultText = "";
  let catalogueList = "";
  let reg = /[\u7b2c][[\u4e00-\u9fa5]{1,7}[\u7ae0]/g;
  resultText = text.replace(reg, replacer);
  function replacer(match, p1) {
    catalogueList += `<a href="#${p1}">${match}</a>`;
    console.log(catalogueList);
    return `<span id=${p1} >${match}</span><br/>`;
  }
  return [catalogueList, resultText];
}

/**
 *  @function 小说盒子拖拽
 */
function drag(obj) {
  let offsetX, offsetY;
  //元素每次拖动开始时，记录它的坐标（偏移量)
  obj.ondragstart = function (e) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    console.log(offsetX, offsetY);
  };
  //元素拖动过程中，重新设置它的坐标（偏移量)
  obj.ondrag = function (e) {
    if (e.pageX === 0 && e.pageY === 0) {
      return;
    }
    obj.style.left = e.pageX - offsetX + "px";
    obj.style.top = e.pageY - offsetY + "px";
  };
}
