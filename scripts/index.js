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
const editProfileDescripInput = editProfileModal.querySelector(
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
  editProfileDescripInput.value = profileDescriptionElement.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// New Post Listeners
newPostOpenBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostExitBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

newPostForm.addEventListener("submit", handleAddCardSubmit);

////Functions
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescripInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log("New Image URL: " + newPostImageInput.value);
  console.log("New Post Caption: " + newPostCaptionInput.value);

  evt.target.reset();
  newPostModal.classList.remove("modal_is-opened");
}
