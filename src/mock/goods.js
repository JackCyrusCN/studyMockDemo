import Mock from 'mockjs'

Mock.mock('/api/goodslist', 'get', {
    status: 200,
    message: '获取商品列表成功！',
    'data|5-10': [
      {
        id: '@increment(1)',
        // 'id|+1': 0,
        // name: '@cword(2,8)',
        name: '@fruit()',
        price: '@natural(15,30)',
        amount: '@natural(5,10)',
        img: '@dataImage(78x78)'
      }
    ]
  })
  
  Mock.mock('/api/addgoods', 'post', function (option) {
    // option是请求相关的参数
    console.log(option)
    return Mock.mock({
      status: 200,
      message: '@cword(4,8)'
    })
  })
  
  Mock.mock(/\/api\/getgoodslist\//, 'get', function (option) {
    console.log(option)
  
    // 使用正则表达表，来提取字符串中的参数
    const res = /\/api\/getgoodslist\/(\d+)/.exec(option.url)
    console.log(res)
    return Mock.mock({
      status: 200,
      message: '获取商品1成功！',
      data: {
        id: res[1] - 0,
        name: '@cword(2,8)',
        price: '@natural(15,30)',
        amount: '@natural(5,10)',
        img: '@dataImage(78x78)'
      }
    })
  })