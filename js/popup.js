let message = '默认数据'
document.getElementById("select-input").addEventListener("change", (e) => {
  //获取选择的文件对象
  let file = e.target.files[0];
  // 检测浏览器对FileReader的支持
  if (window.FileReader) {
    // 创建FileReader对象(文件对象)
    const reader = new FileReader();
    /*----------    6种事件模型    ---------*/
    // 开始读取时：
    reader.onloadstart = function (e) {
      console.log("开始读取", e);
    };
    // 正在读取：
    reader.onprogress = function (e) {
      console.log("正在读取", e);
    };
    // 读取出错时：
    reader.onerror = function (e) {
      console.log("读取出错", e);
    };
    // 读取中断时：
    reader.onabort = function (e) {
      console.log("读取中断", e);
    };
    // 读取成功时：
    reader.onload = function (e) {
      console.log("读取成功", e);
      if (/image\/\w+/.test(file.type)) {
        // document.getElementById("picture").src = e.target.result;
        console.log(e.target.result);
      } else {
        // 输出文件
        // document.getElementById("content").innerText = e.target.result;
        sendMessageToContentScript({value: e.target.result });
      };

    };
    // 读取完成，无论成功失败：
    reader.onloadend = function (e) {
      console.log("读取完成，无论成功失败", e);

    };
    /*-------  4种文件读功能(方法、函数)  ------*/
    /*	reader.readAsText(file,"utf-8");
        reader.readAsBinaryString(file);  	// 将文件读取为二进制编码
      reader.readAsDataURL(file);  		// 将文件读取为DataURL
      reader.readAsText(none);  			// 终端读取操作 			*/


    if (/image\/\w+/.test(file.type)) {
      reader.readAsDataURL(file);
    } else {
      // 输出文件
      reader.readAsText(file, "utf-8");
    };
  } else {
    alert("Not supported by your browser!");
  };
}, false);


function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}

