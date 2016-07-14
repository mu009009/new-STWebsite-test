import React, { Component } from 'react';

class CapabilityDetails extends Component {
	render() {
		const { item, selectedCapability, dismissCapability, itemKey } = this.props;
		return (
      <article style={this.props.style} className={`${selectedCapability === itemKey ? 'active' : 'inactive'} content__item`}>
        <div className="row content__item__heading">
          <div className="col-xs-12 col-sm-3">
            <div className="cap-tags">
              <div className="tag">Data Management</div>
              <div className="tag">Data Hygiene</div>
              <div className="tag">Analytics</div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="cap-icon-title">
							<img src={`/assets/images/capabilities/${item.icon}-color.png`} className="capabilities-icon center-block" alt="Demand generation color" />
							<div className="loader"></div>
							<h3 className="title title--full">{item.name}</h3>
						</div>
					</div>
						<button onClick={() => {dismissCapability()}} className="close-button close-button--show pull-right">
							<svg version="1.1" viewport="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
								<line strokeWidth={2} stroke="#888" x1={1} x2={25} y1={25} y2={1}>/</line>
								<line strokeWidth={2} stroke="#888" x1={1} x2={25} y1={1} y2={25}>/</line>
							</svg>
						</button>
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <p className="text-xs-center text-muted title--subhead">
              {item.subhead}
            </p>
          </div>
        </div>
				<div className="cap-details row">
					<div dangerouslySetInnerHTML={{__html: item.description}} className="col-xs-12 col-md-6 cap-summary">
					</div>
					<div className="col-md-6 col-xs-12 cap-action-items">
						<div className="highlighted-content-box">
							<div className="cap-action-items__heading">
								{item.listhead}:
							</div>
						</div>
						<ul className="cap-action-items__list">
							{item.listitems.map(function(o, i){
								return <li key={i}>{o}</li>
							})}
						</ul>
					</div>
        </div>
      </article>
		);
	}
}

export default CapabilityDetails;
