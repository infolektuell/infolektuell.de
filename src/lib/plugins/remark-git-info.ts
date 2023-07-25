import type { RemarkPlugin } from '@astrojs/markdown-remark'
import type { Node } from 'unist'
import type { VFile } from 'vfile'
import type { SimpleGit, SimpleGitOptions, LogResult } from 'simple-git'
import simpleGit from 'simple-git'

type AstroData = {
  frontmatter: Record<string, unknown>
}

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
}

const plugin: RemarkPlugin = function remarkGitInfo() {
  const git: SimpleGit = simpleGit(options)
  return async function (_tree: Node, file: VFile): Promise<void> {
    if (!file.data.astro) {
      return
    }
    const astroData = file.data.astro as AstroData
    const frontmatter = astroData.frontmatter
    if (typeof frontmatter !== 'object') {
      return
    }
    const gitLog: LogResult = await git.log({ file: file.path, strictDate: true })
    frontmatter.date = gitLog.latest?.date ?? null
  }
}

export default plugin
