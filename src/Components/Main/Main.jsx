import React from 'react';
import CompotuerImage from '../../assets/platform.png';
import back from '../../assets/back2.webp';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<section className='py-2 bg-slate-900 text-white'>
			<div className='container m-auto px-11 main_flex'>
				<div style={{ width: '75%' }}>
					<img
						style={{
							width: '350px',
							height: '350px',
							borderRadius: '50%',
							marginLeft: '150px',
						}}
						className='main__platform-block-image'
						src={back}
					/>
				</div>
				<div style={{ width: '60%' }} className='texts'>
					<h1 className='main_text'>
						<Typewriter
							onInit={(typewriter) => {
								typewriter

									.typeString(
										'A connecting bridge between investors and startups',
									)
									//   .pauseFor(1000)

									.start();
							}}
						/>
					</h1>

					<div className='flex gap-3 mt-4'>
						<Link
							to={'/login'}
							className='btn_main text-white bg-sky-400'>
							SIGN IN
						</Link>
						<Link
							to={'/register'}
							className='btn_main text-sky-400 border-sky-400 border'>
							SIGN UP
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
