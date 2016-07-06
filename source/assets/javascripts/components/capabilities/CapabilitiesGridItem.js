import React, { Component } from 'react';

class CapabilitiesGridItem extends Component {
	render() {
		const { item, selectCapability, dismissCapability, selectedCapability } = this.props;
		
		if (selectedCapability === item.key) {
			return (
      <article className="col-xs-12 content__item content__item--show">
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
              <img src={`assets/images/capabilities/${item.icon}-color.png`} className="capabilities-icon center-block" alt="Demand generation color" />
							<h3 className="title title--full">{item.name}</h3>
						</div>
					</div>
					<div className="col-sm-3">
						<button onClick={() => {dismissCapability()}} className="close-button close-button--show pull-right">
							<svg version="1.1" viewport="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
								<line stroke-width={2} stroke="#888" x1={1} x2={25} y1={25} y2={1}>/</line>
								<line stroke-width={2} stroke="#888" x1={1} x2={25} y1={1} y2={25}>/</line>
							</svg>
						</button>
          </div>
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <p className="text-xs-center text-muted">
              We help you find, keep and profitably grow your customers.
            </p>
          </div>
        </div>
        <div className="cap-details">
          <div className="row">
            <div className="col-md-6 cap-summary">
              Demand creation is Technekes' process to help you drive sales. We do this by designing, orchestrating and executing highly integrated marketing and sales tactics. We give you the people, technology and know-how to identify decision makers, qualify opportunities and engage customers and prospects in ways that deliver a measurable and profitable return on your marketing dollar.
            </div>
            <div className="col-md-6 cap-action-items">
              <div className="highlighted-content-box">
                <div className="cap-action-items__heading">
                  TURNKEY DEMAND CENTER SERVICES TO:
                </div>
              </div>
              <ul className="cap-action-items__list">
                <li>Identify decision makers</li>
                <li>Qualify opportunities</li>
                <li>Maximize customer engagement across multiple channels</li>
                <li>Generate, nurture and score leads</li>
                <li>Integrate and align with sales processes</li>
                <li>Measure program impact and determine ROI</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
			);
		}

		return (
			<a className="col-sm-3 grid__item icon-box" onClick={() => selectCapability(item.key)}>
				<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}.png`} alt={item.name} />
				<img className="capabilities-icon center-block" src={`assets/images/capabilities/${item.icon}-color.png`} alt={item.name} />
				<div className="loader"></div>
				<div className="meta meta--preview">
					<h3 className="title title--preview">
						{item.name}
					</h3>
				</div>
			</a>
		)
	}
};

export default CapabilitiesGridItem;
