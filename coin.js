function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "코인") {
    var pURL = new Array();
    var pname = new Array();
    pURL[0] = "https://kr.investing.com/crypto/bitcoin/btc-usd?cid=1035793";
    pname[0] = "BTC-USD : Binance"; // nasdaq
    pURL[1] = "https://kr.investing.com/crypto/bitcoin/btc-krw?cid=1064952";
    pname[1] = "BTC-KRW : Upbit"; // snp
    pURL[2] = "https://kr.investing.com/crypto/bitcoin/btc-krw";
    pname[2] = "BTC-KRW : Bithumb"; // dow
    pURL[3] = "https://kr.investing.com/crypto/xrp/xrp-krw";
    pname[3] = "XRP-KRW : Bithumb"; // vix

    var oneqmsg = "코인\n";

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
