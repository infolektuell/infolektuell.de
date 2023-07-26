// noinspection SpellCheckingInspection

import type { DataMap as OriginalDataMap } from 'vfile'

export module 'vfile' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DataMap extends OriginalDataMap {
    astro: {
      frontmatter: Record<string, unknown>
    }
  }
}
