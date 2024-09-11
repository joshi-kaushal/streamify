export function shortenCurrency(value: number) {
	return new Intl.NumberFormat('en-IN', {
		notation: 'compact',
		compactDisplay: 'short',
	}).format(value);
} 
