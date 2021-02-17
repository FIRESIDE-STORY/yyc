## 目录
---
---


<details>
<summary> <mark>operators</mark> </summary>

  * <summary> <mark>1.1 basic operator</mark> </summary>

    ```js
    (a + b)
    (a - b)
    (a / b)
    (a * b)
    ```
  * <summary> <mark>1.2 logic operator</mark> </summary>

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
<summary> <mark>statement</mark> </summary>

  * <summary> <mark>2.1 def</mark> </summary>

    ```js
    def world = "hello"
    ```
  * <summary> <mark>2.2 const</mark> </summary>

    ```js
    const name = "china"
    ```
  * <summary> <mark>2.3 let</mark> </summary>

    ```js
    let year = 5000
    ```
  * <summary> <mark>2.4 array</mark> </summary>

    ```js
    def arr = [1, 2, 3]
    ```
  * <summary> <mark>2.5 JSON</mark> </summary>

    ```js
    def jsonObject = { name: 'yy' }
    ```
</details>

<details>
<summary> <mark>flow</mark> </summary>

  * <summary> <mark>3.1 if</mark> </summary>

    ```js
    if(name == 'china') {
      print("Descendants of the Dragon")
    }

    ```
  * <summary> <mark>3.2 match</mark> </summary>

    ```js
    match(name) {
      case 'Libai':
        返回 print('故人西辞黄鹤楼, 烟花三月下扬州')
      case 'Zhangji':
        返回 print("姑苏城外寒山寺, 夜半钟声到客船")
      case 'Sushi':
        返回 print(`人生如逆旅，我亦是行人`)
      默认:
        返回 print('选择: 李白 | 张继 | 苏轼')
    }

    ```
  * <summary> <mark>3.3 loop</mark> </summary>

    ```js
    loop {
      print('选择: 李白 | 张继 | 苏轼')
      break
    }

    ```
  * <summary> <mark>3.4 for</mark> </summary>

    ```js
    def names = ['libai', 'Zhangji', 'Sushi']
    for (currentName from names) {
      print(currentName)
    }
    ```
</details>

<details>
<summary> <mark>function</mark> </summary>

  * <summary> <mark>4.1 define</mark> </summary>

    ```js
    fn setName => (name) { print(name) }
    ```
  * <summary> <mark>4.2 call function</mark> </summary>

    ```js
    setName('Libai');
    ```
  * <summary> <mark>4.3 return</mark> </summary>

    ```js
    return "Libai";
    ```
</details>

<details>
<summary> <mark> Class</mark> </summary>

  * <summary> <mark>5.1 define</mark> </summary>

    ```js
    Class Ancient {
      constructor(person) {
        this.person = person
      }

      say() {
        print('Poetry')
      }
    }
    ```
  * <summary> <mark>5.2 instance</mark> </summary>

    ```js
    def libai = Ancient.new('Libai');
    ```
  * <summary> <mark>5.2 call</mark> </summary>

    ```js
    libai.say()
    ```
</details>

<details>
<summary> <mark> module</mark> </summary>

  * <summary> <mark>6.1 import</mark> </summary>

    ```js
    import fs as fs
    ```
  * <summary> <mark>6.2 export</mark> </summary>

    ```js
    // TODO
    export fs
    ```
</details>

<details>
<summary> <mark> others</mark> </summary>

In the history of programming language development, the grammatical structure is mostly based on English phrases, such as C (Denmark), Java (Canada), Python (Netherlands), Lua (Brazil), Rust (U.S.), but cuneiform is used as a grammatical expression , With natural simplicity and beauty, this project is only for learning and exploration, and does not discuss the advantages and disadvantages of language and culture
</details>

---

