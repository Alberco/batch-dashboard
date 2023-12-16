import { Activity, CheckCircle, MoveUpRight } from 'lucide-react'
import React from 'react'

interface Props {
  label: string
  dataP: number
  dataH: number
  fecha?: string
}

function Cartel({ label, dataP, dataH }: Props) {
  return (
    <section className='grid grid-rows-3 px-4 py-4 h-full w-full'>
      <header className='flex justify-start items-center place-self-start'>
       <h3 className='text-xl font-medium flex gap-2 '> 
          <span className=''>
            <Activity color='#a3e635' />
          </span>
       Total de Programas {label} /d
       </h3>
      </header>
      <div className='flex justify-center items-center'>
        <p className={`text-4xl flex gap-2 font-extrabold text-green-500 ${label === 'Completados' ? 'text-[#a3e635]' : 'text-red-500'}`}>
{/*           <span className={`p-2 rounded-full bg-green-400/20`}>
            <CheckCircle size={25} color='#84cc16' />
          </span> */}
          { dataH }
        </p>
      </div>
      <footer className='flex items-center justify-center'> 
        <p className='text-black/80 dark:text-white/80 text-sm flex items-center justify-center gap-2'>
          <span className={`font-semibold rounded-lg px-1 py-1 ${label === 'Completados' ? 'bg-green-400/40' : 'bg-red-500/40'} `}>
            <MoveUpRight size={16} strokeWidth='3' />
          </span>
          + {dataP} mas que ayer
        </p>
      </footer>
    </section>
  )
}

export default Cartel