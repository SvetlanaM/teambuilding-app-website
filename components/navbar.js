import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import { Disclosure } from '@headlessui/react';

export default function Navbar() {
	const navigation = ['Pricing', 'Special team building', 'Our story'];

	return (
		<div className='w-full'>
			<nav className='container relative flex flex-wrap items-center p-8 mx-auto md:justify-between xl:px-0'>
				<Disclosure>
					{({ open }) => (
						<>
							<div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
								<Link href='/' legacyBehavior>
									<a className='flex items-center space-x-2 text-2xl font-medium text-primaryPurple dark:text-gray-100'>
										<span>Teambuilding app</span>
									</a>
								</Link>
							</div>
						</>
					)}
				</Disclosure>

				<div className='hidden mr-3 space-x-3 lg:flex nav__item'>
					{/* menu  */}
					<div className='hidden text-center lg:flex lg:items-center'>
						<ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
							{navigation.map((menu, index) => (
								<li className='nav__item' key={index}>
									<Link href='/' legacyBehavior>
										<a className='inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover: focus:text-white focus:bg-primaryPurple focus:outline-none'>
											{menu}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<ThemeChanger />
				</div>
			</nav>
		</div>
	);
}
