import Link from "next/link"

function NavLink({ category, isActive }) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"} `}
    >
      {category}
    </Link>
  )
}

export default NavLink
