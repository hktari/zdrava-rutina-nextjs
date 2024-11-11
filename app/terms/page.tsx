import React from 'react'
import Layout from '../../components/layout/layout'

type Props = {}

const TermsPage = (props: Props) => {
    return (
        <Layout
            isHomePage={false}
            title={'Splošni Pogoji'}
        >
            <div className='container py-3'>TermsPage</div>
        </Layout>
    )
}

export default TermsPage