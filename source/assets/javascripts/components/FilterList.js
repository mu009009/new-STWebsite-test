import React from 'react';

const FilterList = ({ onFilterSelect }) => {
	return (
		<div>
			<button onClick={() => onFilterSelect('ALL')} className="btn btn-primary">show all services</button>
			<ol>
				<li>
					<button onClick={() => onFilterSelect('NEW_MARKET')} className="btn btn-link">introduce my product to a new market.</button>
				</li>
				<li>
					<button onClick={() => onFilterSelect('EXTEND_REACH')} className="btn btn-link">extend the reach of my sales force.</button>
				</li>
				<li>
					<button onClick={() => onFilterSelect('LEADS')} className="btn btn-link">deliver more qualified leads to my sales team.</button>
				</li>
				<li>
					<button onClick={() => onFilterSelect('FUNNEL')} className="btn btn-link">grow the funnel.</button>
				</li>
				<li>
					<button onClick={() => onFilterSelect('GAP')} className="btn btn-link">close the gap in field/territory coverage.</button>
				</li>
			</ol>
		</div>
	)
}

export default FilterList;
