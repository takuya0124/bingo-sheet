# bingo-sheet
## 実装内容；level2
    ビンゴシートが自動で作成され，ユーザーがビンゴシートのマスをクリックすることで色が変わる．また，リーチorビンゴ判定の時，リーチorビンゴが表示される．

## 利用したライブラリ：
    vue.js
    bootstrap5

## 課題に対する感想，考察
    課題の難易度としては，普通であった．
    課題の作成手順としては，１，ビンゴシートを表示させる．２，ビンゴシートの数字の制約を満たすように配列を生成．．．など課題を分解して行っていた．
    どの様に実装すべきか迷う部分はあまりなかった．しかし，前の変数のみでは実装できない点が生まれて，変数を増やすことを行ったり，修正したりしたので，仕様書のようなものでどのような変数が必要なのかというものを把握しておけば，無駄に変数を増やすことや修正することなくより効率的に利用できたのではないかと考えている．
    また，実装している時に，vue.jsやbootstrapの点で認識が甘いところがあり，再度学習を行った部分があった．色んな言語を扱う上で根本的な部分は一緒であるが，言語ごとの特有の違いの部分が曖昧になっていたと感じ，その様な部分を再度学習行った．
    
    デザイン的な部分では，どこがリーチorビンゴなのか判定できているが，どの様に表示させるのかという部分がうまく形にできなかった．例えば，リーチorビンゴだったらその列を光らせるなど考えたが，ダブルリーチやトリプルリーチなどの場合，光る部分が多くて逆にわかりずらい可能性が高いと感じて実装は行わなかった．また，表示する形としてより良いデザインがもっとあるのではないかと感じた．