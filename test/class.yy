特征 古代 {
  基态(人物) {
    此.名字 = 人物
  }

  拿酒来() {
    打印('诗仙')
  }
}

定义 李白 = 古代.基态('人物')

断言(李白.名字 == '人物')
李白.拿酒来()