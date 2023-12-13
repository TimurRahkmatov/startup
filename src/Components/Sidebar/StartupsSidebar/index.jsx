import React from 'react';

const StartupsSidebar = () => {
	return (
		<div
			className='sidebar '
			style={{
				padding: '2rem 1rem',

				backgroundColor: '#1e293b',
				// display: "flex",
				// flexDirection: "column",
				// alignItems: "center",
				color: '#fff',
			}}>
			<div className=''>
				<h3 className='text-xl '>Countries</h3>
				<div className='flex gap-3 items-center ml-4 mt-1'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Kazakhstan</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Uzbekistan</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Kyrgyzstan</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Tajikistan</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Turkmenistan</p>
				</div>
				{/* <div className='flex items-end ml-12 mt-3'>
					<button className='m-auto'>Show more</button>
				</div> */}
			</div>
			<div className=''>
				<h3 className='text-xl mt-4'>Stages</h3>
				<div className='flex gap-3 items-center ml-4 mt-1'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Idea Stage</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Paying Users</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Prototype</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Users</p>
				</div>
				<div className='flex items-end ml-12 mt-3'>
					<button className='m-auto'>Show more</button>
				</div>
			</div>
		</div>
	);
};

export default StartupsSidebar;
