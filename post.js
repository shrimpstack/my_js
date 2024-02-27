function post(url, data) {
  if(!window.XMLHttpRequest) {
    alert('無法連線，請更換瀏覽器');
    return;
  }
  if(!url) {
    alert('未設定url');
    return;
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState != 4) return;
      if(xhr.status == 200) {
        try {
          let data = JSON.parse(xhr.responseText);
          resolve(data);
        } catch (err) {
          reject(err);
        }
      }
      else {
        reject(xhr.status);
      }
    }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let content = JSON.stringify(data);
    xhr.send("content=" + encodeURI(content));
  });
}
