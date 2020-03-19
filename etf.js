function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "펀드") {
    var pURL = new Array();
    var pname = new Array();
    pURL[0] = "https://kr.investing.com/etfs/ultrapro-short-qqq";
    pname[0] = "SQQQ"; // nasdaq
    pURL[1] = "https://kr.investing.com/etfs/proshares-trust-ultrapro-qqq";
    pname[1] = "TQQQ"; // snp
    pURL[2] =
      "https://kr.investing.com/etfs/velocityshares-dly-2x-vix-sh.-term";
    pname[2] = "TVIX"; // dow
    pURL[3] =
      "https://kr.investing.com/etfs/proshares-short-vix-short-term-fut";
    pname[3] = "SVXY"; // vix
    pURL[4] = "https://kr.investing.com/etfs/samsung-kodex-inverse";
    pname[4] = "KODEX 인버스"; // kospi
    pURL[5] = "https://kr.investing.com/etfs/samsung-kodex-leverage";
    pname[5] = "KODEX 레버리지"; // kosdaq
    var oneqmsg = "ETF & ETN\n";

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
