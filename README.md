# ファイル構造
```
.
├── README.md
└── src
    ├── App.vue
    ├── components
    │   └── pages
    ├── main.js
    ├── package-lock.json
    ├── package.json
    ├── router
    ├── template.html
    └── webpack.config.js
```

### エントリーポイント
- `template.html` に `main.js` を使って `App.vue` をマウント
- `App.vue` はヘッダー・フッターやルーティング先のビューを表示するのみ
    - ビューに表示する内容は components 以下に作成
- `vue-router` に関する設定は `router` ディレクトリ以下に作成
- `webpack` の設定は `webpack.config.js` に記述
- `eslint` の設定は `.eslintrc.yml` に記述

# ビルド方法
### 前準備
1. `src` ディレクトリに移動
2. `npm install`

### ビルド
##### 開発用ビルド
- `npm run build`
- `npm run watch`
    - ビルド関連ファイルの変更を感知して自動でリビルドを行う (リソース監視)

##### 本番用ビルド
- `npm run build:pr`

### 実行
- 自動生成された `dist` 以下にある `index.html` を開く

# リント設定
### テンプレート
- Airbnb をベースにインデントサイズを `4` に変更

### 実行タイミング
- コードのビルド時に自動実行・一部を自動修正