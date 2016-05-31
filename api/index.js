import githubapi from 'github';
import config from 'config';
import async from 'async';

module.exports = {
	issues: function( request, reply ) {

		var github = new githubapi( {
			version: "3.0.0",
			host: "api.github.com",
			pathPrefix: "",
			timeout: 5000,
			headers: {
				"user-agent": "Urban-Chainsaw-TODO-App"
			}
		} );

		const token = config.get( 'github.token' );
		const repositories = config.get( 'github.repositories' );

		async.map( repositories, function( repository, callback ) {
			if ( token.length ) {
				github.authenticate( {
					type: 'token',
					token: token
				} );
			}

			github.issues.repoIssues( {
				user: repository.user,
				repo: repository.repo,
				state: "open",
				page: 0,
				per_page: 100
			}, function( err, res ) {
				// TODO handle errors better
				callback( err, res );
			} );

		}, function( error, results ) {
			const merged = [].concat.apply( [], results );
			// pull requests may be included in repoIssues, so
			// filter out pull requests
			const filtered = merged.filter( function( result ) {
				return ( "undefined" === typeof result.pull_request );
			} );
			reply( filtered );
		} );

	}
};
