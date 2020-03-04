function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "/에센피") {
    var snpURL = "https://kr.investing.com/indices/us-spx-500";

    var snpdata =
      org.jsoup.Jsoup.connect(snpURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_26") + ""; // 문자열로 바꿔 주기 위해 + ""

    snpdata = snpdata.replace(/<[^>]+>/g, "");

    var snpdatasupport =
      org.jsoup.Jsoup.connect(snpURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_20") + ""; // 증가분 처리
    snpdatasupport = snpdatasupport.replace(/<[^>]+>/g, ""); // 태그 제거하고 안에 내용만 빼기, (다 제거)
    snpdatasupport = snpdatasupport.replace(/\n/g, " "); // 엔터 제거
    var snpmsg = "S&P500 : " + snpdata + " " + snpdatasupport;

    replier.reply(snpmsg);
  }
}
