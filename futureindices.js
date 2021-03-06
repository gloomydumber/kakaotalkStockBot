function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "선물") {
    var pURL = new Array();
    var pname = new Array();
    pURL[0] = "https://kr.investing.com/indices/nq-100-futures";
    pname[0] = "NASDAQ"; // nasdaq
    pURL[1] = "https://kr.investing.com/indices/us-spx-500-futures";
    pname[1] = "S&P 500"; // snp
    pURL[2] = "https://kr.investing.com/indices/us-30-futures";
    pname[2] = "DOW 30"; // dow
    pURL[3] = "https://kr.investing.com/indices/korea-200-futures";
    pname[3] = "KOSPI"; // kospi
    var oneqmsg = "선물\n";

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
