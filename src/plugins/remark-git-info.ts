// noinspection SpellCheckingInspection

import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { SimpleGit, SimpleGitOptions, LogResult } from 'simple-git'
import simpleGit from 'simple-git'
import { stat } from 'node:fs/promises'

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
}

const plugin: RemarkPlugin = function remarkGitInfo() {
  const git: SimpleGit = simpleGit(options)
  return async function (_tree, file): Promise<void> {
    file.data.astro ??= { frontmatter: {} }
    const fm = file.data.astro.frontmatter
    const gitLog: LogResult = await git.log({ file: file.path, strictDate: true })
    fm.revisionsTotal = gitLog.total
    if (gitLog.latest) {
      fm.lastModified = gitLog.latest.date
    } else {
      const info = await stat(file.history[0])
      fm.lastModified = info.mtime
    }
  }
}

export default plugin
