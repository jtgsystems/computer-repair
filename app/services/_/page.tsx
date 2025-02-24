import Link from "next/link"

export default function ServicePage() {
  return (
    <div className="p-4">
      <h1 className="text-[#1D4D84] font-bold text-3xl mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#E4EDEF] rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
          <h2 className="text-[#1D4D84] font-bold text-xl mb-2">Service 1</h2>
          <p className="text-gray-700">Description of service 1.</p>
          <Link
            href="/services/service1"
            className="bg-[#1D4D84] hover:bg-[#4B6E97] text-white px-4 py-2 rounded-md mt-4"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-[#E4EDEF] rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
          <h2 className="text-[#1D4D84] font-bold text-xl mb-2">Service 2</h2>
          <p className="text-gray-700">Description of service 2.</p>
          <Link
            href="/services/service2"
            className="bg-[#1D4D84] hover:bg-[#4B6E97] text-white px-4 py-2 rounded-md mt-4"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-[#E4EDEF] rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
          <h2 className="text-[#1D4D84] font-bold text-xl mb-2">Service 3</h2>
          <p className="text-gray-700">Description of service 3.</p>
          <Link
            href="/services/service3"
            className="bg-[#1D4D84] hover:bg-[#4B6E97] text-white px-4 py-2 rounded-md mt-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

