import Head from 'next/head';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import { activities } from '../components/data';
import Footer from '../components/footer';
import Cta from '../components/cta';
import Activities from '../components/activities';
import Faq from '../components/faq';

export default function Home() {
	return (
		<>
			<Head>
				<title>Teambuilding app</title>
				<meta name='description' content='Teambuilding app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
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
