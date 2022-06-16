import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaReddit } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin></BsLinkedin></a>
      <a href="https://github.com/" target="_blank"><FaGithub></FaGithub></a>
      <a href="https://www.reddit.com/" target="_blank"><FaReddit></FaReddit></a>

    </div>
  )
}

export default HeaderSocials