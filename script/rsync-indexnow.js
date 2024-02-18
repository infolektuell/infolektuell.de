import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'

const fileContent = await readFile(resolve(process.argv[2]), 'utf-8')
const files = fileContent.split('\n').filter((f) => f.endsWith('.html') && !f.startsWith('tags/'))
if (files.length > 0) {
  const urlList = files.map((f) => process.env.SITE_URL + '/' + f.replace(/index.html$/, ''))
  const body = {
    host: process.env.SITE_URL,
    key: process.env.INDEXNOW_KEY,
    keyLocation: process.env.SITE_URL + '/' + process.env.INDEXNOW_KEY + '.txt',
    urlList,
  }
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      host: 'api.indexnow.org',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    console.error(`Sending URLs to indexnow failed with status ${res.status}: ${res.body}`)
  }
}
