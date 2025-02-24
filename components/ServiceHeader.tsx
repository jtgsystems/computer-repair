import Image from "next/image"

interface ServiceHeaderProps {
  title: string
  description: string
  imageUrl: string
}

export default function ServiceHeader({ title, description, imageUrl }: ServiceHeaderProps) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <Image src={imageUrl} alt={title} width={800} height={300} className="rounded-lg mb-6" />
      <p className="text-lg mb-6">{description}</p>
    </>
  )
}

