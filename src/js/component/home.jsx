import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

import homerImp from "../../img/homero impertinente.jpg";
import homerDoh from "../../img/homero dogh.jpg";
import homerWoho from "../../img/homero wohoo.jpg";

const cards = [
{
	image : homerImp,
	title : "Homero Impertinente",
	description : "Homero está impertinente porque quiere cerveza" 
},
{
	image : homerDoh,
	title : "Homero Do-hh!!",
	description : "Homero se ha equivocado de nuevo, por eso hace -Do-hh!!- " 
},
{
	image : homerWoho,
	title : "Homero Wooohoooo!!",
	description : "Homero tiene la razón! y está orgulloso" 
},
{
	image : "https://www.telegraph.co.uk/multimedia/archive/02021/si_2021698c.jpg?imwidth=960",
	title : "Homero & Marge",
	description : "Homero está feliz porque siempre cuenta con Marge!" 
}
]

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<Card cards={cards}/>
			<Footer />
		</div>
	);
};

export default Home;
