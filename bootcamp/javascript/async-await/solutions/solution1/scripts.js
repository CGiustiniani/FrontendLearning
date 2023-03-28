const button = document.querySelector("button");
const textPlaceholder = document.querySelector(".text-placeholder");

const setText = (text) => {
    textPlaceholder.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...')
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000)
  })
}

button.addEventListener("click", async () => {
  const isAuth = await checkAuth()
  let user = null;
  if (isAuth) {
    user = await fetchUser()
  }
  setText(user.name)
});
