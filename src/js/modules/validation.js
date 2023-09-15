function validation () {
    const sendBtn = document.querySelector('.feedback__button');
    sendBtn.setAttribute('disabled', 'true');
    sendBtn.classList.add('disable');
    const inputName = document.querySelector('input[name="fb_name"]');
    const NAME_REGEXP = /[a-zA-Zа-яА-я]/g;

    const inputText = document.querySelector('textarea[name="fb_message"]');
    
    const inputEmail = document.querySelector('input[name="fb_email"]');
    
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function isInputNameValid(value) {
        return (NAME_REGEXP.test(value) && value.length > 2);
    }

    function isInputTextValid(value) {
        return (value.length > 5 && value.length < 30);
    }

    function isInputEmailValid(value) {
        return (EMAIL_REGEXP.test(value) && value.length > 8);
    }

    function validateInputs(nameOfInput, validTest) {
        function disableBtn() {
            if(isInputEmailValid(inputEmail.value) && isInputNameValid(inputName.value)) {
                sendBtn.setAttribute('disabled', 'false');
                sendBtn.classList.remove('disable');
            } else {
                sendBtn.setAttribute('disabled', 'true');
                sendBtn.classList.add('disable');
            }
        }
        function onInput() {
            if(validTest(nameOfInput.value)) {
               nameOfInput.classList.remove('error');
            } else {
                nameOfInput.classList.add('error');
            }
        }
        nameOfInput.addEventListener('blur', onInput);
        nameOfInput.addEventListener('blur', disableBtn);
    }
    
    validateInputs(inputName, isInputNameValid);

    validateInputs(inputText, isInputTextValid);

    validateInputs(inputEmail, isInputEmailValid);
}

module.exports = validation;