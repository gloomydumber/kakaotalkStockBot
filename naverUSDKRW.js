function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "달러") {
    var pURL = new Array();
    var pname = new Array();
    pURL[0] =
      "https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%ED%99%98%EC%9C%A8";
    pname[0] = " USD/KRW 하나은행\n 매매기준율 환율우대 없음"; // from hanabank
    var oneqmsg = "";

    for (var i = 0; i < pURL.length; i++) {
      var odata = org.jsoup.Jsoup.connect(pURL[i])
        .ignoreContentType(true)
        .get();

      var data = odata.select("span.spt_con") + ""; // to change string (+ "")
      data = data.replace(/<[^>]+>/g, "");
      data = data.replace(/\전일대비상승/g, "");
      data = data.replace(/\전일대비하락/g, "");
      data = data.replace(/\전일대비보합/g, "");
      data = data.replace(/\지수/g, "");

      var datasupport = odata.select("span.price") + ""; // to make string type
      datasupport = datasupport.replace(/<[^>]+>/g, ""); // tag remove
      datasupport = datasupport.replace(/\n/g, " "); // enter remove and make space bar
      datasupport = datasupport.replace(/\전일대비상승/g, ""); // str.replace(/\-/g,'');
      datasupport = datasupport.replace(/\전일대비하락/g, ""); // str.replace(/\-/g,'');
      datasupport = datasupport.replace(/\전일대비보합/g, ""); // str.replace(/\-/g,'');

      var msg = pname[i] + "\n" + data + "\n" + datasupport + "\n----------\n";
      oneqmsg += msg;
    }
    var last = oneqmsg.lastIndexOf("\n") - 28;
    oneqmsg = oneqmsg.substr(0, last);
    replier.reply(oneqmsg);
  }
}
