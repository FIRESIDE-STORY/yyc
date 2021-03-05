
引入 "fs" 作为 藏经阁

定义 历史 = '历史'
变量 名字 = '李白'
常量 年龄 = (1 + 1 + 1) == "3"

打印(历史)
打印(年龄)

如果(名字 == '李白') {
  打印(历史)
  打印(年龄)

  定义 我 = '我'

  如果(名字 == '李白') {
    打印(历史)
    打印(年龄)

    定义 我 = '我'

  }
}

匹配(名字) {
  场景 '李白':
    打印('故人西辞黄鹤楼, 烟花三月下扬州')
  场景 '张继':
    打印("姑苏城外寒山寺, 夜半钟声到客船")
  场景 '苏轼':
    打印(`人生如逆旅，我亦是行人`)
  默认:
    打印('选择: 李白 | 张继 | 苏轼')
}

匹配(名字) {
  场景 '李白':
    打印('故人西辞黄鹤楼, 烟花三月下扬州')
    终止
  场景 '张继':
    打印("姑苏城外寒山寺, 夜半钟声到客船")
  场景 '苏轼':
    打印(`人生如逆旅，我亦是行人`)
  默认:
    打印('选择: 李白 | 张继 | 苏轼')
}

匹配(名字) {
  场景 '李白':
    打印('故人西辞黄鹤楼, 烟花三月下扬州')
  场景 '张继':
    打印("姑苏城外寒山寺, 夜半钟声到客船")
  场景 '苏轼':
    打印(`人生如逆旅，我亦是行人`)
  默认:
    打印('选择: 李白 | 张继 | 苏轼')
}


函数 文房四宝 => (琴, 棋, 书, 画) {
  打印(琴, 棋, 书, 画)
  返回
}

文房四宝("琴", "棋", "书", "画")


循环 {
  打印(名字)
  打印(名字)
  终止
}


定义 数组 = [1, 2]

遍历 (元素 来自 数组) {
  打印(元素)
}

遍历 (元素 来自 ['1', '2']) {
  打印(元素)
}

定义 文档 = 藏经阁.readFileSync('./README.md', 'utf-8')

打印(文档)


引入 "net" 作为 网络连接

定义 服务器 = 网络连接.createServer()

定义 监听 = 服务器.listen({
  host: 'localhost',
  port: 80
})