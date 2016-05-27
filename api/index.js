import githubapi from 'github';

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

		// github.user.getFollowingFromUser( {
		// 	user: "allendav"
		// }, function(err, res) {
		// 	reply( JSON.stringify( res ) );
		// } );

		github.issues.repoIssues( {
			user: "automattic",
			repo: "woocommerce-connect-client",
			state: "open",
			page: 0,
			per_page: 100
		}, function( err, res ) {
			reply( res );
		} );

	}
};
