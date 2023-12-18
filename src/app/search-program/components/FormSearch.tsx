'use client'
import { Button, Card, Divider, Input } from '@nextui-org/react'
import { Search } from 'lucide-react'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import ListCardSearch from './ListCardSearch'


interface SearhInput {
    nameProgram: string,
    date: string
}

function FormSearch() {

    const [nameInput,setNameInput] = useState("")
    const [dateInput,setDateInput] = useState("")
    const [searchInput,setSearchInput] = useState<SearhInput>({
        nameProgram: "",
        date: ""
    })

    const updateNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
        console.log(nameInput)
    }
    const updateDateInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDateInput(e.target.value)
        console.log(dateInput)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchInput(() => ({ nameProgram: nameInput, date: dateInput}))
    }

    console.log(searchInput)

  return (
    <>
        <div className='w-full md:w-[40%] '>
            <Card className='py-8 px-8 space-y-4'>
                <p className='flex gap-2 items-center'>
                    <span>
                        <Search  size={19} />
                    </span>
                    Search Program</p>
                    <Divider />
                <form className='space-y-4' onSubmit={submitHandler}>
                    <Input
                        
                        type="text"
                        label="Ingresar Nombre de Programa"
                        variant="bordered"
                        defaultValue=""
                        className="max-w-xs"
                        onChange={updateNameInput}
                        />
                    <Input
                        
                        type="date"
                        variant="bordered"
                        defaultValue=""
                        className="max-w-xs"
                        onChange={updateDateInput}
                        />
                    <Button color="primary" variant="bordered" type='submit'>
                        Buscar
                    </Button>  
                </form>
            </Card>
        </div>
        <div className='w-full space-y-4'>
            <p className='text-2xl font-bold py-2'>Listado de Programa</p>
            <ListCardSearch nameProgram={searchInput.nameProgram}  date={searchInput.date} />
        </div>
    </>
  )
}

export default FormSearch