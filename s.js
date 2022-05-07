function GetQueryString(api) {
    var reg = new RegExp("(^|&)" + api + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  
  var sname = GetQueryString("url");
  if (sname != null) {
    var sname_ = decodeURIComponent(sname);
  }
  if (sname==null){document.write("参数错误 错误代码AE0122")}
  else if (sname=="https://awaliny.top"){document.write("参数错误 错误代码taowashiba")}else if (sname=="https://www.awaliny.top"){document.write("参数错误 错误代码taowashiba")}else if (sname=="http://awaliny.top"){document.write("参数错误 错误代码taowashiba")}else if (sname=="http://www.awaliny.top"){document.write("参数错误 错误代码taowashiba")}else if (sname=="//awaliny.top"){document.write("参数错误 错误代码taowashiba")}else if (sname=="//www.awaliny.top"){document.write("参数错误 错误代码taowashiba")}
  else if (sname=='join'){location.replace("https://s.awaliny.top/?p=join")}
  else if (sname=='1'){location.replace("https://s.awaliny.top/?p=1")}
  else if (sname=='2'){location.replace("https://s.awaliny.top/?p=2")}
  else if (sname=='4'){location.replace("https://s.awaliny.top/?p=4")}
  else if (sname=='3'){location.replace("https://s.awaliny.top/?p=3")}
 else if (sname=='5'){location.replace("https://s.awaliny.top/?p=5")}
  else if (sname=='6'){location.replace("https://s.awaliny.top/?p=6")}
  else{document.write("<iframe src="+sname+"></iframe>")};
