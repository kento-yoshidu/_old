import Link from "next/link"

export const Button = () => (
  <div className="text-center">
    <Link href="/">
      <a className="text-4xl border-2 text-gray-500 border-gray-500 py-4 px-12 hover:animate-light">
        HOME
      </a>
    </Link>
  </div>
)
