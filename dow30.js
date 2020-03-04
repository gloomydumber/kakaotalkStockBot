function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "/다우") {
    var dowURL = "https://kr.investing.com/indices/us-30-futures";

    var dowdata =
      org.jsoup.Jsoup.connect(dowURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_26") + ""; // 문자열로 바꿔 주기 위해 + ""

    dowdata = dowdata.replace(/<[^>]+>/g, "");

    var dowdatasupport =
      org.jsoup.Jsoup.connect(dowURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_20") + ""; // 증가분 처리
    dowdatasupport = dowdatasupport.replace(/<[^>]+>/g, ""); // 태그 제거하고 안에 내용만 빼기, (다 제거)
    dowdatasupport = dowdatasupport.replace(/\n/g, " "); // 엔터 제거
    var dowmsg = "DOW 30 : " + dowdata + " " + dowdatasupport;

    replier.reply(dowmsg);
  }
}
