import React from 'react';
import { allFilters, ServicesFilters } from '../../data/ServicesFilters';

const FilterList = ({ onToggleFilters, onFilterSelect, selectedFilters }) => {
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
				<button onClick={() => onToggleFilters()} className="btn btn-primary capabilities-filter">{selectedFilters.length == allFilters.length ? "Clear All" : "Show All Services"}</button>
			</div>
		</div>
	)
}

export default FilterList;
