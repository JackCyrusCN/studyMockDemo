import { Random } from 'mockjs'

Random.extend({
  //自定义函数名：function(){}
  fruit: function() {
    const arr = ['apple', 'banana', 'orange', 'Hami-melon', 'pear']
    return this.pick(arr)
  }
})