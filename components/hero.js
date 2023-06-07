import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero.png';

export default function Hero() {
	return (
		<>
			<Container className='flex flex-wrap '>
				<div className='flex items-center w-full lg:w-1/2'>
					<div className='max-w-2xl mb-8'>
						<h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
							Discover a New Era of Team Buildings
						</h1>
						<p className='py-5 text-xl leading-normal font-light text-gray-500 lg:text-sm xl:text-lg dark:text-gray-300'>
							Unlock the full potential of your team with our innovative team
							building app. Create a personalized team building experience that
							aligns with your organization's culture and goals.
						</p>

						<div className='flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row mt-6'>
							<a
								href='tel:+420725423538'
								className='px-8 py-4 text-lg font-medium text-center text-white bg-primaryPurple rounded-md '>
								Get started now
							</a>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center w-full lg:w-1/2'>
					<div className='hidden lg:block -mt-10'>
						<Image
							width={600}
							height={600}
							src={heroImg}
							alt='Hero Illustration'
							layout='intrinsic'
							loading='eager'
							placeholder='blur'
						/>
					</div>
				</div>
			</Container>
		</>
	);
}
