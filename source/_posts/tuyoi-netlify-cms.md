---
title: Netlify CMSが強すぎる
tags:
  - netlify
  - SaaS
date: 2019-07-30T08:15:44.577Z
url: tuyoi-netlify-cms
---
![](https://res.cloudinary.com/nzws/image/upload/v1564474766/tuyoi-netlify-cms/gagbajtkjggvryfm1h4t.png)

このサイトに [Netlify CMS](https://www.netlifycms.org/) を導入しました。  
ちなみにこの記事はCMSで書いてます。

# Netlify CMS って？

Git と連携して動く **静的サイトジェネレータの為の管理画面** を用意してくれるシステムです。

# どこがどう強いの

今まで、Hexoなどの静的サイトジェネレータは、PCからGitのリポジトリにmarkdownファイルを新規作成してコミットしてプッシュして(自動化してなければ)さらにデプロイ作業して...といった感じで割と面倒臭い手段を踏まなければいけませんでした。(スマホではほぼ作成できない)

それが、Netlify CMSを使用する事によって、**全てWeb上で完結できるようになりました。**

# Netlify CMS を構築

configの作成が若干面倒でしたが、[公式のドキュメント](https://www.netlifycms.org/docs/intro/)通りに進めれば動きます。

## 躓いたポイント

* netlify cmsの `config.yml` はそのまま読めるようにしておく必要があります。そのため、 `_config.yml` の `skip_render` に `admin/config.yml` を追加してください。 https://github.com/yuzulabo/blog/commit/2250644c1872733f4b92821595c2bd1055fe897c#diff-aeb42283af8ef8e9da40ededd3ae2ab2
* `admin/index.html` の最初に下記を挿入してください。

```markdown
layout: false
---
```

これをすることで、共通ヘッダーなどが管理画面に読み込まれなくなります。

# 使ってみる

もう普通のブログのように書いていくだけです。

![](https://res.cloudinary.com/nzws/image/upload/v1564474780/tuyoi-netlify-cms/ffcbtee6elrlapgbpwmp.png)

また、GitHubのPRを使用したドラフト機能などもあり、途中で保存する事もできます。

# Netlify CMSのデメリット

つよいつよい言ってますが、デメリットもいくつか感じました。

* 操作がいちいち重い: 直接Gitを操作しているので、一覧を読み込んだり保存するのが目に見えて重いです。
* 画像が柔軟でない: Git LFS, Cloudinary, Uploadcareの3つのメディア管理方法がありますが、どれも制限がきつかったりしてあまり使いたくないというのが正直な所です。ただし、今まで通りGitのディレクトリに直接アップロードする方法もありますが、これはファイルブラウザでアップロードする度に新規コミットが発行されるせいでめちゃくちゃ重いしコミットログが凄いことになるのでおすすめできません。

私の希望的には別途アップロード用の小さいサーバが必要とかでもいいのでS3(互換)アップロードが欲しかったです。(MastodonでDO Spacesを契約しているので)
