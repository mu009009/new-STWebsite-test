import React from 'react';
import { zeroPad } from '../helpers';
import ServicesFilters from '../data/ServicesFilters';

const FilterList = ({ onResetFilters, onFilterSelect, selectedFilters }) => {
	return (
		<div className="row">
			<div className="col-xs-12">
				<div className="subhead filter-header"> I need to...</div>
				<div className="filter-list">
					{ServicesFilters.map(filter => {
						return (
							<button 
								key={filter.key}
								onClick={() => onFilterSelect(filter.filter)} 
								className="btn btn-link capabilities-filter">
								<div className='filter-checkbox'>
									<img src={`assets/images/services/checkbox-${selectedFilters.indexOf(filter.filter) > -1 ? 'checked' : 'unchecked'}.png`} />
								</div>
								<div className="filter-text">
									{filter.text}
								</div>
							</button>
						)
					})}
				</div>
				<button onClick={() => onResetFilters()} className="btn btn-primary capabilities-filter">show all services</button>
			</div>
		</div>
	)
}

export default FilterList;
