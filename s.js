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
  else if (sname=='join'){document.write('<iframe src="https://1.preview.awaliny.top/join/"></iframe>')}
  else if (sname=='1'){document.write('<iframe src="https://1.preview.awaliny.top/2-t1.html"></iframe>')}
  else if (sname=='2'){document.write('<iframe src="https://1.preview.awaliny.top/t2-2.html"></iframe>')}
  else if (sname=='4'){document.write('<iframe src="https://1.preview.awaliny.top/2-6.html"></iframe>')}
  else if (sname=='3'){document.write('<iframe src="https://1.preview.awaliny.top/t2-3.html"></iframe>')}
  else{document.write("<iframe src="+sname+"></iframe>")};
