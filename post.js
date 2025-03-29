function post_1(url, data) {
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
    xhr.addEventListener("load", () => {
      if(xhr.status == 200) {
        resolve(xhr.responseText);
      }
      else {
        reject(xhr.status);
      }
    });
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let content = JSON.stringify(data);
    xhr.send("content=" + encodeURI(content));
  });
}

function post_2(url, param = {}) {
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
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if(xhr.status == 200) {
        resolve(xhr.response);
      }
      else {
        reject(new Error(xhr.status));
      }
    });
    xhr.addEventListener("error", () => {
      console.log(xhr.response);
    });
    let formData = new FormData();
    Object.entries(param).forEach(([key, val]) => {
      formData.append(key, val);
    });
    xhr.send(formData);
  });
}

function post_3(url, body = {}) {
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
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if(xhr.status == 200) {
        resolve(xhr.response);
      }
      else {
        reject(new Error(xhr.status));
      }
    });
    xhr.addEventListener("error", () => {
      console.log(xhr.response);
    });
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(body));
  });
}
