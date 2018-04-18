import { Component, OnInit } from "@angular/core";
import ICard from "../interfaces/ICard";
import Deck from "./../classes/Deck";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	// write your component code here; create the properties and methods you need to get the job
	// done as described in "app.html"; start by importing modules you need such as "./../classes/Deck"

	public deck: Deck;
	public lastDrawnCard: ICard;
	public userHand: ICard[];

	public ngOnInit():void {
		this.deck = new Deck();
		this.userHand = []; 

	}
	public drawCard() { 
		this.lastDrawnCard = this.deck.drawCard();
		this.userHand.push(this.lastDrawnCard);
		console.log(this.userHand);
		
	}

	// My original code which worked but I was having trouble calling it correctly in the HTML
	// public myDeck = new Deck();
	// drawACard() {
	// 	const card = this.myDeck.drawCard();
	// 	console.log(card);
	// }
	// constructor() {}
}
