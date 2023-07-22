declare class Items {
	id: string;
	name: string;
	cost: number;
	img: string;
}

export const items: Items[] = [
	{
		id: '1',
		name: 'Cappuccino',
		img: '../img/brown.png',
		cost: 5
	},
	{
		id: '2',
		name: 'Latte',
		img: '../img/yellow.png',
		cost: 3.5
	},
	{
		id: '3',
		name: 'Americano',
		img: '../img/green.png',
		cost: 7
	},
	{
		id: '4',
		name: 'Espresso',
		img: '../img/green.png',
		cost: 10
	}
];
