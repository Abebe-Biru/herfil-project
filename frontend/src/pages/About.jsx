import {
	BusinessStrategy,
	CompetitiveAdvantage,
	ContactUs,
	CoreValues,
	FutureBusinessActivities,
	ManagementBackground,
	Mission,
	OurClients,
	QualityAssurance,
	ScopeOfServices,
	Vision,
	WhatWeDo,
	WhoWeAre,
} from '../components/About';
import styles from '../style';


const About = () => {
	return (
		<div className={`${styles.marginY} ${styles.marginX} text-white container mx-auto p-4 `}>
			<h1 className="text-4xl font-bold mb-8 text-center">
				<span className="inline-block mr-2 text-yellow-500 uppercase"></span>About Us
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<WhoWeAre />
				<Mission />
				<Vision />
				<CoreValues />
				<CompetitiveAdvantage />
				<BusinessStrategy />
				<WhatWeDo />
				<QualityAssurance />
				<ScopeOfServices />
				<FutureBusinessActivities />
				<OurClients />
				<ManagementBackground />
				<ContactUs />
			</div>
		</div>
	);
};

export default About;