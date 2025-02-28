import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BlogLayout from "@/components/BlogLayout"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | PC Mechanix",
  description: "Stay updated with the latest technology trends, tips, and insights from PC Mechanix.",
  keywords: "PC Mechanix blog, tech blog, IT tips, computer maintenance, cybersecurity tips, cloud computing, technology trends, IT support advice, business technology, computer tips, tech insights, Toronto IT blog",
}

const blogPosts = [
  {
    title: "5 Essential Tips for Maintaining Your Computer",
    excerpt: "Learn how to keep your computer running smoothly with these simple maintenance tips.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-06-15",
    slug: "5-essential-computer-maintenance-tips",
  },
  {
    title: "The Future of Cloud Computing: What to Expect",
    excerpt: "Explore the upcoming trends and innovations in cloud computing technology.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-06-10",
    slug: "future-of-cloud-computing",
  },
  {
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Protect your small business from cyber threats with these essential security practices.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-06-05",
    slug: "cybersecurity-for-small-businesses",
  },
  {
    title: "How to Choose the Right IT Support Provider",
    excerpt: "Factors to consider when selecting an IT support company for your business.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-05-30",
    slug: "choosing-it-support-provider",
  },
  {
    title: "The Impact of 5G on Business Technology",
    excerpt: "Discover how 5G technology is revolutionizing business communications and operations.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-05-25",
    slug: "5g-impact-on-business-technology",
  },
  {
    title: "Top 10 Software Tools for Remote Work",
    excerpt: "Essential software applications to boost productivity and collaboration in remote teams.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-05-20",
    slug: "top-software-tools-remote-work",
  },
]

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" variant="outline">
          Load More Posts
        </Button>
      </div>
    </BlogLayout>
  )
}

