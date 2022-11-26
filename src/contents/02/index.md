---
title: "【TS】配列の重複を扱う"
date: "2022-04-15"
update: "2022-04-15"
languages: ["TypeScript"]
tags: ["配列", "重複"]
icon: "🙇"
---

# 配列で重複する値を取り扱う

以下`arr`の例だと、`2`と`3`が重複しています。

```typescript
const arr = [1, 2, 2, 3, 3]
```

この重複している値の取り扱い方について考えます。

## 重複をなくす

まずは重複をなくす例を考えます。`arr`の場合、`2`と`3`の重複をなくし、`[1, 2, 3]`という配列を生成します。

また、新しい配列を返しているため`arr`には影響しません。

```typescript
const arr = [1, 2, 2, 3, 3]

console.log([...new Set(arr)])
//=> [ 1, 2, 3 ]

// 影響なし
console.log(arr)
//=> [1, 2, 2, 3, 3]
```

## 重複していない値を取得する

上記例では重複を取り除きましたが、重複していない値を取得するにはどうすればいいでしょうか。

つまり、重複していない1のみを、`[1]`という風に取得したいわけです。`filter`を使います。

## 参考

[String.prototype.lastIndexOf() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
