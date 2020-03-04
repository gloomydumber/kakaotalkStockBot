function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "/vix") {
    var vixURL = "https://kr.investing.com/indices/volatility-s-p-500";

    var vixdata =
      org.jsoup.Jsoup.connect(vixURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_26") + ""; // 문자열로 바꿔 주기 위해 + ""

    vixdata = vixdata.replace(/<[^>]+>/g, "");

    var vixdatasupport =
      org.jsoup.Jsoup.connect(vixURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_20") + ""; // 증가분 처리
    vixdatasupport = vixdatasupport.replace(/<[^>]+>/g, ""); // 태그 제거하고 안에 내용만 빼기, (다 제거)
    vixdatasupport = vixdatasupport.replace(/\n/g, " "); // 엔터 제거
    var vixmsg = "CBOE VIX : " + vixdata + " " + vixdatasupport;

    replier.reply(vixmsg);
  }
}
