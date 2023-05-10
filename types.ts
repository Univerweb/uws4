import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends MarkdownParsedContent {
  slug: string
  createdAt: Date
  updatedAt: Date
  tags: string[]
  industry?: string
  lead: string
  link?: string
}

export interface Nav {
  slug?: string
  title?: string
}

export interface Error {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  stack: string
}
