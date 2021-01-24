# README (to 候補者様)

この度は、イタンジに対してご興味をお持ち頂き、
またお時間頂きましてありがとうございます。

ご縁があってご入社頂き、イタンジで仲間として業務頂く事になった際、
普段の仕事の進め方を見せて頂くための「coding interview」を、
採用プロセスの一環として実施させて頂きたいと考えています。

あくまでも採用プロセスのため、大変僭越ながら合否を付けさせて頂く事になってしまうのですが、
その過程で、お互いについでの理解を深めチームとして共同作業するイメージをお互いに持つ事を目的としています。
そのため、いわゆる競技プログラミングのような問題ではなく、Ruby on RailsベースのWebアプリケーションを実装する、
実際の業務を想定した内容となっています。


## 当日のお願い

* 当日は、Google Meetでカメラonでのビデオ通話に加えて、候補者様のPCの全画面共有を行って頂く想定です。
* 当日は、面接の様子を面接の品質向上のために録画させていただく場合がございます。
  * 録画を開始する際に、当日口頭でもお伺いいたします。
  * また、採用面接以外の用途に利用する事はございません。
* 品質向上のために、担当者以外の者がオブザーバーで参加させて頂く場合がございます。

## 当日までにご準備いただきたい事

### docker install
下記リンクを参考に、docker / docker-composeコマンドが利用できる状態にsetupをお願いいたします。
[Get Docker](https://docs.docker.com/get-docker/)
[install Docker Compose](http://docs.docker.jp/compose/install.html)

また、dockerのmemoryを大きくしておくこと(可能なら4GB~)を推奨します。


### application containerのsetup


下記のコマンドを実行し、セットアップとアプリケーションの起動を行います。

```
$ bin/setup
$ docker-compose up -d
```

see http://localhost:3000/

稀にMySQLの起動に失敗する場合は、volumeの削除後、docker engineを再起動してください。

localで, RailsのTop画面が無事表示されれば準備は完了です。
当日までお待ちください。


#### 利用技術

尚、参考までに本リポジトリの利用技術は下記となっています。
`config/database.yml` で接続先DBにdocker上のmysqlを選択する設定をしている以外は、殆ど真っ新にrails newした状態です。

* rails v6.0.1
* MySQL 5.7


#### (windows userの方のみ)

coding interviewでは、setting時間の短縮の都合でrails applicationをdocker containerとして実行し、
docker containerからlocalにvolume mountする事を想定しています。
そのため、予め共有ドライブへのvolume mountの設定をお願いします。

[VOLUME MOUNTING REQUIRES SHARED DRIVES FOR LINUX CONTAINERS](https://docs.docker.com/docker-for-windows/troubleshoot/#volume-mounting-requires-shared-drives-for-linux-containers)
