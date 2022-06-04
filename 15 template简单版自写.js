const template = (id, data) => {
  let str = document.getElementById(id).innerHTML;
  const re = /{{\s*([a-zA-Z]+)\s*}}/;

  let result = null;
  while ((result = re.exec(str))) {
    str = str.replace(result[0], data[result[1]]);
  }
  return str;
};
