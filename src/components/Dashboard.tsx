import { ThemeSwitcher } from "@/app/ThemeSwitcher"
import { Card } from "@nextui-org/react"
import CardHistorial from "./CardHistorial"
import { bd } from "@/lib/data"
import Cartel from "./Cartel"
import { LayoutList } from "lucide-react"
import ChartOne from "./ChartOne"
import ChartTwo from "./ChartTwo"

function Dashboard() {
  return (
    <section className='container mx-auto grid grid-cols-1  md:grid-cols-3 gap-4 grid-flow-row md:grid-rows-5 h-full w-full py-4 px-4 md:py-6 md:px-0'>
        <div className=' row-span-1 md:row-span-1'>
          <Card className="w-full h-full rounded-sm">
            <Cartel label="Completados" dataH={30} dataP={12}  />
          </Card>
        </div>
        <div className=' row-span-1'>
          <Card className="w-full h-full rounded-sm" radius="sm">
            <Cartel label="Cancelados" dataH={40} dataP={13} />
          </Card>
        </div>
        <div className=' row-span-1'>
          <Card className="w-full h-full rounded-sm" radius="sm">
            4
          </Card>
        </div>
        <div className=' col-span-1 md:col-start-1 md:col-span-2 w-full h-full  md:row-span-2'>
          <Card className="w-full h-full rounded-sm flex justify-center items-center " radius="sm">
            <ChartOne />
          </Card>
        </div>
        <div className=' col-span-1 md:col-start-1 md:col-span-2  md:row-span-2 '>
        <Card className="w-full h-full rounded-sm" radius="sm">
          <ChartTwo />
          </Card>
        </div>
        <div className='col-span-1 md:col-start-3 md:row-start-2 md:row-end-6 h-full w-full'>
          <Card className="w-full h-full  space-y-4 px-4 py-4 overflow-auto" radius="sm">
            <p className="text-xl font-bold flex gap-2 items-center">
              <span>
              <LayoutList />
              </span>
              Historial de Programas
            </p>
            {
              bd.map((item,index) => (
                <CardHistorial data={item} key={index +23}/>
              ))
            }
          </Card>
        </div>
    </section>
  )
}

export default Dashboard