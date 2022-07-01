// ==UserScript==
// @Name              QX每日girl脚本
// @Author            htmcssjs
// @UpdateTime        2022-07-01
// @WebURL            https://api.lolicon.app/#/setu
// @Quota             300次/天
// @ScriptURL         https://raw.githubusercontent.com/htmcssjs/scripts/master/setu.js
// ==/UserScript==

let r18      = 2
let keyword  = ''
let tag = ['萝莉|少女','白丝|黑丝']
let num      = 1
var request = {
    url:encodeURI("https://api.lolicon.app/setu/v2?r18=" + r18  + "&keyword=" + keyword + "&num=" + num + "&tag=" + tag),
    header:{  
     "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1"
    },
}
$task.fetch(request).then(response => {
	let obj = JSON.parse(response.body);
	console.log(response.body);
	if(obj.code == 0)
	{
		for(i = 0;i<obj.data.length;i++)
		{
			let pictureURL = encodeURI(obj.data[i].url);
			$notify("每日girl", "", "htmcssjs", {"open-url":pictureURL,"media-url":pictureURL}); // Success
		}
	}
	else
	{
		 $notify("Title", "Subtitle", reason.error); // Error!
	}
})
