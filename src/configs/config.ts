const api = {
	__: 'api',
	env: 'dev',
	version: 'v1',
	action: {
		create: 'add',
		fetch: 'get',
		fetchAll: 'all',
		update: 'edit',
		delete: 'remove'
	}
}

function apiPrefix() {
	return `/${api.__}/${api.version}/`;
}

module.exports = {
	config,
	api,
	apiPrefix
}
