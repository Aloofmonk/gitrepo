import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
	<header className='header'>
		<div className="container">
			<div className="logo">
				<Link href="/">Git Repo</Link>
			</div>
			<div className='links'>
				<Link href="/about">About</Link>
				<Link href="/code/repos">Repository</Link>
			</div>
		</div>
	</header>
  )
}

export default Header