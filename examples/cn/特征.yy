特征 文学 {
  文人相轻(对不对) {
    打印(对不对)
    打印(此)
  }

  设置名字(名字) {
    此.名字 = 名字
  }

  获取名字() {
    返回 此.名字
  }
}

定义 实例 = 文学.基态()
实例.文人相轻("对")
实例.设置名字("李白")
打印(实例.名字)

定义 名字 = 实例.获取名字()
打印(名字)
