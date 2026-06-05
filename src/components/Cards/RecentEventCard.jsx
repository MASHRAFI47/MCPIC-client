import React from 'react'
import { format } from 'date-fns'
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';


const RecentEventCard = ({ event }) => {
    return (
        <Link to={`/event/${event?.name}`}>
            <section className="card bg-[#0c1917] shadow-sm h-[24rem] md:h-[18rem] lg:h-[25rem]" data-aos="flip-left" data-aos-duration="1100">
                <figure>
                    <img
                        src={event?.image_url}
                        alt="Shoes"
                        className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#e8f5f3]">{event?.name}</h2>
                    <p>{event?.description.slice(0, 75).concat("...")}</p>

                    <div className='flex w-1/2 items-center gap-2'>
                        <p className='bg-[#102220] text-[#2dbeb1] border border-[#17403b] rounded-2xl text-xs text-center p-2'>{format(new Date(event?.from), "dd/MM/yyyy")}</p>
                        <p><MdArrowRightAlt className='' /></p>
                        <p className='bg-[#102220] text-[#2dbeb1] border border-[#17403b] rounded-2xl text-xs text-center p-2'>{format(new Date(event?.to), "dd/MM/yyyy")}</p>
                    </div>

                </div>
            </section>
        </Link>
    )
}

export default RecentEventCard