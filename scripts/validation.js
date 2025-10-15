const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button-inactive",
  inputErrorClass: "modal__input-error",
  errorClass: "modal__error",
};

const showInputError = (labelElement, inputElement, errorMessage, config) => {
  const errorModal = labelElement.querySelector(`.${config.errorClass}`);
  inputElement.classList.add(config.inputErrorClass);
  errorModal.textContent = errorMessage;
};

const hideInputError = (labelElement, inputElement, config) => {
  const errorModal = labelElement.querySelector(`.${config.errorClass}`);
  inputElement.classList.remove(config.inputErrorClass);
  errorModal.textContent = "";
};

const checkInputValidity = (labelElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      labelElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(labelElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  // console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
};

const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};

const enableButton = (buttonElement, config) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
};

const resetValidation = (formElement, inputList, config) => {
  inputList.forEach((input) => {
    hideInputError(input.parentElement, input, config);
  });
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // console.log(inputList);
  // console.log(buttonElement);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement.parentElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
      // console.log("click submit button.");
    });

    setEventListeners(formElement, config);
    // console.log(formElement);
  });
};

enableValidation(settings);
