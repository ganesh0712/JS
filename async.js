
	function makeRequest(location) {
		 return new Promise((resolve, reject) =>
		 {
		 	console.log(`making request to ${location}`)
		 	if(location==="Google")
		 		resolve('Google says HII')
		 	
		 	else
		 		reject('We can only talk to Google')
		 	
		 })
	}

	function processrequest(response) {
		return new Promise((resolve,reject) =>
		{
				console.log('Processing respose')
				resolve(`extra information ${response}`)
		})
	}


	async function doWork() {
		try{
		const response =await makeRequest('Facebook')
		console.log('Response received')
		const processreponse= await processrequest(response)
		console.log(processreponse)
	}
	catch (error){
		console.log(error)
	}
	}
	doWork()
