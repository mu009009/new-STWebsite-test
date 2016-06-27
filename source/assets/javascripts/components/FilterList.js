import React from 'react';

const FilterList = ({ onFilterSelect }) => {
	return (
		<div>
			<div className="subhead filter-header"> I need to...</div>
			<div className="filter-list">
				<button onClick={() => onFilterSelect('NEW_MARKET')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">01</p>introduce my product to a new market.</button>
				<button onClick={() => onFilterSelect('EXTEND_REACH')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">02</p>extend the reach of my sales force.</button>
				<button onClick={() => onFilterSelect('LEADS')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">03</p>deliver more qualified leads to my sales team.</button>
				<button onClick={() => onFilterSelect('FUNNEL')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">04</p>grow the funnel.</button>
				<button onClick={() => onFilterSelect('GAP')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">05</p>close the gap in field/territory coverage.</button>
			</div>
			<button onClick={() => onFilterSelect('ALL')} className="btn btn-primary capabilities-link">show all services</button>
		</div>
	)
}

export default FilterList;
