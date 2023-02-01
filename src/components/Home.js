import { useEffect, useState } from 'react';
import img_1 from '../images/bg.jpg';
import img_2 from '../images/man.png';
import img_3 from '../images/grass.png'

const Home = () => {
    const height = window.innerHeight;
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <div className="home">
                <h1 className="title" style={{ top: (parseInt(height / 2.5) + 0.6 * offset) + "px" }} >Parallax Website</h1>
                <img src={img_1} className="img_1" />
                <img src={img_2} style={{ left: 0.9 * offset + "px" }} className="img_2" />
                <img src={img_3} style={{ left: -0.9 * offset + "px" }} className="img_3" />
            </div>
        </>
    )
}

export default Home;