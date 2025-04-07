import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";



const Home = () => {
	return (
		<div className="text-center">
			
			<Navbar />
			<Jumbotron />

			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>

			<Footer />
			
		</div>
	);
};

const cards = [
	{
		image: "https://image.discovery.indazn.com/ca/v2/ca/image?id=97dca488-2c79-4590-bf0c-33a2878569f6&quality=70",
		title: "Basket",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic.",
	},
	{
		image: "https://s3.abcstatics.com/media/bienestar/2019/09/17/futbol-1-kU3C--1248x698@abc.jpg",
		title: "Futbol",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic.",
	},
	{
		image: "https://journey.app/blog/wp-content/uploads/2021/11/reglas-deportivas_Tenis_.jpg",
		title: "Tenis",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic.",
	},
	{
		image: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2024/11/carlos-sainz-f1-qatar-4267929.jpg?tf=3840x",
		title: "F1",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic.",
	}
];

export default Home;