---
slug: ebird-mcp-server
tags: [ebird]
---

# 結合 eBird 與 AI：用 MCP Server 打造你的個人鳥類資料助理

![demo](/ebird-mcp-server/demo2.gif)

這是一個結合 eBird 與 Model Context Protocol (MCP) Server 的工具，讓使用者可以透過自然語言，直接在 Claude 的對話視窗中查詢鳥類觀測資料。

<!-- truncate -->

## 功能特色

以下是一些可以使用 eBird MCP Server 查詢觀測資料的提示詞範例，AI 會自行判斷是否需要使用 eBird MCP Server，或者也可以在提示詞告訴 AI 使用 eBird 資料：

### 鳥類觀測資料 (Observations)

最少應包含時間、地點，提示詞描述越精確，越能得到準確的結果。

**1. 查詢特定地區近期鳥類觀測**

```
請問嘉義布袋最近出現了哪些鳥？
```


**2. 查詢特定地區、特定鳥種的觀測**

```
台南七股最近有黑面琵鷺的觀測紀錄嗎？
```

**3. 查詢特定地區的稀有鳥種（Notable）觀測**

```
新竹地區最近有什麼稀有鳥類出現？
```

### 賞鳥紀錄 (Checklists)

**1. 查詢某日期在特定地區貢獻最多觀測清單的人。**

```
請列出2025年6月26日在台北地區 eBird 貢獻 Top 100 鳥友。
```

**2. 查詢特定日期的所有清單**

```
請給我2024年6月15日高雄地區提交的所有鳥類清單。
```

**3. 查詢最近提交的清單**

```
請提供台南最近提交的鳥類清單。
```

**4. 取得特定日期清單的摘要統計**

```
請總結2024年6月20日新北市的所有觀測清單摘要。
```
**5. 查詢特定清單細節**

```
請提供清單編號 S12345678 的詳細觀察資料。
```

### 熱點與物種 (Hotspots)

**1. 查詢特定地區的賞鳥熱點**

```
請列出台南所有 eBird 賞鳥熱點。
```

**2. 查詢附近的賞鳥熱點**

```
請列出我目前位置附近5公里內的賞鳥熱點。
```

### 物種 (Taxonomy)

**1. 查詢 eBird 官方鳥類分類名錄**

```
請提供黑面琵鷺的 eBird 鳥類分類名錄資料。
```

**2. 查詢特定物種可被辨識的亞種或分類型態**

```
請列出白腹秧雞的所有亞種。
```

## 前置準備

在開始之前，請完成以下準備工作。

### 1. 取得 eBird API 金鑰

您必須擁有一個 eBird 帳號，並前往以下網址申請 API 金鑰：

[https://ebird.org/api/keygen](https://ebird.org/api/keygen)

申請完成後，請將您的金鑰複製下來，稍後會用到。

### 2. 安裝 Claude 桌面應用程式

本工具需要搭配 Claude 桌面應用程式使用。請至官網下載並安裝：

[https://claude.ai/download](https://claude.ai/download)

安裝完成後，登入您的 Claude 帳號。

### 3. 安裝 Python

請參考[給自學者的Python教學(0) : 如何安裝Python(Mac/Windows)](https://chunyeung.medium.com/%E7%B5%A6%E8%87%AA%E5%AD%B8%E8%80%85%E7%9A%84python%E6%95%99%E5%AD%B8-1-%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%9Dpython-126f8ce2f967)

## 安裝與執行

### 1. 設定 Python 環境

```bash
# Clone 專案或點選下方連結手動下載
git clone git@github.com:siansiansu/ebird-mcp-server.git

# 進入專案目錄
cd /path/to/ebird-mcp-server

# 安裝專案依賴套件
pip install -r requirements.txt
```

:::info
專案連結：[https://github.com/siansiansu/ebird-mcp-server](https://github.com/siansiansu/ebird-mcp-server)
:::

### 2. 設定 Claude 桌面應用程式

1. 打開 Claude 桌面應用程式。

2. 將滑鼠移到導覽列，點選 **Settings**

![image](/ebird-mcp-server/settings.png)

3. 找到 **Developer** 區塊，點擊 **Edit Config**，修改 `claude_desktop_config.json` 檔案。
4.  將以下 JSON 內容貼入，並替換成您自己的設定：

```json
{
  "mcpServers": {
    "ebird-api": {
      "command": "/path/to/ebird-mcp-server/.venv/bin/python",
      "args": [
        "/path/to/Workspace/ebird-mcp-server/server.py"
      ],
      "env": {
        "EBIRD_API_KEY": "你的 eBird API 金鑰"
      }
    }
  }
}
```

![image](/ebird-mcp-server/config.png)

**請務必修改以下路徑與金鑰**：
- `command`: `python` 執行檔絕對路徑。
- `args`: `server.py` 的絕對路徑。
- `EBIRD_API_KEY`: 您在第一步取得的 eBird API 金鑰。

### 3. 執行 MCP Server

設定完成後重新啟動 Claude 桌面版，Claude 會自動啟動並管理這個 MCP Server。

![](/ebird-mcp-server/claude.png)

進入先前的設定頁面可以看到關於 eBird MCP Server 的設定。

![](/ebird-mcp-server/server.png)

之後回到聊天頁面就可以使用囉！

![](/ebird-mcp-server/demo3.gif)
