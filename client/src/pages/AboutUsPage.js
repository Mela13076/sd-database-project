import '../styles/AboutUsPage.css';
import Logo from '../assets/meyer-logo.svg'
import Dan from '../assets/dan.jpeg'
import Ram from '../assets/ram.jpeg'
import Daniel from '../assets/daniel.jpeg'
import Andrew from '../assets/andrew.jpeg'
import Mel from '../assets/mel.png'

function AboutUsPage(){
    return (
        <div className='AboutSec'>
            <h1>Learn about Our Senior Design Project</h1>
            <div className='AboutPro'>
                <h2>Description of Project</h2>
                <p>The aim of this project is to upgrade the traditional paper chart recorders that are still commonly used, despite their numerous drawbacks, by introducing a Digital Pressure Recorder. The proposed device will collect data via a sensor and transmit it to an online database. It will also have the capability to simulate pressure values and determine if a value passes the test or not. The primary objective is to create a digitized tool for recording hydraulic pressure that can transfer collected data to an online database. Access to the data will be available through a website from anywhere in the world.</p>
            </div>
            <div className="meetTeam">
                <h2>Meet The Team</h2>
            <div className='photoSec'>
                <div className='Desc'>
                    <img src={Daniel} alt='blank' width="90px" height="90px"/>
                    <h3>Daniel Avendano</h3>
                    <p>Eletrical Engineer</p>
                </div>
                <div className='Desc'>
                    <img src={Dan} alt='blank' width="90px" height="90px"/>
                    <h3>Daniel Gonzales</h3>
                    <p>Eletrical Engineer</p>
                </div>
                <div className='Desc'>
                    <img src={Mel} alt='blank' width="90px" height="90px"/>
                    <h3>Amelia Trevino</h3>
                    <p>Eletrical Engineer</p> 
                    <p>& Computer Science</p>
                </div>
                <div className='Desc'>
                    <img src={Andrew} alt='blank' width="90px" height="90px"/>
                    <h3>Andrew Rosas</h3>
                    <p>Computer Science</p>
                </div>
                <div className='Desc'>
                    <img src={Ram} alt='blank' width="90px" height="90px"/>
                    <h3>Ram Vejendla</h3>
                    <p>Computer Science</p>
                </div>
            </div>
            </div>
            <div className='spon'>
                <h2>Meet the Sponser</h2>
                <img src={Logo} alt='meyer logo' className='meyerLogo' height=" 120px" width="auto"/>
                <p>MEYER is a reputable manufacturer of well control equipment, known for its commitment to quality service and top-notch products. With a range of closing and testing units designed for the oil and gas industry, MEYER offers a complete package of manufacturing, rental, servicing, and repair services. The company's well control testing equipment and oil and gas control systems have been trusted by many leading companies worldwide. MEYER's proven track record in providing high-quality oilfield equipment and field services instills confidence in every client they work with. At MEYER, safety, productivity, and cost-effectiveness are top priorities when engineering their oil and gas control systems and well control testing equipment, ensuring that their clients receive reliable and efficient products and services.</p>
                <a href="https://www.meyernow.com/">Visit Meyer Now!</a>
            </div>
        </div>
    );
}

export default AboutUsPage;