const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

const editProfileOpenBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);

const newPostOpenBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostExitBtn = newPostModal.querySelector(".modal__close-button");
const newPostImageInput = newPostForm.querySelector("#new-image-input");
const newPostCaptionInput = newPostForm.querySelector(
  "#new-image-caption-input"
);
const newPostSubmitButton = newPostModal.querySelector(".modal__submit-button");

const imagePreviewModal = document.querySelector("#image-preview-modal");
const imagePreviewCloseBtn = imagePreviewModal.querySelector(
  ".modal__close-button"
);
const imagePreview = imagePreviewModal.querySelector(".modal__image");
const imageCaption = imagePreviewModal.querySelector(".modal__image_caption");

// Edit Profile Listeners
editProfileOpenBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  resetValidation(
    editProfileForm,
    [editProfileNameInput, editProfileDescriptionInput],
    settings
  );
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// New Post Listeners
newPostOpenBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostExitBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

newPostForm.addEventListener("submit", handleAddCardSubmit);

//Preview Image Listeners
imagePreviewCloseBtn.addEventListener("click", function () {
  closeModal(imagePreviewModal);
});

////Functions
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardImageEl.addEventListener("click", function () {
    imagePreview.src = data.link;
    imagePreview.alt = data.name;
    imageCaption.textContent = data.name;
    openModal(imagePreviewModal);
  });

  const likeButtonEl = cardElement.querySelector(".card__like-button");
  likeButtonEl.addEventListener("click", function () {
    likeButtonEl.classList.toggle("card__like-button_active");
  });

  const deleteButtonEl = cardElement.querySelector(".card__delete-button");
  deleteButtonEl.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  // console.log("New Image URL: " + newPostImageInput.value);
  // console.log("New Post Caption: " + newPostCaptionInput.value);

  const newPost = getCardElement({
    name: newPostCaptionInput.value,
    link: newPostImageInput.value,
  });

  cardsList.prepend(newPost);

  evt.target.reset();
  disableButton(newPostSubmitButton, settings);
  closeModal(newPostModal);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

// MAIN Execution

initialCards.forEach(function (currentVal) {
  // console.log(currentVal.name);
  // console.log(currentVal.link);
  const cardEl = getCardElement(currentVal);
  cardsList.append(cardEl);
});

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("mousedown", function (evt) {
    if (evt.target.classList.contains("modal_is-opened")) {
      closeModal(modal);
    }
  });
});
