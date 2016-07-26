import React from 'react';
import { zeroPad } from '../../helpers';
import { allFilters, ServicesFilters } from '../../data/ServicesFilters';

const FilterList = ({ onToggleFilters, onFilterSelect, selectedFilters }) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="highlighted-content hidden-xs-down"> What keeps you awake at night? </div>

        <div className="filter-list hidden-xs-down">
          {ServicesFilters.map(filter => {
            return (
              <button
                key={filter.key}
                onClick={() => onFilterSelect(filter.filter)}
                className="btn btn-link capabilities-filter">
                <div className='filter-checkbox'>
                  <img src={`/assets/images/services/${selectedFilters === filter.filter || selectedFilters === 'ALL'? 'on' : 'off'}.png`} />
                </div>
                <div className="filter-text">
                  {filter.text}
                </div>
              </button>
              )
          })}
        </div>
        <button
          onClick={() => onToggleFilters()}
          disabled={selectedFilters === 'ALL'}
          className="btn btn-primary capabilities-filter hidden-xs-down">
          Show All Services
        </button>
      </div>
    </div>
  )
}

export default FilterList;
