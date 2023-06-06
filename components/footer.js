import Link from 'next/link';
import React from 'react';
import Container from './container';

export default function Footer() {
	const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
	const legal = ['Terms', 'Privacy', 'Legal'];
	return (
		<div className='relative'>
			<Container>
				<div className='grid max-w-screen-xl grid-cols-1 gap-10 pt-4 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-8'></div>

				<div className='my-10 text-sm text-center text-gray-600 dark:text-gray-400'>
					Copyright © {new Date().getFullYear()}. Made with ♥ by{' '}
					<a
						href='https://cz.linkedin.com/in/msvetlana'
						target='_blank'
						rel='noopener'>
						Sveťa and ChatGPT.
					</a>{' '}
					Illustrations from Saly 3D illustrations pack
				</div>
			</Container>
		</div>
	);
}
