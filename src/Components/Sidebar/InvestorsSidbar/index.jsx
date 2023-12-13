import React from 'react';

const InvestorsSidebar = () => {
	return (
		<div
			className='sidebar'
			style={{
				padding: '2rem 4rem',
				// width: "20%",
				// minHeight: "500px",
				backgroundColor: '#1e293b',
				// display: "flex",
				// flexDirection: "column",
				// alignItems: "center",
				color: '#fff',
			}}>
			<div style={{ marginLeft: '-1.6rem' }}>
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
			<div>
				<h3 className='text-xl mt-4'>Markets</h3>
				<div className='flex gap-3 items-center ml-4 mt-1'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Western Europe</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>Eastern Europe</p>
				</div>
				<div className='flex gap-3 items-center ml-4'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>CIS</p>
				</div>
				<div className='flex items-end ml-12 mt-3'>
					<button className='m-auto'>Show more</button>
				</div>
			</div>
			<div>
				<h3 className='text-xl mt-4'>Ranges</h3>
				<div className='flex gap-3 items-center mt-1'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>0 - 10 000</p>
				</div>
				<div className='flex gap-3 items-center mt-1'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>10 000 - 20 000</p>
				</div>
				<div className='flex gap-3 items-center'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>10 000 - 50 000</p>
				</div>
				<div className='flex gap-3 items-center'>
					<input
						style={{ width: '20px', height: '20px' }}
						type='checkbox'
					/>
					<p>50 000 - 100 000</p>
				</div>
				{/* <div className='flex items-end ml-12 mt-3'>
					<button className='m-auto'>Show more</button>
				</div> */}
			</div>
		</div>
	);
};

export default InvestorsSidebar;
