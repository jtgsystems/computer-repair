import { execSync } from "child_process"
import fs from "fs"
import path from "path"

// Run the build with bundle analyzer
console.log("Building and analyzing bundle...")
execSync("ANALYZE=true next build", { stdio: "inherit" })

// Read the bundle analysis JSON file
const statsFile = path.resolve(".next/analyze/bundle-stats.json")
const stats = JSON.parse(fs.readFileSync(statsFile, "utf8"))

// Analyze the chunks
const chunks = stats.chunks.sort((a, b) => b.size - a.size)

console.log("\nLargest chunks:")
chunks.slice(0, 5).forEach((chunk) => {
  console.log(`${chunk.names.join(", ")} - ${(chunk.size / 1024).toFixed(2)} KB`)
})

// Analyze modules
const modules = stats.modules.sort((a, b) => b.size - a.size)

console.log("\nLargest modules:")
modules.slice(0, 10).forEach((module) => {
  console.log(`${module.name} - ${(module.size / 1024).toFixed(2)} KB`)
})

// Identify potentially unused exports
console.log("\nPotentially unused exports:")
modules.forEach((module) => {
  if (module.reasons && module.reasons.length === 0) {
    console.log(`${module.name} - ${(module.size / 1024).toFixed(2)} KB`)
  }
})

console.log("\nAnalysis complete. Check the output above for optimization opportunities.")

