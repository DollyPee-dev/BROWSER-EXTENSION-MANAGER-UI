import { useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Hero from './components/Hero';

const App = () => {

    const [theme, setTheme] = useState(true);

    function handleTheme() {
        setTheme(prevTheme => !prevTheme);
    }


    return (
        <div className={
            ` ${theme? 'bg-gradient-to-b from-[#040918] to-[#091540]' : 'bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9]'}
        min-h-[100vh] pb-12
        `}
        >
            <Navbar theme={theme} handleTheme={handleTheme} />
            <Hero theme={theme}/>
        </div>
    )
}

export default App