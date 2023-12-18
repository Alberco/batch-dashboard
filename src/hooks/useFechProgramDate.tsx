'use client'
import { Batch } from '@/models/Batch'
import useSWR from 'swr'

interface Props {
    name : string
    fecha: string
}

function useFechProgramDate(name: string, fecha: string) {

    const { data, isLoading, error } = useSWR<Batch[]>(`https://localhost:7225/api/Batch/search?name=${name}&fecha=${fecha}`, async (url: string) => {
        try {
            const res = await fetch(url)
            if (!res.ok) {
                if(res.status === 404)
                {
                    return null
                }
            }
            const req = await res.json()
            console.log(req)
            return req
        } catch (error) {
            console.log(error)
        }
    },{
        onError: (error, key) => {
          // Evita mostrar errores 400 (Bad Request) en la consola
          if (error.response?.status === 400) {
            return;
          }
        },
      })

  return (
    {
        data, isLoading, error
    }
  )
}

export default useFechProgramDate