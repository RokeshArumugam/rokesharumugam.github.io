document.getElementsByClassName("form")[0].addEventListener("submit", (ev) => {
	ev.preventDefault();
	fetch(ev.target.action, {
		method: ev.target.method,
		body: new FormData(ev.target),
		headers: {
			"Accept": "application/json"
		}
	}).then(
		(response) => response.json()
	).then(async (json) => {
		if ("errors" in json) {
			let errorMsgs = [];
			for (const error of json["errors"]) {
				errorMsgs.push(
					document.querySelector(`label[for="${error["field"]}"]`).firstChild.wholeText + " " + error["message"] + "."
				);
			};
			await alert(errorMsgs.join("\n"), modalTypes.Warning, "Please make some changes");
		} else {
			await alert("Thank you for your feedback, it has been submitted successfully!\nYou may close this window now.", modalTypes.Success, "Thank you");
			ev.target.innerHTML = `
				<div class="form__completionMsg">
					<p>Successfully submitted!</p>
					<p>You can close this window now.</p>
				</div>
			`;
			ev.target.classList.add("completed");
		};
	}).catch(async (error) => {
		await alert("There was a problem submitting your feedback.\nPlease try again.", modalTypes.Error, "Sorry...");
	});
});