import React from 'react'
import Image from 'next/image'

type Props = {}

const UnderConstructionPage = (props: Props) => {
    return (

        <div className="d-flex flex-column align-items-center justify-content-center bg-secondary md:bg-transparent" style={{ height: "100vh" }}>
            <div className="bg-secondary p-5 rounded d-flex flex-column align-items-center gap-4 text-center">
                <div className="rounded overflow-hidden">
                    <Image src={"https://res.cloudinary.com/div038xr5/image/upload/v1723996001/zdrava-rutina/resized_logo_suv2ww.png"} width={75} height={75} alt='zdrava rutina logo' />
                </div>
                <h1 className='text-primary'>Stran je v obdelavi. Hvala za razumevanje</h1>
            </div>
        </div>

    )
}

export default UnderConstructionPage