import React from 'react'
import EventsCard from '../../Cards/EventsCard'

const EventsSection = () => {
  return (
    <section className='py-3'>
        <div className="container m-auto px-12 ">
            <div>
            <h3 className='text-4xl text-white'>Events</h3>
            <p className='text-white text-ms mt-2'>Here you can find information regarding latest events</p>
            </div>
            <div className='flex gap-6'>
              <EventsCard />
            </div>
        </div>
    </section>
  )
}

export default EventsSection