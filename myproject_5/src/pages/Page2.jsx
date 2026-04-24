import { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Page2 = () => {
    const [selected, setSelected] = useState(null)
    const [showError, setShowError] = useState(false)
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar selected={selected} setSelected={setSelected} showError={showError} count={count} />
            <Hero selected={selected} setShowError={setShowError} setCount={setCount} />
        </div>
    )
}

export default Page2