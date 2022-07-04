/*
@Author htmcssjs
*/

fun(
  '"excitationAd":"\\d"@Ad":"d"@ad":true@AdId":"[^"]*"@adid":"[^"]*"@fr_videp_if":"1@adunit[^"]*"',
  '"excitationAd":"0"@Ad":"0"@ad":false@AdId":""@adid":""@fr_videp_if":"0@"'
);

function fun() {
  let body = $response.body;
  let regs = arguments[0].split("@");
  let strs = arguments[1].split("@");
  for (i = 0; i < regs.length; i++) {
    let reg = new RegExp(regs[i], "g");
    body = body.replace(reg, strs[i]);
  }
  $done(body);
}
