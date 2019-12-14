import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import './notification.css'

const Notification = props => {
    const handleHidden = newValue =>{
        props.visibleChange(newValue)
    
    }
    return (
        <div className='notification'>
            <div className='container'>
                <div className='text'>
                    <span>
                        By accessing and using this website, you acknowledge that you have read and understand our <a href='#'>Cookie Policy, </a> <a href='#'>Privacy Policy,</a> and our <a href='#'>Terms of Service.</a>
                    </span>
                </div>
                <button onClick={()=> {
                    handleHidden(false)
                    scroll.scrollToTop()
                    } } 
                    className='btn'>
                        Got it
                </button>
            </div>
        </div>
    )
}

export default Notification