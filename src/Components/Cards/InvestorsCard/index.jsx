import React from 'react';
import DemaloImg from '../../../assets/tuz.jpg';
import InImg from '../../../assets/ventures.jpg';
import SpendImage from '../../../assets/most.jpg';
import anshercapita from '../../../assets/anshercapita.jpeg';
import highlandcapital from '../../../assets/highlandcapital.jpeg';
import mostventure from '../../../assets/mostventure.jpeg';
import myventures from '../../../assets/myventures.jpeg';
import parmonov from '../../../assets/parmonov.jpeg';
import spotlight from '../../../assets/spotlight.jpeg';
import sturgeoncapital from '../../../assets/sturgeoncapital.jpeg';
import tuzventures from '../../../assets/tuzventures.jpeg';

const InvestorsCard = () => {
	return (
		<section
			className='section_star'
			style={{
				padding: '2rem 0',
				backgroundColor: '#1e293b',
				paddingBottom: '3rem',
			}}>
			<div className='container m-auto px-12'>
				<div className='flex justify-between py-3'>
					<h3 className='text-sky-400 text-2xl'>Investors</h3>
					<p className='text-white'>Showing : 8</p>
				</div>
				<div className='flex gap-8 flex-wrap mt-2'>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={mostventure}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-3'>MOST Ventures</h3>
							<p>
								We are a private venture fund. For more than 10
								years, we have been providing financial and
								non-financial support to technology
								entrepreneurs, as well as conducting incubation
								and acceleration prog ...
							</p>
						</div>
						<p className='text-blue-900'>#Hosting</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={spotlight}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>Spotlight Ventures</h3>
							<p>
								Spotlight! Ventures is an investment platform
								for technology and digital companies. We invest
								in courageous founders and teams with passion,
								ambition, willingness to take risks,
								determination and innovative ideas. ...
							</p>
						</div>
						<p className='text-blue-900'>#IT</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={tuzventures}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>TUZ Ventures</h3>
							<p>
								TUZ Ventures is an early-stage tech VC fund
								focused on Central Asia and Caucasus. TUZ is
								founded by Silicon Valley entrepreneurs with a
								track record of successfully penetrating
								untapped frontier markets deemed ris ...
							</p>
						</div>
						<p className='text-blue-900'>#All</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={anshercapita}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>Ansher Capital</h3>
							<p>
								Ansher Capital - part of the holding company
								Ansher Investments LLP (UK), has been
								successfully doing business at the regional and
								international level since 1999 and is the most
								titled investment bank in Uzbekista ...
							</p>
						</div>
						<p className='text-blue-900'>#All</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={highlandcapital}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>Highland Capital</h3>
							<p>
								Highland Capital focuses on providing growth
								capital and support to businesses. We provide
								equity and mezzanine financing to SMEs to help
								them develop and grow into national and regional
								champions. ...
							</p>
						</div>
						<p className='text-blue-900'>#Business</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={sturgeoncapital}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>Sturgeon Capital</h3>
							<p>
								Sturgeon Capital focuses on providing growth
								capital and support to businesses. We provide
								equity and mezzanine financing to SMEs to help
								them develop and grow into national and regional
								champions. ...
							</p>
						</div>
						<p className='text-blue-900'>#Sport</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={myventures}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>MyVentures</h3>
							<p>
								MyVentures is a $20 million global venture fund
								investing in early-stage technology startups
								that are shaping the industries of tomorrow.
							</p>
						</div>
						<p className='text-blue-900'>#Technology</p>
					</div>
					<div
						style={{
							width: '460px',
							minHeight: '300px',
							backgroundColor: '#f4f4f5ee',
							padding: '1.5rem',
							borderRadius: '40px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<div>
							<img
								src={parmonov}
								style={{ width: '100px', height: '100px' }}
								alt=''
							/>
							<h3 className='text-xl mt-2'>Parmonov</h3>
							<p>
								The venture fund was established in 2021 by the
								joint-stock commercial bank "Alokabank" to
								invest in innovative and promising startup
								projects. The foundation's activities are aimed
								at stimulating companies, star ... #Hosting
							</p>
						</div>
						<p className='text-blue-900'>#All</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InvestorsCard;
