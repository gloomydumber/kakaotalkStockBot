// from here 내가 만든 kospi
if (msg == "/코스피") {
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
}
