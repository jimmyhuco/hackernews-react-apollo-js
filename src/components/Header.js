import React from 'react'

const Header = () => {
  return (
    <div className='flex pa1 justify-between nowrap orange'>
      <div className='flex flex-fixed black'>
        <div className='fw7 mr1'>Hacker News</div>
        <a href='/' className='ml1 no-underline black'>
            new
        </a>
        <div className='ml1'>|</div>
        <a href='/create' className='ml1 no-underline black'>
            submit
        </a>
      </div>
    </div>
  )
}

export default Header
