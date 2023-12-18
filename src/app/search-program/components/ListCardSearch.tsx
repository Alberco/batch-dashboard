'use client'
import useFechProgramDate from '@/hooks/useFechProgramDate';
import { Card, Chip, Divider } from '@nextui-org/react';

interface Props {
    nameProgram: string 
    date: string
}

function ListCardSearch({nameProgram, date }: Props) {

    const { data, isLoading, error } = useFechProgramDate(nameProgram,date)

    const convertFecha = (fecha: string = "") => new Date(fecha)

    if (isLoading) {
        return <p>Cargando...</p>
        }
        
    if (error) {
        return <p className=' font-semibold  '>Error, Fuera de conexion con el server</p>;
    }

  return (
    <div className=' w-full'>
        {
            ( nameProgram ==="" || date === ""
            ? <p className='flex  font-bold h-full w-full text-xl'>No hay datos Buscados</p>
            :  (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto '>
                {
                    data?.map((item,index) => (
                        <Card key={index +34232} className='p-4'>
                            <div className="max-w-md">
                                <div className="space-y-1">
                                    <h4 className="text-medium font-medium">{item.nameProgram}</h4>
                                    <p className="text-small text-default-400">{item.ipAddress}</p>
                                </div>
                            <Divider className="my-4" />
                                <div className="flex h-5 items-center space-x-4 text-small">
                                    <div>
                                        <div className=' space-x-2'>
                                            <p className=''>Hora Ini <span>{convertFecha(item.horaIni).toLocaleTimeString()}</span></p>
                                        </div>
                                    </div>
                                    <Divider orientation="vertical" />
                                        <div>
                                            <p>Hora Ini <span>{convertFecha(item.horaFin).toLocaleTimeString()}</span></p>
                                        </div>
                                    <Divider orientation="vertical" />
                                    <div>
                                        {
                                            item.estado ? (<Chip color="success">Success</Chip>) : <Chip color="danger">Danger</Chip>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                }
                </div>
                )
            )
        }
    </div>
  )
}

export default ListCardSearch