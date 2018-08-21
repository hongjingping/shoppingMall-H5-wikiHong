const fs = require('fs')

fs.readFile('./data_json/goods.json', 'utf-8', (err, data) => {

  let newData = JSON.parse(data)
  let pushData = []
  let i = 0
  newData.RECORDS.map((value, index) => {
    if (value.IMAGE1 != null) {
      i++
      console.log('value.name', value.name)
      pushData.push(value)
    }
  })
  console.log('i', i)
  console.log('pushData', pushData)
  fs.writeFile('./data_json/newGoods.json', JSON.stringify(pushData), (err) => {
    if (err) console.log('写文件操作失败')
    else console.log('写文件操作成功')
  })
})
