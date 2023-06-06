import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import { benefitOne, benefitTwo, features } from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';
import Features from '../components/features';

export default function Home() {
	return (
		<>
			<Head>
				<title>Teambuilding app</title>
				<meta name='description' content='Teambuilding app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				pretitle='Main features'
				title=' Why should you use our solution'>
				Say goodbye to mundane team-building exercises. Our solution offers a
				range of powerful features that will transform your team dynamics and
				drive success.
			</SectionTitle>
			<Benefits data={benefitOne} />
			<Benefits imgPos='right' data={benefitTwo} />
			<SectionTitle
				pretitle='What you get'
				title='Platform +  team building organisation'>
				Let us take care of every aspect of your team building event, from
				planning to activities. Gain exclusive access to our cutting-edge
				platform and custom mobile apps, ensuring a seamless and engaging
				experience for your team.
			</SectionTitle>
			<Features data={features} />
			<SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
				Got questions? We've got answers! Check out our frequently asked
				questions below for quick and helpful information about our
				product/services.
			</SectionTitle>
			<Faq />
			<Cta />
			<Footer />
		</>
	);
}
