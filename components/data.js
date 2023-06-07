import {
	ViewListIcon,
	DeviceMobileIcon,
	AdjustmentsIcon,
	SunIcon,
	DocumentDownloadIcon,
	HeartIcon,
	CloudIcon,
	GlobeIcon,
	ChatIcon,
	CheckCircleIcon,
	MoonIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/benefit-two.png';

import activity1 from '../public/img/activity1.jpg';
import activity2 from '../public/img/activity2.jpg';
import activity3 from '../public/img/activity3.jpg';
import activity4 from '../public/img/activity4.jpg';

const benefitOne = {
	title: 'Benefits for employees',
	desc: 'Mobile app for teams to collaborate, share ideas, and work together towards common goals. With real-time communication and app notifications, your team will stay connected and informed, no matter where they are.',
	image: benefitOneImg,
	bullets: [
		{
			title: 'Manage my team building activities',
			desc: 'Manage your activities and your full team building harmonogram',
			icon: <ViewListIcon />,
		},
		{
			title: 'Stay updated',
			desc: 'Updates about upcoming activities or changes via push notifications',
			icon: <DeviceMobileIcon />,
		},
		{
			title: 'Team gamification and real time results',
			desc: 'Earn points from activities, compare with others and win prices',
			icon: <SunIcon />,
		},
	],
};

const benefitTwo = {
	title: 'Benefits for company',
	desc: 'Gain valuable insights into your teams and engagement through our analytics dashboard. Track progress and make data-backed decisions to optimize team dynamics, productivity and satisfaction.',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Data-Driven insights',
			desc: 'What people like, how they enjoy it, who win and what motivate them',
			icon: <DocumentDownloadIcon />,
		},
		{
			title: 'Save costs & automatise with AI tools',
			desc: 'Everything managed (food, venue, activities, results, ...) in one platform',
			icon: <AdjustmentsIcon />,
		},
		{
			title: 'Engaging activities and happy employees',
			desc: 'Innovative and new activities specially prepared for your team needs',
			icon: <HeartIcon />,
		},
	],
};

export { benefitOne, benefitTwo };

const features = [
	{
		title: 'Administration & Analytics',
		description: 'Access to our platform',
		icon: <CloudIcon />,
	},
	{
		title: 'Registration website',
		description:
			'For registering your team for activities and special requirements (food, T-Shirt, ...)',
		icon: <GlobeIcon />,
	},
	{
		title: 'iOS/Android mobile apps',
		description: 'Mobile apps for team members during team building',
		icon: <DeviceMobileIcon />,
	},
	{
		title: 'Website with real time results',
		description: 'Custom website with real time results from activities',
		icon: <GlobeIcon />,
	},
	{
		title: 'Support',
		description: 'Support before, during and after the team building',
		icon: <ChatIcon />,
	},
	{
		title: 'Team building organisation',
		description: 'Based on your company needs and size',
		icon: <CheckCircleIcon />,
	},
	{
		title: 'Custom creative activities',
		description:
			'No matter how many days, we will engage your employees with full harmonogram of different activities',
		icon: <MoonIcon />,
	},
	{
		title: 'Administration for referee',
		description:
			'No matter how many days, we will engage your employees with full harmonogram of different activities',
		icon: <GlobeIcon />,
	},
];

export { features };

const activities = [
	{
		path: activity1,
		title: 'Volleyball',
	},
	{
		path: activity2,
		title: 'Karaoke',
	},
	{
		path: activity3,
		title: 'Cycling',
	},
	{
		path: activity4,
		title: 'Team',
	},
];

export { activities };
