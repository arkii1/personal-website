import React from 'react'
import { ReactComponent as GitHubIcon } from '../../assets/icons/github-64.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg'

function Footer() {
  return (
    <div className="w-screen bg-sky-500 flex justify-center items-center gap-3 py-5">
      <a href="https://www.github.com/arkii1" target="_blank" rel="noreferrer">
        <GitHubIcon
          className="drop-shadow-lg fill-white hover:fill-amber-400 cursor-pointer duration-300"
          height="40"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/tommymapp/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon
          className="drop-shadow-lg fill-white hover:fill-amber-400 cursor-pointer duration-300"
          height="40"
        />
      </a>
    </div>
  )
}

export default Footer
