# Xeno-canto 鳥音快搜

:::info
📦 [點此至 Google Chrome 線上應用程式商店下載](https://chromewebstore.google.com/detail/xeno-canto-bird-sounds/fogelmchjlfpdkhbdikigjnimkbgalbj)
:::

**Xeno-canto 鳥音快搜**是一款基於 Xeno-canto 的 Google Chrome 線上應用程式，幫助您在教學或是日常使用中更快速地查詢鳥音。

![Kapture 2024-08-31 at 19.56.58](https://hackmd.io/_uploads/SkS44Fb2R.gif)

## 功能

- 輸入任意關鍵字、鳥名縮寫代碼、台語俗名、台語羅馬字即可查詢
    - [點此查看台灣鳥名縮寫代碼對照表](https://siansiansu.github.io/ebird-taxonomy-taiwan/)。
- 支援進階搜尋語法。
    - 詳細的說明請參考 [Xeno-canto 搜尋小技巧](https://xeno-canto.org/help/search)。
- 鳥音隨機播放，隨機播放特定地區的鳥音。
- 每筆紀錄提供網站連結：快速連結至完整的 Xeno-canto 頁面。
- 顯示每筆資料的頻譜縮圖：更快速的檢閱每筆資料。
- 快捷鍵搜尋：善用快捷鍵，立即啟動搜索功能。
- 每日更新最新的分類清單。

## 進階搜尋

- **grp**: 群組
- **gen**: 屬
- **ssp**: 亞種
- **rec**: 錄音者
- **cnt**: 國家
- **loc**: 地點
- **rmk**: 錄音者備註
- **seen**: 觀察到動物
- **playback**: 使用錄音
- **also**: 背景物種
- **type**: 聲音類型
- **sex**: 性別
- **stage**: 生命週期
- **method**: 錄音方法
- **nr**: XC 編號
- **lic**: 錄音授權
- **q**: 錄音品質
- **len**: 錄音長度（秒）

## 搜尋範例

- **快速鳥類搜尋:**
    - 在搜尋欄中輸入 **RFWA**
    - 從下拉選單中選擇 **棕面鶯**
- **尋找台灣的錄音:**
    - 選擇鳥種後，在搜尋詞後加上 **loc:taiwan**
    - 範例: `"Abroscopus albogularis" loc:taiwan`
- **搜尋台灣的高品質錄音:**
    - 要篩選最高品質的錄音，請在搜尋詞後加上 **q:A**
    - 完整範例: `"Abroscopus albogularis" loc:taiwan q:A`
- **進階技巧:** 結合多個搜尋條件以獲得更精確的結果。例如:
    - `"Abroscopus albogularis" loc:taiwan q:A type:song` 可搜尋台灣的高品質鳴唱錄音

## 注意事項

- 若搜尋逾時，可能是 Xeno-canto 伺服器負載過高，請稍後再試。
- 預設快捷鍵為 Ctrl+Shift+O，您可以在瀏覽器設定中自訂。
- 當鳥名縮寫代碼符合多個物種時，請從下拉選單選取。

## Bug 回報或是功能建議

有任何操作上的建議或是問題，請聯繫 minsiansu@gmail.com。
