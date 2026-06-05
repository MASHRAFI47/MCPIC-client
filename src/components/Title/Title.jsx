import React from 'react'

const Title = ({ children }) => {
    return (
        <div>
            <h1 className='text-4xl md:text-[4rem] text-[#e8f5f3] leading-none' data-aos="slide-up" data-aos-duration="800">{children}</h1>
        </div>
    )
}

export default Title