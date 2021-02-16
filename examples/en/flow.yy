
const personName = 'tom'

if(personName == 'tom') {
  print(personName)
}

match(personName) {
  case 'tom':
    print('故人西辞黄鹤楼, 烟花三月下扬州')
  case 'steven':
    print("姑苏城外寒山寺, 夜半钟声到客船")
  case 'hui':
    print(`人生如逆旅，我亦是行人`)
  default:
    print('选择: tom | steven | hui')
}

match(personName) {
  case 'tom':
    返回  print('故人西辞黄鹤楼, 烟花三月下扬州')
  case 'steven':
    print("姑苏城外寒山寺, 夜半钟声到客船")
  case 'hui':
    print(`人生如逆旅，我亦是行人`)
  default:
    print('选择: tom | steven | hui')
}

match(personName) {
  case 'tom':
    print('故人西辞黄鹤楼, 烟花三月下扬州')
    终止
  case 'steven':
    print("姑苏城外寒山寺, 夜半钟声到客船")
  case 'hui':
    print(`人生如逆旅，我亦是行人`)
  default:
    print('选择: tom | steven | hui')
}