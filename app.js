var blog = require('bootstrap-blog');
var config = require('./config');

//Refer to the main module page for more detailed explanations
//`
blog.start({
	    title: "Karthik blog.",
	    adminGoogleEmail: 'karthikk.314@gmail.com',
	    localPort: 3000, //defaults to 3000
	    liveDomain: 'http://some-app.herokuapp.com',
	    database: {
		            database: config.database,
	        user: config.user,
	        password: config.password,
	        host: config.host,
	        dbPort: config.dbPort
	    },
	    bootstrapPath: '/stylesheets/bootstrap.min.css',
	    pages:[
	        {
			            path: '/about',
	            callback: function (req,res) {
			                    console.log('User has visitied the about page.');
					                    res.send('About page coming soon!');
							                }
        },
	            {
			                path: '/about/history',
					            callback: function (req,res) {
							                    console.log('User has visitied the history page.');
									                    res.send('History page coming soon!');
											                }   
					        }
    ],
	        menu: [
			        {
					            title: 'Twitter',
						                path: 'https://twitter.com/meTheKarthik'
									        }, {
											            title: 'Amazon',
												                path: 'http://www.amazon.com'
															        }
        ]
});
