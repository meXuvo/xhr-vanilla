let getButton = document.getElementById("get-button");
let sendButton = document.getElementById("send-button");

//send request
let sendRequest = (method, url, data) => {
  let promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(data);
    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = function () {
      reject(xhr.response);
    };
  });
  return promise;
};

//get data
let getData = () => {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
    (responsData) => {
      console.log(responsData);
    }
  );
};

//set data
let sendData = () => {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
    })
  )
    .then((responsData) => {
      console.log(responsData);
    })
    .catch((err) => {
      console.log("something went wrong");
    });
};

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
