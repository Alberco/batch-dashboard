import { Batch } from '@/models/Batch'
import { ActivitySquare, AlertTriangle, CheckCircle } from 'lucide-react'
import React from 'react'

interface Props {
  data: Batch
}

function CardHistorial({ data }: Props) {
  return (
    <div className='py-4 border-2 border-black/5  dark:border-white/5  shadow-lg bg-white/5  backdrop-blur-sm rounded-md w-full'>
      <div className='grid grid-cols-5 gap-2 px-4 '>
        <div className='flex flex-wrap gap-2 justify-start items-center  col-span-2 '>
          <p><ActivitySquare color='#94a3b8'/></p>
          <p className=' font-semibold text-xs md:text-xs lg:text-base '>{data.nombrePro}</p>        
        </div>
        <div className='flex flex-wrap w-full gap-4 justify-center text-black/60 dark:text-white/60 items-center col-span-2 '>
          <p className='text-sm'>Ini: 8:20:10</p>
          <p className='text-sm'>Fin: 8:20:10</p>
        </div>
        <div className=' flex  flex-wrap gap-2 justify-end  items-center  '>
            <span className={`p-2 rounded-full ${data.estado ? 'bg-green-400/20': 'bg-red-400/30'}`}>
            {data.estado ? <CheckCircle size={25} color='#84cc16' /> :  <AlertTriangle size={25} color='#dc2626'/>  }
            </span>
        </div>
      </div>
    </div>
  )
}

export default CardHistorial