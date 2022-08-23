const form = document.querySelector(".form");
const errorMessage = form.querySelector(".result");
const inputEmail = form.querySelector(".form__email");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputEmail();
});

const checkInputEmail = () => {
	const inputEmailValue = inputEmail.value.trim();

	if (!inputEmailValue) {
		setErrorMessage("Email não pode ser vazio");
	} else if (!isEmail(inputEmailValue)) {
		setErrorMessage("Email nao existe ou nao e valido");
	} else {
		alert("Email registrado com sucesso");
	}
};

const isEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const setErrorMessage = (message) => {
	//adicionando mensagem de erro no input
	errorMessage.innerText = message;

	//adicionando classe de erro
	errorMessage.className = "result error";
};
