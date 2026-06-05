import React from 'react'
import { Link } from 'react-router-dom'

const SegmentCard = ({ segment }) => {
    return (
        <Link to={`/event-segment-details/${segment?._id}`}>
            <section className="card bg-[#0c1917] shadow-sm h-[22rem] sm:h-[24rem] lg:h-[26rem] overflow-hidden">
                <figure className="h-[60%]">
                    <img
                        src={segment?.image_url}
                        alt={segment?.segmentName}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="card-body h-[40%]">
                    <h2 className="card-title text-[#e8f5f3]">
                        {segment?.segmentName}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-500">
                        {segment?.description?.length < 35
                            ? segment?.description
                            : segment?.description.slice(0, 35) + "..."}
                    </p>
                </div>
            </section>
        </Link>
    )
}

export default SegmentCard