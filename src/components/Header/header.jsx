import React from 'react';
import Logo from '../../assets/y-logo-white.png'
import Background from '../../assets/work-desk__dustin-lee.jpg'
import './header.css';

//styling background
const makeStyle ={
	backgroundImage: `url(${Background})`,
	width: '100%',
	height: '600px',
	backgroundSize: 'cover',
	backgroundColor: '#004a75',
	backgroundPosition: 'center',
	backgroundBlendMode: 'soft-light'
}

const Header = () => {
	return (
		<header style={makeStyle}>
			<img className='image' src={Logo} alt=''/>
			<div className='box'/>
			<div className='header'>
				<span className='title1'> Hello! I'm Hasnawi </span>
				<span className='title2'> Consult, Design and Develop Website</span>
				<span className='title3'> Have something great in mind? Feel free to contact me.</span>
				<span className='title4'> I'll help you to take make it happen.</span>
				<button className='contact'>LET'S MAKE CONTACT</button>
			</div>
		</header>
	);
};

export default Header;
