import Link from "next/link"; 

import React from 'react'

export default function Navbar() {
  return (
    <nav>
    <h1>Widget App</h1>
    <Link href="/">Dashboard</Link>
    <Link href="/test">test</Link>
  </nav>
  )
}
