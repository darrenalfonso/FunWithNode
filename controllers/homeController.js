(function(homeController) {
	var data = require("../data");

	homeController.init = function (app) {
		app.get("/", function(req, res) {
				data.getNoteCategories (function (err, results) {
						res.render("index", { title: "The Board", error: err, categories: results });
				});
		});
	};

	
})(module.exports); //module.exports is everything that this function is exporting