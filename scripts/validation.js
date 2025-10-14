const showInputError = (labelElement, inputElement, errorMessage) => {
  const errorModal = labelElement.querySelector(".modal__error");
  inputElement.classList.add("modal__input-error");
  errorModal.textContent = errorMessage;
};

const hideInputError = (labelElement, inputElement) => {
  const errorModal = labelElement.querySelector(".modal__error");
  inputElement.classList.remove("modal__input-error");
  errorModal.textContent = "";
};

const checkInputValidity = (labelElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(labelElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(labelElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  // console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("modal__submit-button-inactive");
  } else {
    buttonElement.classList.remove("modal__submit-button-inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submit-button");

  // console.log(inputList);
  // console.log(buttonElement);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement.parentElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
      // console.log("click submit button.");
    });

    setEventListeners(formElement);
    // console.log(formElement);
  });
};

enableValidation();
