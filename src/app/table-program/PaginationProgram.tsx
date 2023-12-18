'use client'
import { Batch } from "@/models/Batch";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, Chip} from "@nextui-org/react";
import { CheckIcon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr"

interface Props {
  programs: Batch[],
  totalPages: number
}

function PaginationProgram({ paginacion }: { paginacion: number}) {
    const [selectedColor, setSelectedColor] = useState("default");
    const [dataTable,setDataTable] = useState<Props>({
      programs: [],
      totalPages: 0
    })

/*     const { data, isLoading, error } = useSWR<Props>(`https://localhost:7225/api/Batch/pagination?pageNumber=${paginacion}&pageSize=20`, async (url: string) => {
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

          if (error.response?.status === 400) {
            return;
          }
        },
      }) */
    
  
useEffect(()=>{
  const paginacionUpdate = async () => {
    const req = await fetch(`https://localhost:7225/api/Batch/pagination?pageNumber=${paginacion}&pageSize=10`)
    const res = await req.json()
    setDataTable(res);
    console.log(res)
}
paginacionUpdate()
},[paginacion])

  return (
    <div className="flex flex-col gap-3 h-full w-full py-6 overflow-auto">
<Suspense fallback={<p>loading</p>}>
<Table 
        radius="sm"
        color={"default"}
        selectionMode="single" 
        defaultSelectedKeys={["2"]} 
        aria-label="Example static collection table"
        className=""
      >
        <TableHeader>
          <TableColumn className=" text-base text-center">Nombre Programa</TableColumn>
          <TableColumn className=" text-base text-center">HostName</TableColumn>
          <TableColumn className=" text-base text-center">Hora Ini</TableColumn>
          <TableColumn className=" text-base text-center">Hora Fin</TableColumn>
          <TableColumn className=" text-base text-center">Estado</TableColumn>
          <TableColumn className=" text-base text-center">Ip addres</TableColumn>
        </TableHeader>
        <TableBody>
          {
            dataTable?.programs  !==  undefined ?
            (
              dataTable.programs.map((item,index) => (
                <TableRow key={index + 12}>
                  <TableCell className="py-4 text-center ">{item.nameProgram}</TableCell>
                  <TableCell className="py-4 text-center ">{item.hostName}</TableCell>
                  <TableCell className="py-4 text-center ">{item.horaIni}</TableCell>
                  <TableCell className="py-4 text-center ">{item.horaFin}</TableCell>
                  <TableCell className="py-4 text-center ">
                    {
                      item.estado ?
                      (                    <Chip
                        startContent={<CheckIcon size={18} />}
                        variant="faded"
                        color="success"
                  >
                  Completado</Chip>)
                  :(                    <Chip
                    startContent={<CheckIcon size={18} />}
                    variant="faded"
                    color="danger"
              >
              Cancelado</Chip>)
                    }
                </TableCell>
                  <TableCell className="py-4 text-center ">{item.ipAddress}</TableCell>
                </TableRow>
              ))
            )
            :(
              <TableRow>
              <TableCell className="py-4 text-center ">1</TableCell>
              <TableCell className="py-4 text-center ">2</TableCell>
              <TableCell className="py-4 text-center ">3</TableCell>
              <TableCell className="py-4 text-center ">4</TableCell>
              <TableCell className="py-4 text-center ">
                <Chip
                      startContent={<CheckIcon size={18} />}
                      variant="faded"
                      color="success"
                >
                Chip</Chip>
            </TableCell>
              <TableCell className="py-4 text-center ">4</TableCell>
            </TableRow>
            )
          }
        </TableBody>
      </Table>
</Suspense>
{/*       <RadioGroup 
        label="Selection color"
        orientation="horizontal"
        value={selectedColor} 
        onValueChange={setSelectedColor}
      >
        {colorsT.map((color) => (
          <Radio
            key={color}
            color={color}  
            value={color}
            className="capitalize"
          >
            {color}
          </Radio>  
        ))}
      </RadioGroup> */}
    </div>
  )
}

export default PaginationProgram