/**
 * @Name QX每日girl脚本
 * @Author htmcssjs
 * @UpdateTime 2022-07-01
 * @WebURL https://api.lolicon.app/#/setu
 * @ScriptURL https://raw.githubusercontent.com/htmcssjs/scripts/master/girl.js
 */

let r18 = 2; //0为非 R18，1为 R18，2为混合
let num = 1; //一次返回的结果数量，范围为1到20；在指定关键字或标签的情况下，结果数量可能会不足指定的数量
let keyword = ""; //返回从标题、作者、标签中按指定关键字模糊匹配的结果，大小写不敏感，性能和准度较差且功能单一，建议使用tag代替
let tag = ["萝莉|少女", "白丝|黑丝"]; //返回匹配指定标签的作品
let url =
  "https://api.lolicon.app/setu/v2?r18=" +
  r18 +
  "&num=" +
  num +
  "&keyword=" +
  keyword +
  "&tag=" +
  tag;
let method = "GET";
let headers = {
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1",
};

let myRequest = {
  url: encodeURI(url),
  method: method,
  headers: headers,
};

$task.fetch(myRequest).then(
  (response) => {
    console.log(response.body);
    let obj = JSON.parse(response.body);
    for (i = 0; i < obj.data.length; i++) {
      let pictureURL = encodeURI(obj.data[i].urls.original);
      $notify("每日girl", "点击通知查看图片", "htmcssjs", {
        "open-url": pictureURL,
        "media-url": pictureURL,
      });
    }
    $done();
  },
  (reason) => {
    $notify("Title", "Subtitle", reason.error);
    $done();
  }
);
