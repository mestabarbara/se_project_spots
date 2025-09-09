const editProfileOpenBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);

const newPostOpenBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitBtn = newPostModal.querySelector(".modal__close-button");

editProfileOpenBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostOpenBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostExitBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
