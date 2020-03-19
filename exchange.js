function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "환율") {
    var pURL = new Array();
    var pname = new Array();
    pURL[0] = "https://kr.investing.com/currencies/usd-krw";
    pname[0] = "USD-KRW"; // nasdaq
    pURL[1] = "https://kr.investing.com/currencies/jpy-krw";
    pname[1] = "JPY-KRW"; // snp
    pURL[2] = "https://kr.investing.com/currencies/hkd-krw";
    pname[2] = "HKD-KRW"; // dow
    pURL[3] = "https://kr.investing.com/currencies/cny-krw";
    pname[3] = "CNY-KRW"; // vix

    var oneqmsg = "환율\n";

    for (var i = 0; i < pURL.length; i++) {
      var odata = org.jsoup.Jsoup.connect(pURL[i])
        .ignoreContentType(true)
        .get();

      var data = odata.select("span.arial_26") + ""; // to change string (+ "")
      data = data.replace(/<[^>]+>/g, "");
      var datasupport = odata.select("span.arial_20") + ""; // 증가분 처리
      datasupport = datasupport.replace(/<[^>]+>/g, ""); // tag remove
      datasupport = datasupport.replace(/\n/g, " "); // enter remove and make space bar

      var msg = pname[i] + "\n" + data + "\n" + datasupport + "\n----------\n";
      oneqmsg += msg;
    }

    var last = oneqmsg.lastIndexOf("\n") - 11;
    oneqmsg = oneqmsg.substr(0, last);
    replier.reply(oneqmsg);
  }
}
