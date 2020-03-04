function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "/코스닥") {
    var kdqURL = "https://kr.investing.com/indices/kosdaq";

    var kdqdata =
      org.jsoup.Jsoup.connect(kdqURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_26") + ""; // 문자열로 바꿔 주기 위해 + ""

    kdqdata = kdqdata.replace(/<[^>]+>/g, "");

    var kdqdatasupport =
      org.jsoup.Jsoup.connect(kdqURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_20") + ""; // 증가분 처리
    kdqdatasupport = kdqdatasupport.replace(/<[^>]+>/g, ""); // 태그 제거하고 안에 내용만 빼기, (다 제거)
    kdqdatasupport = kdqdatasupport.replace(/\n/g, " "); // 엔터 제거
    var kdqmsg = "KOSDAQ : " + kdqdata + " " + kdqdatasupport;

    replier.reply(kdqmsg);
  }
}
