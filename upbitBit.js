function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "비트") {
    /*
    var pURL = new Array();
    var pname = new Array();
    pURL[0] = "https://kr.investing.com/indices/nq-100-futures";
    pname[0] = "NASDAQ"; // nasdaq
    pURL[1] = "https://kr.investing.com/indices/us-spx-500-futures";
    pname[1] = "S&P 500"; // snp
    pURL[2] = "https://kr.investing.com/indices/us-30-futures";
    pname[2] = "DOW 30"; // dow
    pURL[3] = "https://kr.investing.com/indices/volatility-s-p-500";
    pname[3] = "CBOE VIX"; // vix
    pURL[4] = "https://kr.investing.com/indices/kospi";
    pname[4] = "KOSPI"; // kospi
    pURL[5] = "https://kr.investing.com/indices/kosdaq";
    pname[5] = "KOSDAQ"; // kosdaq
    var oneqmsg = "";

    for (var i = 0; i < pURL.length; i++) {
      var odata = org.jsoup.Jsoup.connect(pURL[i])
        .ignoreContentType(true)
        .get();

      var data = odata.select("span.arial_26") + ""; // to change string (+ "")
      data = data.replace(/<[^>]+>/g, "");
      var datasupport = odata.select("span.arial_20") + ""; // 증가분 처리
      datasupport = datasupport.replace(/<[^>]+>/g, ""); // tag remove
      datasupport = datasupport.replace(/\n/g, " "); // enter remove and make space bar

      var msg = pname[i] + "\n----------\n" + data + "\n" + datasupport + "\n";

      oneqmsg += msg;
    }
    var last = oneqmsg.lastIndexOf("\n") - 11;
   oneqmsg = oneqmsg.substr(0, last);
   replier.reply(oneqmsg);

    */
    var URL = "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC";

    var odata = org.jsoup.Jsoup.connect(URL)
      .ignoreContentType(true)
      .get();

    replier.reply(odata);
    /*
    var data = odata.select("span.first") + ""; // to change string (+ "")
    data = data.replace(/<[^>]+>/g, "");
    var datasupport = odata.select("strong.upDown") + "";
    datasupport = datasupport.replace(/<[^>]+>/g, ""); // tag remove
    datasupport = datasupport.replace(/\n/g, " "); // enter remove and make space bar

    var msg = data + "\n" + datasupport;
    replier.reply(msg);
    */
  }
}
