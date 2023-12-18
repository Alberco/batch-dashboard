'use client'

import { Button } from "@nextui-org/react";
import { Suspense, useEffect, useState } from "react"
import PaginationProgram from "./PaginationProgram";
import { Batch } from "@/models/Batch";

interface Props {
  programs: Batch[],
  totalPages: number
}
function TableProgram() {

  const [pageIndex,setPageIndex] = useState<number>(1);
  const [pageUltimate,setPageUltimate] = useState(0);

  
  useEffect(()=>{
    const paginacionUpdate = async () => {
      const req = await fetch(`https://localhost:7225/api/Batch/pagination?pageNumber=${1}&pageSize=10`)
      const res = await req.json()
      setPageUltimate(res.totalPages);
  }
  paginacionUpdate()
  },[])
  return (
    <div className="px-4">
          <PaginationProgram paginacion={pageIndex} />
        <div className="flex gap-4 my-4 justify-center">
            {
              pageIndex === 1 ?
              (<Button disabled onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>)
              : (<Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>)
            }
                        {
              pageIndex === pageUltimate ?
              (<Button disabled onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>)
              : (<Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>)
            }
        </div>
    </div>
  )
}

export default TableProgram