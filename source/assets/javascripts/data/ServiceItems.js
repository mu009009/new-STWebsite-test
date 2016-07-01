const ServiceItems = [
	{
		key: 1,
		name: 'Data Management',
		icon: "data_management.png",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 2,
		name: 'Data Hygiene',
		icon: "data-hygiene-color.png",
		categories: ['ALL', 'EXTEND_REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 3,
		name: 'Analytics',
		icon: "analytics.png",
		categories: ['ALL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 4,
		name: 'IT Integration',
		icon: "it_integration.png",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 5,
		name: 'Targeting',
		icon: "targeting.png",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 6,
		name: 'CRM',
		icon: "crm.png",
		categories: ['ALL', 'GAP'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 7,
		name: 'Multi-Channel',
		icon: "multi_channel_marketing.png",
		categories: ['ALL', 'REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 8,
		name: 'Teleservices',
		icon: "teleservices.png",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 9,
		name: 'Lead Gen',
		icon: "lead_generation.png",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 10,
		name: 'Support',
		icon: "sales_support.png",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 11,
		name: 'Inside Sales',
		icon: "inside_sales.png",
		categories: ['ALL', 'NEW_MARKET'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 12,
		name: 'Marketing Automation',
		icon: "marketing_automation.png",
		categories: ['ALL', 'NEW_MARKET'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 13,
		name: 'UX/Visual Design',
		icon: "ux-visual-design-color.png",
		categories: ['ALL', 'FUNNEL', 'EXTEND_REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 14,
		name: 'App Dev',
		icon: "app_dev.png",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 15,
		name: 'Interactive',
		icon: "interactive.png",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 16,
		name: 'Payments & Incentives',
		icon: "payments_incentives.png",
		categories: ['ALL', 'GAP', 'EXTEND_REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 17,
		name: 'Event Management',
		icon: "event_management.png",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 18,
		name: 'Direct Mail',
		icon: "directmail.png",
		categories: ['ALL', 'GAP'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, 
];

export default ServiceItems;
