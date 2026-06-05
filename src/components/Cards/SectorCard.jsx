import React, { useRef } from 'react'

const SectorCard = ({ number, icon, cardTitle, cardSubTitle }) => {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -12
        const rotateY = ((x - centerX) / centerX) * 12

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`
    }

    const handleMouseLeave = () => {
        const card = cardRef.current
        if (!card) return
        card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    }


    return (
        <div>
            <div href=""
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="my-12 mx-2 cursor-pointer block transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>

                {/* content */}
                <div className="card bg-[#0c1917] border border-[#0f2d29] hover:shadow-2xl text-white" data-aos="flip-left" data-aos-duration="1100">
                    <div className="card-body">
                        <div className="flex justify-between mb-3">
                            <div className="font-bold"><p className='text-xs'>{number}</p></div>
                        </div>
                        <div className='text-3xl'>{icon}</div>
                        <div className="mb-2"><p className='text-[#e8f5f3] text-[0.9rem]'>{cardTitle}</p></div>
                        <div>
                            <p className='text-xs'>{cardSubTitle}</p>
                        </div>
                    </div>
                </div>

                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default SectorCard