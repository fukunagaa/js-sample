# js-sample
フレームワークなしのsample
javascriptを理解するためにサンプルを作成

### 使用した技術
1. DOM操作
2. SERVER処理
3. CLIANT処理
4. GET SUBMIT
5. POST SUBMIT
6. GET AJAX
7. POST AJAX
8. LOADING CSS

##### 説明
- DOM操作
eventLisnerを使用して、DOM操作。
- SERVER処理
拡張子やリクエストを元に、処理の受け方を変えてみました。
getリクエストのクエリパラメータの取得、postリクエストのData取得をしています。
jsonをString変換し、クライアント側へ返すことでクライアント処理でJSONを扱えるようにしています。
- CLIANT処理
ES2015(ES6)を使用したサンプルを作成しました。
AJAXの送信やeventLisnerでハンドリングをしています。
- GET SUBMIT
クエリパラメータを追加して、サーバへ渡しています。
- POST SUBMIT
画面遷移用に作成しました。
- GET AJAX
簡単なクエリパラメータをリクエストし文字列をレスポンスする処理を書いています。
- POST AJAX
POSTでJSONをリクエストし、JSON(STRING型)をレスポンスする処理を書いています。
- LOADING CSS
POSTリクエスト時にサーバ処理に時間がかかる際のLOADINGにCSSで書きました。
