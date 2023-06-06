import React from 'react';
import Container from './container';

export default function Features(props) {
	const { data } = props;

	return (
		<>
			<Container className='grid grid-cols-1 lg:grid-cols-4 grid-rows-1 gap-5 lg:gap-12'>
				{data.map((item) => (
					<Feature title={item} />
				))}
			</Container>
		</>
	);
}

function Feature(title) {
	return (
		<>
			<div className='flex bg-primaryPurple rounded-lg py-5 flex-col w-full justify-around items-center'>
				<div className='flex items-center justify-center flex-shrink-0 mt-1 bg-primaryPurple rounded-md w-11 h-11 '>
					{React.cloneElement(title.title.icon, {
						className: 'w-12 h-12 text-indigo-50',
					})}
				</div>
				<h1 className='mt-3 font-medium text-white w-1/2 text-center'>
					{title.title.title}
				</h1>
			</div>
		</>
	);
}
