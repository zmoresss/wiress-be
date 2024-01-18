const API = {
	__: 'api',
	VERSION: 'v1',
	ACTION: {
		CREATE: 'add',
		FETCH: 'get',
		FETCH_ALL: 'all',
		UPDATE: 'edit',
		DELETE: 'remove'
	}
};

module.exports = {
	ENV: process.env.NODE_ENV || 'dev',
	PORT: process.env.PORT || 9000,
	API_PREFIX: () => {
		return `/${API.__}/${API.VERSION}/`;
	}
};