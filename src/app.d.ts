// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare class Items {
	id: string;
	name: string;
	cost: number;
	img: string;
}

// export { Items, __global };
