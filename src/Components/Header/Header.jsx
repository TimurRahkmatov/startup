import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='bg-slate-900'>
			<nav className='container px-12 py-6 m-auto text-white  flex justify-between items-center'>
				<div className='flex gap-12 items-center'>
					<Link to='/'>
						<h2>Logo</h2>
					</Link>

					<ul className='flex hammasi items-center gap-3 ml-12'>
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

				<div className='flex items-center gap-3 hammasi'>
					<button className='bg-aqua-400 px-5 py-1 rounded'>
						<Link to='/login'>Sign In</Link>
					</button>
					<button className='bg-aqua-400 px-5 py-1 rounded'>
						<Link to='/register'>Sign Up</Link>
					</button>
				</div>
				<div
					id='dropdown'
					className='z-10 hidden  divide-y rounded-lg shadow w-32 dark:bg-gray-700'>
					<ul
						className='py-2 text-sm  flex gap-3 flex-col items-center'
						aria-labelledby='dropdownDefaultButton'>
						<li className='links'>
							<Link to='/startups'>Browse Startups</Link>
						</li>
						<li className='links'>
							<Link to='/investors'>Seek funding</Link>
						</li>
						<li className='links'>
							<Link>About Us</Link>
						</li>
					</ul>
					<div className='flex flex-col px-2 gap-3 py-2'>
						<button className='bg-aqua-400 px-2 py-1 rounded'>
							<Link to='/login'>Login</Link>
						</button>
						<button className='bg-aqua-400 px-2 py-1 rounded'>
							<Link to='/register'>Sign Up</Link>
						</button>
					</div>
				</div>

				<button
					id='dropdownDefaultButton'
					data-dropdown-toggle='dropdown'
					className='dropdown'
					type='button'>
					<i className='fa-solid fa-bars text-lg'></i>
				</button>
			</nav>
		</header>
	);
};

export default Header;
