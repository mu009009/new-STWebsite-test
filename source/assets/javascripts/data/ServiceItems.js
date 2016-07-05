const ServiceItems = [
	{
		key: 1,
		name: 'Data Management',
		icon: "data_management",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 2,
		name: 'Data Hygiene',
		icon: "data_hygiene",
		categories: ['ALL', 'EXTEND_REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 3,
		name: 'Analytics',
		icon: "analytics",
		categories: ['ALL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 4,
		name: 'IT Integration',
		icon: "it_integration",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 5,
		name: 'Targeting',
		icon: "targeting",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 6,
		name: 'CRM',
		icon: "crm",
		categories: ['ALL', 'GAP'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 7,
		name: 'Multi-Channel',
		icon: "multi_channel_marketing",
		categories: ['ALL', 'REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 8,
		name: 'Teleservices',
		icon: "teleservices",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 9,
		name: 'Lead Gen',
		icon: "lead_generation",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 10,
		name: 'Support',
		icon: "sales_support",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 11,
		name: 'Inside Sales',
		icon: "inside_sales",
		categories: ['ALL', 'NEW_MARKET'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 12,
		name: 'Marketing Automation',
		icon: "marketing_automation",
		categories: ['ALL', 'NEW_MARKET'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 13,
		name: 'UX/Visual Design',
		icon: "ux_visual_design",
		categories: ['ALL', 'FUNNEL', 'EXTEND_REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 14,
		name: 'App Dev',
		icon: "app_dev",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 15,
		name: 'Interactive',
		icon: "interactive",
		categories: ['ALL', 'FUNNEL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 16,
		name: 'Payments & Incentives',
		icon: "payments_incentives",
		categories: ['ALL', 'GAP', 'EXTEND_REACH'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 17,
		name: 'Event Management',
		icon: "event_management",
		categories: ['ALL', 'LEADS'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, {
		key: 18,
		name: 'Direct Mail',
		icon: "directmail",
		categories: ['ALL', 'GAP'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam diam mi, ut euismod lectus scelerisque quis. Suspendisse faucibus nisl pulvinar augue feugiat, non consequat sapien pretium. Nunc tellus purus.'
	}, 
];

export default ServiceItems;
