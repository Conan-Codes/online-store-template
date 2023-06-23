import {ProductList} from "../components/ProductList.jsx";

export const Products = () => {
	/*dummy product list*/
	// eslint-disable-next-line no-unused-vars
	const products = [
		{
			id: 1,
			title : "test the",
			body: "da badi",
		},
		{
			id: 2,
			title : "test the 1",
			body: "da badi",
		},
		{
			id: 3,
			title : "test the 2",
			body: "da badi",
		},

	];
	return (
		<>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl text-center my-5 font-bold underline">
					Products
				</h1>
				<ProductList/>
			</div>
		</>
	)
}