# try vanilla-extract with Next.js

create-next-app で生成されるページを [vanilla-extract](https://vanilla-extract.style/) に置き換えてみたリポジトリ

セットアップは [公式を参照](https://vanilla-extract.style/documentation/setup/#nextjs)

## ざっと触った第一印象

- 👍: 十分アプリケーション構築はできそう
- 👍: theming はゆるふわだけど補完も効くので十分
- 🤔: 自身以外へのスタイル適用はできない（＝ `a > &` は自分が対象だから OK だけど `& > a` はだめ）、という制約が UI ライブラリと組み合わせるときは障害になりそう
- 🤔: padding とか毎回 template string 使わないといけないの面倒（ユーティリティ作れば解決できる範囲）
- 💬: ビルド時に静的な CSS が出力されるので、CSS in JS よりパフォーマンス出そう
- 💬: 好み的には template string literal 型のほうが好きではある
- ❓: まだ使いきれてない機能あるので試してみる必要あり
- ❓: 動的なテーマ変更できる？これ
