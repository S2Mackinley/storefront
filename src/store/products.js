let initialState = {
	products: [
		{
			_id: '5f1a52031910080017657ed5',
			name: 'Xbox',
			url: 'https://images.pexels.com/photos/4491606/pexels-photo-4491606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'electronics',
			price: 399.99,
			inStock: 25,
			count: 0,
		},

		{
			_id: '5f1a51ff1910080017657ed4',
			name: 'Apple M1 Laptop',
			url: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'electronics',
			price: 650.0,
			inStock: 15,
			count: 0,
		},

		{
			_id: '5f1a51f71910080017657ed3',
			name: 'TV',
			url: 'https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'electronics',
			price: 2999.0,
			inStock: 3,
			count: 0,
		},

		{
			_id: '5f1a51f01910080017657ed2',
			name: 'iphone and ear combo',
			url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'electronics',
			price: 99.99,
			inStock: 5,
			count: 0,
		},

		{
			_id: '5f1a5f861910080017657ed7',
			name: 'PlayStation',
			url: 'https://images.pexels.com/photos/4219884/pexels-photo-4219884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'electronics',
			price: 12.0,
			inStock: 10,
			count: 0,
		},

		{
			_id: '5f1a5f761910080017657ed6',
			name: 'Switch',
			url: 'https://images.pexels.com/photos/6993182/pexels-photo-6993182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'electronics',
			price: 299.99,
			inStock: 500,
			count: 0,
		},

		{
			_id: '5f1a5faf1910080017657ed8',
			name: 'Hipster Toast',
			url: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'food',
			price: 5.99,
			inStock: 969,
			count: 0,
		},

		{
			_id: '5f1a5faf1910080017657ed9',
			name: 'Pans of Cake',
			url: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			category: 'food',
			price: 1.99,
			inStock: 1,
			count: 0,
		},

		{
			_id: '5f1a5faf1910080017657ed10',
			name: 'Burger',
			url: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'food',
			price: 12.99,
			inStock: 999,
		},

		{
			_id: '5f1a5faf1910080017657ed11',
			name: 'Fries',
			url: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'food',
			price: 0.99,
			inStock: 48,
			count: 0,
		},

		{
			_id: '5f1a5faf1910080017657ed12',
			name: 'Donuts',
			url: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'food',
			price: 12.99,
			inStock: 18,
			count: 0,
		},

		{
			_id: '5f1a5faf1910080017657ed13',
			name: 'Pineapple',
			url: 'https://images.pexels.com/photos/2940256/pexels-photo-2940256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			category: 'food',
			price: 5.99,
			inStock: 90,
			count: 0,
		},
		{
			_id: '5f1a5faf1910080017657ed14',
			name: 'Cheese',
			url: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			category: 'food',
			price: 5.99,
			inStock: 90,
			count: 0,
		},
	],
};

const products = (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		case 'ACTIVE':
			let products = initialState.products.filter((product) =>
				product.category === payload ? product.category : null
			);
			return { products, count: state.count };
		case 'INCREMENT':
			let productList = state.products.map((product) =>
				payload.name === product.name
					? {
							_id: product._id,
							name: product.name,
							url: product.url,
							category: product.category,
							price: product.price,
							inStock: product.inStock - 1,
							count: product.count + 1,
					  }
					: product
			);
			return { product: productList };
		case 'DECREMENT':
			let newProducts = state.products.map((product) =>
				payload.name === product.name
					? {
							_id: product._id,
							name: product.name,
							url: product.url,
							category: product.category,
							price: product.price,
							inStock: product.inStock + payload.count + 1,
							count: product.count - payload.count - 1,
					  }
					: product
			);
			return { products: newProducts };
		default:
			return state;
	}
};

export default products;
