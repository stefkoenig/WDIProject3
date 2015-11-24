var request = require('request')

function show(req,res){
	var requestURL = "https://api.meetup.com/find/groups?zip=90403&country=US&upcoming_events=true&fallback_suggestions=true&text=tech&order=distance&page=6&sign=true&key=3a2b371927762ef203771e35256a42"
	request(requestURL,function(error,response,body){
		var eventInfo = JSON.parse(body)
		console.log("info", eventInfo)
		console.log("res", response)
		res.json(eventInfo)
		})
}

module.exports = {
  show: show
}