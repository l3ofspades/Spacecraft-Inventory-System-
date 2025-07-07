function InventoryItem ({
	name,
	type,
	quantity = 0,
	price = 0,
}) {
	const totalValue = quantity * price;

	return (
		<div>
			<h2>{name} ({type})</h2>
			<p>Quantity: {quantity}</p>
			<p>Price: ${price.toFixed(2)}</p>

			{/* Low stock alert */}
			{quantity < 5 && (
				<Message>
					Warning: Low stock for {name}!
				</Message>
			)}
			{/* High value alert */}
			{totalValue > 1000 && (
				<Message>
					Alert: {name} is high value! Secure it proprerly.
				</Message>
			)}
		
		</div>
	);
}
