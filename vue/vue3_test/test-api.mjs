import axios from 'axios'

const apis = [
  {
    name: 'UOMG API (JSON格式)',
    url: 'https://api.uomg.com/api/rand.qinghua?format=json',
  },
  {
    name: 'UOMG API (Text格式)',
    url: 'https://api.uomg.com/api/rand.qinghua?format=text',
  },
  {
    name: '66mz8 API',
    url: 'https://api.66mz8.com/api/sweet.php',
  },
  {
    name: 'LKBlog API',
    url: 'https://api.lkblog.net/ws/api.php',
  },
]

async function testAPI(api) {
  console.log(`\n测试: ${api.name}`)
  console.log(`URL: ${api.url}`)

  try {
    const response = await axios.get(api.url, { timeout: 5000 })
    console.log('✅ 状态码:', response.status)
    console.log('✅ 响应数据:', JSON.stringify(response.data).substring(0, 200))
    return { name: api.name, status: 'success', data: response.data }
  } catch (error) {
    console.log('❌ 错误:', error.message)
    return { name: api.name, status: 'failed', error: error.message }
  }
}

async function main() {
  console.log('开始测试土味情话 API...\n')
  console.log('='.repeat(50))

  const results = []
  for (const api of apis) {
    const result = await testAPI(api)
    results.push(result)
  }

  console.log('\n' + '='.repeat(50))
  console.log('\n测试结果汇总:')
  console.log('-'.repeat(50))

  results.forEach((result) => {
    const status = result.status === 'success' ? '✅ 可用' : '❌ 不可用'
    console.log(`${status} - ${result.name}`)
  })

  const successCount = results.filter((r) => r.status === 'success').length
  console.log(`\n总计: ${successCount}/${apis.length} 个 API 可用`)
}

main().catch(console.error)
