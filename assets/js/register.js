document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm")

  form.addEventListener("submit", function (event) {
    event.preventDefault() // Impedisce il ricaricamento della pagina che avvien di default

    const errors = []

    // Validate passwords
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirmPassword")
    if (password.value !== confirmPassword.value) {
      errors.push("Passwords do not match!")
    }

    // Validate date of birth
    const dateOfBirth = new Date(document.getElementById("dob").value)
    const now = new Date()
    if (dateOfBirth > now) errors.push("Please enter a valid date!")

    // Other validations...

    if (errors.length > 0) {
      const formMessage = document.getElementById("formMessage")
      formMessage.textContent = errors.join(" - ")
      formMessage.style.color = "red"
      return
    }

    // Success
    const fullName = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value

    const newUser = {
      fullName,
      email,
      username,
      password: password.value,
      dateOfBirth,
    }
    console.log(newUser) // Questo oggetto poi andrà mandato ad un server che lo processerà e salverà nel database....
  })
})
