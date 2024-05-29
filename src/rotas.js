
import Footer from 'componentes/Footer'
import Menu from 'componentes/Menu/indes'
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Cardapio = lazy(() => import('Pages/Cardapio'))
const Inicio = lazy(() => import('Pages/Inicio'))
const Sobre = lazy(() => import('Pages/Sobre'))
const Pratos = lazy(() => import('Pages/Pratos'))

export default function Rotas() {
    return (
        <main>
            <Router>
                <Suspense fallback={ <p> Carregando... </p> }>
                    <Menu />
                    <Routes>
                        <Route path='/' >
                            <Route index element={<Inicio />} />
                            <Route path='cardapio' element={<Cardapio />} />
                            <Route path='sobre' element={<Sobre />} />
                        </Route>
                        <Route path='prato/:id' element={<Pratos />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </main>
    )
}