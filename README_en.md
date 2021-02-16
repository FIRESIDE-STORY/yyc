* [中文](README.md)

### Description

YY is an experimental project, the goal is to achieve Chinese programming, while also supporting custom languages (English, Japanese, etc.)

---
---

### Usage

```js
Class Poetry {
  constructor(person) {
    this.person = person
  }

  say() {
    match(this.person) {
      case 'LiBai':
        return print('故人西辞黄鹤楼, 烟花三月下扬州')
      case 'ZhangJi':
        return print("姑苏城外寒山寺, 夜半钟声到客船")
      case 'SuShi':
        return print(`人生如逆旅，我亦是行人`)
      default:
        return print('选择: 李白 | 张继 | 苏轼')
    }
  }

}

def l = new Poetry('LiBai')
def z = new Poetry('ZhangJi')
def s = new Poetry('SuShi')

l.say();
z.say();
s.say();
```

* [Documentation](doc/doc.md)

---
Y-Y
---
