
function articles(publication, action) {
	for (let article of publication) {
		action(article)		
	}
}

rss = {
	read: async function read(url) {
		fetch(url)
			.then(function(response) {
				return response.json();
			})
	}
}

function render(template) {
	return function(article) {
		// Clone the new row and insert it into the table
		var td = clone.querySelectorAll("td");
		td[0].textContent = "1235646565";
		td[1].textContent = "Stuff";

		tbody.appendChild(clone);

		// Clone the new row and insert it into the table
		var clone2 = document.importNode(template.content, true);
		td = clone2.querySelectorAll("td");
		td[0].textContent = "0384928528";
		td[1].textContent = "Acme Kidney Beans 2";

		tbody.appendChild(clone2);
	}
}

articles(rss.read(url), render(template))
articles(rss.read(url2), render(template))
