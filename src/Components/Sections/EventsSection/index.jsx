import React from 'react'
import EventsCard from '../../Cards/EventsCard'

const EventsSection = () => {
  return (
    <section className='py-3'>
        <div className="container px-12 ">
            <h3 className='text-5xl text-white ml-12'>Events</h3>
            <p className='text-white text-lg mt-2 ml-12'>Here you can find information regarding latest events</p>
            <div className='flex gap-6'>
              <EventsCard />
            </div>
        </div>
    </section>
  )
}

export default EventsSection