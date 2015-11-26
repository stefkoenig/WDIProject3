/////////// Step 8 ///////////
module.exports = {
  'facebookAuth': {
      'clientID': '1208037839222800',
      'clientSecret': '0714e32362b489e580f18319a1a2a44b',
      'callbackURL': 'http://localhost:3000/auth/facebook/callback',
      'profileFields': ['emails', 'displayName']
  },

  'meetupAuth': {
  	'client_id':'kpa1bi7nav9dvlh4hvglkd9hlh',
	'client_secret':'p3lj3ukjg7vsnnvdc6rhf1jl00',
	'grant_type':'authorization_code',
	'redirect_uri':'https://secure.meetup.com/oauth2/authorize
    ?client_id=kpa1bi7nav9dvlh4hvglkd9hlh
    &response_type=code&redirect_uri=http://127.0.0.1:3000',
	'code':'http://127.0.0.1:3000'

  }
}
///////// End Step 8 /////////
