function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (msg == "키플롬") {
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

    var kospiURL = "https://kr.investing.com/indices/kospi";
    //"https://api.worldtradingdata.com/api/v1/stock?symbol=KOSPI.KS&api_token=mkgXnjQlBeDdpzHXsL5nWO7BUD0qVjRrW7onDWO9PcRGZNiE4kqT9Vah9FC1";
    var kospidata =
      org.jsoup.Jsoup.connect(kospiURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_26") + ""; // 문자열로 바꿔 주기 위해 + ""

    kospidata = kospidata.replace(/<[^>]+>/g, "");

    var kospidatasupport =
      org.jsoup.Jsoup.connect(kospiURL)
        .ignoreContentType(true)
        .get()
        .select("span.arial_20") + ""; // 증가분 처리
    kospidatasupport = kospidatasupport.replace(/<[^>]+>/g, ""); // 태그 제거하고 안에 내용만 빼기, (다 제거)
    kospidatasupport = kospidatasupport.replace(/\n/g, " "); // 엔터 제거
    var kospimsg = "KOSPI : " + kospidata + " " + kospidatasupport;

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

    var oneqmsg =
      nasmsg +
      "\n" +
      snpmsg +
      "\n" +
      dowmsg +
      "\n" +
      vixmsg +
      "\n" +
      kospimsg +
      "\n" +
      kdqmsg;
    replier.reply(oneqmsg);
  }
}
