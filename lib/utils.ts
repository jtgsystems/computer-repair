import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
