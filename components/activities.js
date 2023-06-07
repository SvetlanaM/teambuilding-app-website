import React from 'react';
import Container from './container';
import Image from 'next/image';

export default function Activities(props) {
	const { data } = props;

	return (
		<>
			<Container className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-5 lg:gap-12 pb-10'>
				{data.map((item) => (
					<Activity props={item} />
				))}
			</Container>
		</>
	);
}

function Activity(props) {
	return (
		<>
			<div className='flex bg-primaryPurple rounded-lg py-28 flex-col w-full justify-around items-center relative'>
				<Image
					src={props.props.path}
					alt={props.props.title}
					fill={true}
					className='h-full w-full object-cover absolute rounded-lg'
					loading='eager'
				/>
			</div>
		</>
	);
}
