// 定义根网址
const baseUrl = 'http://www.liulongbin.top:3006';
function getList() {
  $.get(baseUrl + '/api/news', function (res) {
    console.log(res);
    const { data } = res;
    console.log(data);
    data.forEach((item) => {
      item.tags = item.tags.split(',');
    });
    console.log(data);
    const htmlStr = template('tpl-info', data);
    $('#news-list').html(htmlStr);
  });

  // 时间过滤
  function padZero(n) {
    if (n >= 10) return n;
    return '0' + n;
  }
  template.defaults.imports.dateFormat = function (datestr) {
    const date = new Date(datestr);
    const y = padZero(date.getFullYear());
    const m = padZero(date.getMonth() + 1);
    const d = padZero(date.getDate());
    const hh = padZero(date.getHours());
    const mm = padZero(date.getMinutes());
    const ss = padZero(date.getSeconds());
    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
  };
}
getList();
