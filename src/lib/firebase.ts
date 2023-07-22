import { initializeApp } from 'firebase/app';
import 'firebase/functions';
import { getDatabase, ref, update } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCdAS56wt9Tq8AExIMfwfVD7LI3chQtu8U',
	authDomain: 'front-project-133bc.firebaseapp.com',
	databaseURL: 'https://front-project-133bc-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'front-project-133bc',
	storageBucket: 'front-project-133bc.appspot.com',
	messagingSenderId: '242911610176',
	appId: '1:242911610176:web:97ac668cff28be7263a6a5',
	measurementId: 'G-S37TK8Y2QQ'
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const database = getDatabase();

export const addToCart = (prodName: string, prodPrice: string, prodVolume: string) => {
	const name = document.querySelector(prodName);
	const price = document.querySelector(prodPrice);
	const volume = document.querySelector(prodVolume);
	if (!name || !price || !volume) return;

	console.log(name.textContent);
	console.log(price.textContent);
	console.log(volume.textContent);

	const id = genrateRandomNumber(1, 1000).toString();
	console.log(id);

	saveToFirebase(id, name.textContent ?? '', price.textContent ?? '', volume.textContent ?? '');
};

const genrateRandomNumber = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const saveToFirebase = (userID: string, name: string, price: string, vol: string) => {
	update(ref(database, '/orders/' + userID), {
		productName: name,
		productPrice: price,
		productVolume: vol
	});
};
