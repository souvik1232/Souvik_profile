import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/intro.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


/* eslint-disable react/no-unescaped-entities */
export default function Intro() {
    return (
        <div className="flex justify-center bg-gray-100 flex-col px-96">
            <div className="flex flex-row py-20" >
                <div className="flex flex-col justify-center">
                    <span className='fontStyle1'>
                        Front-end React Developer 🖖
                    </span>
                    <span className='fontStyle2'>
                        Hi, I'm Souvik Mandal. A passionate Front-end React Developer based in Delhi, India. 📍
                    </span>
                    <div className='flex gap-6 py-5'>
                        <FontAwesomeIcon icon={faLinkedin} size="2xs" className='profileIconsStyle hover:text-sky-600 cursor-pointer' />
                        <FontAwesomeIcon icon={faGithub} size="2xs" className='profileIconsStyle hover:text-sky-600 cursor-pointer' />
                    </div>
                </div>
                <div className="p-44 rounded-full portfolioImage">

                </div>
            </div>
            <div>
                <span className='fontStyle2'>Tech Stack</span>
            </div>

        </div>
    )
}