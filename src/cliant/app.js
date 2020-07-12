import { Sample } from "./Sample";
import { Data } from "./Data";
import { Dog } from "./Dog";

// DOM作成
const textArea = document.getElementById("text-area");
const btn = document.getElementById("btn");
const ajaxGetBtn = document.getElementById("ajax-get-btn");
const ajaxPostBtn = document.getElementById("ajax-post-btn");
const ajaxGetResult = document.getElementById("ajax-get-result");
const ajaxPostResult = document.getElementById("ajax-post-result");

// httpリクエスト作成
const ajaxGetReq = new XMLHttpRequest();
const ajaxPostReq = new XMLHttpRequest();


// イベントリスナを設定 =>(https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
ajaxGetReq.addEventListener("progreess", updateProgress);
ajaxGetReq.addEventListener("progreess", updateProgress);
ajaxGetReq.addEventListener("load", transferComplete);
ajaxPostReq.addEventListener("load", transferComplete);
ajaxGetReq.addEventListener("error", transferFailed);
ajaxPostReq.addEventListener("error", transferFailed);
ajaxGetReq.addEventListener("abort", transferCanceled);
ajaxPostReq.addEventListener("abort", transferCanceled);

// loading image
let divImage = document.getElementById("image-place-container");
function loadingImage() {
  console.log("loading");
  divImage.setAttribute("class", "image-place");
  let img = document.createElement("img");
  img.setAttribute("class", "loading-image");
  img.setAttribute("src", "./src/image/loadingImage1.jpg");
  divImage.appendChild(img);
};
function removeImage(){
  divImage.removeAttribute("class");
  while(divImage.firstChild) {
    divImage.removeChild(divImage.firstChild);
  }
};

btn.addEventListener("click", () => {
  // TEXTAREA
  console.log("TEXTAREA : " + textArea.value);
  // class
  const sample = new Sample(1, "Taro");
  console.log("sample : " + sample.getInfo());
  // map
  const data = new Data();
  data.set("key3", "value3");
  let map = data.getData();
  console.log("map : " + map);
  // iterator
  const iterator = map[Symbol.iterator]();
  console.log("iterator : " + iterator.next().value);
  // object　リテラル拡張
  let id = 1;
  let name = "name";
  const obj1 = { id, name };
  console.log("obj1 : " + obj1.name);
  // object
  const obj2 = { id: id, name: name };
  console.log("obj2 : " + obj2.name);
  // 継承
  const dog = new Dog("Poti", 3, "わんわんきゃんきゃん");
  console.log("dog call : " + dog.call());
  console.log("dog howling : " + dog.howling());
});

ajaxGetBtn.addEventListener("click", () => {
  console.log("ajax get start");
  let query = "?name=poti";
  ajaxGetReq.open("GET", "/ajax" + query, true);
  ajaxGetReq.send(null);
  ajaxGetReq.onreadystatechange = function () {
    // 通信の完了時
    if (ajaxGetReq.readyState == 4) {
      // 通信の成功時
      if (ajaxGetReq.status == 200) {
        ajaxGetResult.value = ajaxGetReq.responseText;
      } else {
        console.error("ajax get error" + ajaxGetReq.status);
      }
    } else {
      ajaxGetResult.value = "通信中...";
    }
  };
});

ajaxPostBtn.addEventListener("click",async () => {
  console.log("ajax get start");
  let data = new Object();
  data.name = "taro";
  data.age = 17;
  let stringData = JSON.stringify(data);
  loadingImage();
  ajaxPostReq.open("POST", "/ajax", true);
  ajaxPostReq.setRequestHeader("Content-Type", "application/json");
  ajaxPostReq.send(stringData);
  // ajaxPostReq.send(stringData);
  ajaxPostReq.onreadystatechange = () => {
    // 通信の完了時
    if (ajaxPostReq.readyState == 4) {
      // 通信の成功時
      if (ajaxPostReq.status == 200) {
        let result = ajaxPostReq.responseText;
        console.log(result);
        let array = JSON.parse(result);
        let div = document.getElementById("append-container");
        while(div.firstChild) {
          div.removeChild(div.firstChild);
        }
        let ul = document.createElement("ul");
        array.forEach((obj) => {
          let child = document.createElement("li");
          console.log(obj);
          child.innerHTML = `name :  ${obj.name} | card:  ${obj.card} | limit:  ${obj.timeLimit}`;
          ul.appendChild(child);
        });
        div.appendChild(ul);
        ajaxPostResult.value = "通信完了!　返却リストを以下に表示します。";
      } else {
        console.error("ajax post error" + ajaxPostReq.status);
      }
    } else {
      ajaxPostResult.value = "通信中...";
    }
  };
});

// サーバーからクライアントへの転送の進捗 (ダウンロード)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    let percentComplete = oEvent.loaded / oEvent.total * 100;
    console.log("ダウンロード率：" + percentComplete);
  } else {
    // 全体の長さが不明なため、進捗情報を計算できない
    console.log("ダウンロード率不明")
  }
}


function transferComplete(evt) {
  removeImage();
  console.log("転送が完了しました。");
}

function transferFailed(evt) {
  removeImage();
  console.log("ファイルの転送中にエラーが発生しました。");
}

function transferCanceled(evt) {
  removeImage();
  console.log("ユーザーが転送をキャンセルしました。");
}