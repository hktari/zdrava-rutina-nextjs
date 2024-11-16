import React from 'react'
import Layout from '../../components/layout/layout'

type Props = {}

const ImpressumPage = (props: Props) => {
    return (
        <Layout
            isHomePage={false}
            title={'Impressum'}>
            <div className="container py-2">
                <p className='opacity-75'>
                    <small>
                        Zdrava.Rutina, Anže Križovnik s.p.<br />
                        Koroška cesta 48, 2370 Dravograd<br />
                        Matična številka: 9665129000<br />
                        Davčna številka: 12524263<br />
                        Elektronska pošta: zdrava.rutina@gmail.com
                    </small>
                </p>
            </div>
        </Layout>
    )
}

export default ImpressumPage