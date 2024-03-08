import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cards = [
{
	image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhomer-simpson-funny-pictures&psig=AOvVaw2kW55zY5sp_JI9NKnOfy6z&ust=1709945846703000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCU1YC744QDFQAAAAAdAAAAABAJ",
	title : "Homero Impertinente",
	description : "Homero está impertinente porque quiere cerveza" 
},
{
	image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hollywoodreporter.com%2Ftv%2Ftv-news%2Fsimpsons-puts-homer-deaths-door-721455%2F&psig=AOvVaw2kW55zY5sp_JI9NKnOfy6z&ust=1709945846703000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCU1YC744QDFQAAAAAdAAAAABAg",
	title : "Homero Doughh!!",
	description : "Homero se ha equivocado de nuevo, por eso hace -doughh!!- " 
},
{
	image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abc.es%2Fplay%2Fseries%2Fnoticias%2Fabci-seria-homer-simpson-si-existiera-mundo-real-201808221834_noticia.html&psig=AOvVaw2kW55zY5sp_JI9NKnOfy6z&ust=1709945846703000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCU1YC744QDFQAAAAAdAAAAABAr",
	title : "Homero Wooohoooo!!",
	description : "Homero tiene la razón! y está orgulloso" 
},
{
	image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdcheroesrpg.fandom.com%2Fwiki%2FHomer_Simpson&psig=AOvVaw2kW55zY5sp_JI9NKnOfy6z&ust=1709945846703000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCU1YC744QDFQAAAAAdAAAAABA-",
	title : "Homero Feliz!!",
	description : "Homero está feliz!" 
}
]

//create your first component
const Home = () => {
	return (
		<div >
			<Navbar />
			<Jumbotron />
			<Card cards={cards}/>
			<Footer />
		</div>
	);
};

export default Home;
