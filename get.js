function get(url, data) {
  if(!window.XMLHttpRequest) {
    alert('無法連線，請更換瀏覽器');
    return;
  }
  if(!url) {
    alert('未設定url');
    return;
  }
  return new Promise((resolve, reject) => {
    let form_str = Object.entries(data).map(({key, val}) => {
      return key + "=" + encodeURI(val);
    }).join("&");
    if(form_str) url += "?" + form_str;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.addEventListener('load', () => {
      if(xhr.status == 200){
        resolve(xhr.responseText);
      }
      else {
        reject(xhr.status);
      }
    });
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
  });
}