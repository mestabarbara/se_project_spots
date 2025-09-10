const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

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

// Edit Profile Listeners
editProfileOpenBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
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

////Functions
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log("New Image URL: " + newPostImageInput.value);
  console.log("New Post Caption: " + newPostCaptionInput.value);

  evt.target.reset();
  closeModal(newPostModal);
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
