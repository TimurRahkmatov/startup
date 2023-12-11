import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className='container px-12 py-6 text-white bg-slate-900 flex justify-between items-center'>
				<div className='flex gap-12 items-center'>
					<Link to='/'>
						<h2>Logo</h2>
					</Link>
					<ul className='flex items-center gap-3 ml-12'>
						<li className='links'>
							<Link to='/startups'>Browse Startups</Link>
						</li>
						<li>/</li>
						<li className='links'>
							<Link to='/investors'>Seek funding</Link>
						</li>
						<li>/</li>

						<li className='links'>
							<Link>About Us</Link>
						</li>
					</ul>
				</div>

				<div className='flex items-center gap-3'>
					<button className='bg-aqua-400 px-5 py-1 rounded'>
						<Link to='/login'>Login</Link>
					</button>
					<button className='bg-aqua-400 px-5 py-1 rounded'>
						<Link to='/register'>Sign Up</Link>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
