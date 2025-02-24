import { promises as fs } from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), "data/blog")

export interface Post {
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  slug: string
  categories: string[]
  previous?: Post
  next?: Post
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContent = await fs.readFile(filePath, "utf8")
      const post = JSON.parse(fileContent) as Post
      return { ...post, slug: fileName.replace(/\.json$/, "") }
    }),
  )
  const sortedPosts = allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  for (let i = 0; i < sortedPosts.length; i++) {
    if (i > 0) {
      sortedPosts[i].previous = sortedPosts[i - 1]
    }
    if (i < sortedPosts.length - 1) {
      sortedPosts[i].next = sortedPosts[i + 1]
    }
  }
  return sortedPosts
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const filePath = path.join(postsDirectory, `${slug}.json`)
  try {
    const fileContent = await fs.readFile(filePath, "utf8")
    const post = JSON.parse(fileContent) as Post
    return { ...post, slug }
  } catch (error) {
    return undefined
  }
}

