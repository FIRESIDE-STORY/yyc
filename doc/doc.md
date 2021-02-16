## 目录
---
---


<details>
<summary> <mark>一 操作符</mark> </summary>

  * <summary> <mark>1.1 算术运算</mark> </summary>

    ```js
    (a + b)
    (a - b)
    (a / b)
    (a * b)
    ```
  * <summary> <mark>1.2 逻辑运算</mark> </summary>

    ```js
    (a > b)
    (a >= b)
    (a < b)
    (a <= b)

    (a == b)
    (a != b)

    (a || b)
    (a && b)
    (!a)
    ```
</details>


<details>
<summary> <mark>二 变量声明</mark> </summary>

  * <summary> <mark>2.1 定义</mark> </summary>

    ```js
    定义 世界 = "我们"
    ```
  * <summary> <mark>2.2 常量</mark> </summary>

    ```js
    常量 名字 = "中国"
    ```
  * <summary> <mark>2.3 变量</mark> </summary>

    ```js
    变量 年龄 = 1
    ```
  * <summary> <mark>2.4 数组</mark> </summary>

    ```js
    变量 数组 = [1, 2, 3]
    ```
  * <summary> <mark>2.5 JSON</mark> </summary>

    ```js
    变量 对象 = { name: 'yy' }
    ```
</details>

<details>
<summary> <mark>三 流程控制</mark> </summary>

  * <summary> <mark>3.1 如果</mark> </summary>

    ```js
    如果(名字 == '中国') {
      打印("龙的传人")
    }

    ```
  * <summary> <mark>3.2 匹配</mark> </summary>

    ```js
    匹配(人物) {
      场景 '李白':
        返回 打印('故人西辞黄鹤楼, 烟花三月下扬州')
      场景 '张继':
        返回 打印("姑苏城外寒山寺, 夜半钟声到客船")
      场景 '苏轼':
        返回 打印(`人生如逆旅，我亦是行人`)
      默认:
        返回 打印('选择: 李白 | 张继 | 苏轼')
    }

    ```
  * <summary> <mark>3.3 循环</mark> </summary>

    ```js
    循环 {
      打印('选择: 李白 | 张继 | 苏轼')
      终止
    }

    ```
  * <summary> <mark>3.4 遍历</mark> </summary>

    ```js
    定义 人名 = ['李白', '张继', '苏轼']
    遍历 (当前人名 来自 人名) {
      打印(当前人名)
    }
    ```
</details>

<details>
<summary> <mark>四 函数定义</mark> </summary>

  * <summary> <mark>4.1 定义</mark> </summary>

    ```js
    函数 获取名字 => (参数) { 打印(参数) }
    ```
  * <summary> <mark>4.2 调用</mark> </summary>

    ```js
    获取名字('李白');
    ```
  * <summary> <mark>4.3 返回</mark> </summary>

    ```js
    返回 "李白";
    ```
</details>

<details>
<summary> <mark>五 特征定义</mark> </summary>

  * <summary> <mark>5.1 声明</mark> </summary>

    ```js
    特征 古代 {
      为文(人物) {
        此.人物 = 人物
      }

      子曰() {
        打印('诗仙')
      }
    }
    ```
  * <summary> <mark>5.2 实例化</mark> </summary>

    ```js
    定义 李白 = 特征.为文('李白');
    ```
  * <summary> <mark>5.2 调用</mark> </summary>

    ```js
    李白.子曰()
    ```
</details>

<details>
<summary> <mark>六 模块管理</mark> </summary>

  * <summary> <mark>6.1 导入</mark> </summary>

    ```js
    引入 藏书阁.函数库.*
    引入 藏书阁.函数库.*
    ```
  * <summary> <mark>6.2 导出</mark> </summary>

    ```js
    // TODO
    导出 蚂蚁.搬家.*
    导出 蚂蚁.搬家.*
    ```
</details>

<details>
<summary> <mark>七 其他</mark> </summary>

在编程语言发展史中, 语法结构多以英文词组为主, 如C(丹麦), Java(加拿大), Python(荷兰), Lua(巴西), Rust(美国), 但楔形文字作为一种语法表达, 具有天然的简练和美感, 本项目也仅仅是作为一种学习和探索, 不讨论语言文化的优劣
</details>

---

