import { Section } from '../components';



export default function Home() {
  return (
		<div className="main">
			<Section
				imageUrl="/image.png"
				subheading="Offer your customers the fastest performance possible with Plume. They’re ready."
				buttonText="Learn more about WiFi 6E"
				onButtonClick={() => {  }}
			>
				Future-proof <wbr />
				your business. <wbr />
				WiFi 6E is here.
			</Section>
		</div>
	);
}
