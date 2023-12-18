'use client'
import FormSearch from './components/FormSearch'


function page() {

  return (
    <section className=' container mx-auto flex flex-wrap md:flex-nowrap px-4 md:px-6 lg:px-0 md:grid-cols-5 py-4 gap-4 '>
        <FormSearch />
    </section>
  )
}

export default page