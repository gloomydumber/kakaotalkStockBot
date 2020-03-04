function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "/나스닥") {
    var nasURL = "https://kr.investing.com/indices/nq-100-futures";

    var nasdata =
      org.jsoup.Jsoup.connect(nasURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_26") + ""; // 문자열로 바꿔 주기 위해 + ""

    nasdata = nasdata.replace(/<[^>]+>/g, "");

    var nasdatasupport =
      org.jsoup.Jsoup.connect(nasURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_20") + ""; // 증가분 처리
    nasdatasupport = nasdatasupport.replace(/<[^>]+>/g, ""); // 태그 제거하고 안에 내용만 빼기, (다 제거)
    nasdatasupport = nasdatasupport.replace(/\n/g, " "); // 엔터 제거
    var nasmsg = "NASDAQ : " + nasdata + " " + nasdatasupport;

    replier.reply(nasmsg);
  }
}
