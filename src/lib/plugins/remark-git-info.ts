// noinspection SpellCheckingInspection

import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Node } from 'unist'
import type { VFile } from 'vfile'
import type { SimpleGit, SimpleGitOptions, LogResult } from 'simple-git'
import simpleGit from 'simple-git'
import { stat } from 'node:fs/promises'

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
}

const plugin: RemarkPlugin = function remarkGitInfo() {
  const git: SimpleGit = simpleGit(options)
  return async function (_tree: Node, file: VFile): Promise<void> {
    const data = file.data.astro
    if (!data?.frontmatter) {
      return
    }
    const gitLog: LogResult = await git.log({ file: file.path, strictDate: true })
    data.frontmatter.revisionsTotal = gitLog.total
    if (gitLog.latest) {
      data.frontmatter.lastModified = gitLog.latest.date
    } else {
      const info = await stat(file.history[0])
      data.frontmatter.lastModified = info.mtime
    }
  }
}

export default plugin
