import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Faq() {
	return (
		<Container className='!p-0'>
			<div className='w-full max-w-2xl p-2 mx-auto rounded-2xl'>
				{faqdata.map((item, index) => (
					<div key={item.question} className='mb-5'>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className='flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200'>
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5 text-primaryPurple`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300'>
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
}

const faqdata = [
	{
		question: 'How does the team building app work?',
		answer:
			'Our team building app provides a user-friendly platform where organizers can plan and manage team building activities. Participants can access the app via their mobile devices to engage in interactive challenges, communicate with team members, and track progress.',
	},
	{
		question:
			'Can the app be customized to suit our team specific needs and goals?',
		answer:
			'Yes, absolutely! Our team building app is highly customizable. Organizers can tailor activities, themes, and goals to align with their teams unique requirements and objectives. You have the flexibility to create an experience that reflects your teams culture and aspirations.',
	},
	{
		question:
			'What types of team building activities are available on the app?',
		answer:
			"Our app offers a diverse range of team building activities, including virtual challenges, problem-solving exercises, icebreaker games, and collaborative projects. From interactive quizzes to creative challenges, there's something for every team to enjoy and learn from.",
	},
	{
		question:
			'Is the app compatible with different devices and operating systems?',
		answer:
			'Yes, our team building app is designed to be compatible with various devices and operating systems. It is accessible via web browsers and offers dedicated mobile apps for both iOS and Android devices, ensuring a seamless user experience across different platforms.',
	},
	{
		question: 'What level of technical expertise is required to use the app?',
		answer:
			'Our team building app is designed to be user-friendly and intuitive, requiring no extensive technical expertise. We provide clear instructions and support materials to guide users through the apps features, making it accessible to individuals of varying technical proficiency.',
	},
	{
		question:
			'How secure is the app in terms of protecting our teams data and privacy?',
		answer:
			"We prioritize the security and privacy of your team's data. Our app incorporates robust encryption measures, secure data storage, and stringent access controls to safeguard sensitive information. We adhere to industry best practices and privacy regulations to ensure a secure environment for your data.",
	},
	{
		question:
			'Is there a limit on the number of participants or events that can be managed through the app?',
		answer:
			'Our team building app is designed to scale with your needs. Whether you have a small team or a large organization, there are no predefined limits on the number of participants or events that can be managed through the app. It is built to accommodate teams of all sizes.',
	},
	{
		question: 'How do participants register for activities through the app?',
		answer:
			'Participants can easily register for activities by accessing the app and browsing the available options. They can select their preferred activities, view details and time slots, and sign up directly within the app.',
	},
	{
		question: 'Can participants modify or cancel their activity registrations?',
		answer:
			'Yes, participants have the flexibility to modify or cancel their activity registrations through the app. They can update their preferences or opt-out of activities based on their availability or changing priorities.',
	},
	{
		question:
			'What kind of analytics and insights can organizers access after the team building event?',
		answer:
			'Our team building app provides comprehensive analytics and insights, including participation rates, activity completion rates, participant feedback, and performance metrics. These valuable insights help organizers assess the success of the event, identify areas for improvement, and measure the impact of team building initiatives.',
	},
	{
		question:
			'What kind of support is provided to organizers during the planning and execution of team building events?',
		answer:
			'We provide dedicated support to organizers throughout the entire process. Our support team is available to assist with app setup, provide guidance on activity selection and customization, address technical issues, and offer prompt assistance whenever needed.',
	},
];
