import React from 'react';

const FilterList = ({ onFilterSelect }) => {
	return (
		<div className="row">
			<div className="col-xs-12">
				<div className="subhead filter-header"> I need to...</div>
				<div className="filter-list">
					<button onClick={() => onFilterSelect('NEW_MARKET')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">01</p>Integrating data from all systems that support our marketing and sales activities.</button>
					<button onClick={() => onFilterSelect('EXTEND_REACH')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">02</p>Having enough "boots on the ground" to effectively maximize our sales opportunities.</button>
					<button onClick={() => onFilterSelect('LEADS')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">03</p>Providing marketing and sales support for our distribution channel partners.</button>
					<button onClick={() => onFilterSelect('FUNNEL')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">04</p>Improving leads -- getting them, qualifying them, and closing them.</button>
					<button onClick={() => onFilterSelect('GAP')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">05</p>I need purpose-built apps to support my marketing and sales activities.</button>
					<button onClick={() => onFilterSelect('GAP')} className="btn btn-link capabilities-link"><p className=" capabilities-numeral">06</p>Implementing a loyalty program to reward our best customers</button>
				</div>
				<button onClick={() => onFilterSelect('ALL')} className="btn btn-primary capabilities-link">show all services</button>
			</div>
		</div>
	)
}

export default FilterList;
