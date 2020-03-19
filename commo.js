function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "상품") {
    var pURL = new Array();
    var pname = new Array();
    pURL[0] = "https://kr.investing.com/commodities/crude-oil";
    pname[0] = "Crude OIL"; // nasdaq
    pURL[1] = "https://kr.investing.com/commodities/brent-oil";
    pname[1] = "Brent OIL"; // snp
    pURL[2] = "https://kr.investing.com/commodities/natural-gas";
    pname[2] = "Natural GAS"; // dow
    pURL[3] = "https://kr.investing.com/commodities/gold";
    pname[3] = "Gold"; // vix
    pURL[4] = "https://kr.investing.com/commodities/copper";
    pname[4] = "Silver"; // kospi
    pURL[5] = "https://kr.investing.com/commodities/us-corn";
    pname[5] = "Corn"; // kosdaq
    var oneqmsg = "상품 선물\n";

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
