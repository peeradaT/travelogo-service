import { currencyListData } from '../src/dataAccess/currency.services';
export const currencyList = (sort: string) => {
	const result = currencyListData();
	const sortCurrencies = (
		currencies: any,
		sort: 'ascending' | 'descending'
	): any => {
		if (sort === 'ascending') {
			return currencies.sort((a, b) => a.label.localeCompare(b.label));
		} else if (sort === 'descending') {
			return currencies.sort((a, b) => b.label.localeCompare(a.label));
		} else {
			throw new Error(
				'Invalid sortOrder. Use "ascending" or "descending".'
			);
		}
	};
	const sortedCurrencies = sortCurrencies(result, 'descending');
	return sortedCurrencies;
};
