import React from 'react'
import Layout from '../../components/layout/layout'

type Props = {}

const TermsPage = (props: Props) => {
    return (
        <Layout
            isHomePage={false}
            title={'Zdrava Rutina'}
        >
            <div className='container py-3'>
                <h1>Splošni pogoji in politika zasebnosti</h1>
                <h2>Zdrava.Rutina, Anže Križovnik s.p.</h2>

                <h3>I. Uvodne določbe</h3>
                <p>
                    (1) Splošni pogoji uporabe (v nadaljevanju: splošni pogoji) podjetja <strong>Zdrava.Rutina, Anže Križovnik s.p.</strong>
                    (v nadaljevanju: Zdrava.Rutina) so sestavni del ponudb in pogodb o udeležbi na programih Zdrava.Rutina: vadbah,
                    športnih dogodkih in drugih storitvah, sklenjenih med <strong>Zdrava.Rutina, Anže Križovnik s.p.</strong> in stranko.
                </p>
                <p>
                    (2) Podatki o ponudniku storitev so naslednji:<br />
                    – Družba: <strong>Zdrava.Rutina, Anže Križovnik s.p.</strong><br />
                    – Sedež: <strong>Koroška cesta 48, 2370 Dravograd</strong><br />
                    – Matična številka: <strong>9665129000</strong><br />
                    – Davčna številka: <strong>12524263</strong><br />
                    – Spletni naslov: <strong>(navesti, če obstaja)</strong><br />
                    – Elektronska pošta: <strong>zdrava.rutina@gmail.com</strong><br />
                    – Telefon: <strong>(navesti, če obstaja)</strong>
                </p>
                <p>
                    (3) Stranka se obravnava kot udeleženec športne vadbe ali drugega programa, ki ga izvaja podjetje Zdrava.Rutina.
                </p>
                <p>
                    (4) Navedeni splošni pogoji predstavljajo sestavni del vseh pogodb oziroma dogovorov, sklenjenih med podjetjem in stranko.
                    Stranka izrecno soglaša s temi splošnimi pogoji in se z njimi popolnoma strinja s tem, ko s podjetjem Zdrava.Rutina vstopi
                    v pravno poslovno razmerje.
                </p>
                <p>
                    (5) Pravno poslovno razmerje nastane s sprejemom ponudbe, sprejemom predračuna ali s sklenitvijo pogodbe.
                </p>
                <p>
                    (6) Splošni pogoji poslovanja podjetja Zdrava.Rutina so objavljeni na spletni strani podjetja (če obstaja) in se v fizični
                    obliki hranijo na sedežu podjetja.
                </p>

                <h3>II. Predmet pogodbe</h3>
                <p>(1) Predmet pogodbe je udeležba na programih podjetja Zdrava.Rutina.</p>

                <h3>III. Cene storitev</h3>
                <p>
                    (1) Cena storitev se določi skladno s cenikom podjetja. Če je v pogodbi dogovorjen poseben dogovor o plačilu, se v razmerju
                    do stranke uporabi slednji.
                </p>
                <p>
                    (2) Če stranka zamuja s plačilom, lahko podjetje zaračuna zakonske zamudne obresti in stroške izterjave.
                </p>

                <h3>IV. Obveznosti stranke</h3>
                <p>Stranka ima obveznost:</p>
                <ul>
                    <li>plačati obveznosti v dogovorjenem roku,</li>
                    <li>svoje plačilo poravnati na TRR <strong>SI56 0400 0028 1179 176</strong>,</li>
                    <li>se udeležiti dogovorjenih vadb in se obnašati skladno s pravili obnašanja na vadbi.</li>
                </ul>

                <h3>V. Obveznosti podjetja Zdrava.Rutina</h3>
                <p>Zdrava.Rutina se zavezuje, da bo:</p>
                <ul>
                    <li>nudilo stranki možnost dostopa do naslednjih informacij: kontaktni podatki o podjetju, podatki o storitvah, časovni veljavnosti ponudbe in cenah storitev,</li>
                    <li>poslovalo v skladu z načelom dobre vere in poštenosti.</li>
                </ul>

                <h3>VI. Obisk spletne strani</h3>
                <p>(1) Obvestilo o piškotkih je sestavni del obiska spletne strani podjetja (če spletna stran obstaja).</p>

                <h3>VII. Trajanje pogodbe</h3>
                <p>
                    (1) Pogodba je sklenjena za določen čas, dogovorjen v pogodbi. Pogodba se lahko podaljša pisno.
                </p>

                <h3>VIII. Odškodninska odgovornost</h3>
                <p>
                    Podjetje Zdrava.Rutina ne odgovarja za škodo zaradi razlogov na strani stranke ali zaradi nepravilne izvedbe vadbe v nasprotju
                    z navodili vaditelja.
                </p>

                <h3>IX. Končne določbe</h3>
                <p>
                    (1) Zdrava.Rutina si pridržuje pravico, da splošne pogoje poslovanja spremeni. Spremembe splošnih pogojev se objavljajo na spletni
                    strani podjetja, veljajo pa od datuma objave dalje.
                </p>

                <p><strong>Zdrava.Rutina, Anže Križovnik s.p.</strong><br />
                    <strong>Dravograd, [datum veljavnosti]</strong></p>

                <p />
            </div>
        </Layout>
    )
}

export default TermsPage