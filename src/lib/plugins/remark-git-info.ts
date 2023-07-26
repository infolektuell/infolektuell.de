// noinspection SpellCheckingInspection

import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Node } from 'unist'
import type { VFile } from 'vfile'
import type { SimpleGit, SimpleGitOptions, LogResult } from 'simple-git'
import simpleGit from 'simple-git'

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
    data.frontmatter.lastModified = gitLog.latest?.date ?? null
  }
}

export default plugin
