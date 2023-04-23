function campos() {
    document.getElementById('username').style.border = "none"
    document.getElementById('userpassword').style.border = "none"
}
function validarUsuario() {
    const txtUser = document.getElementById('username').value
    const txtPassword = document.getElementById('userpassword').value

    const cad_users = [
        { name: 'Admin', user: 'Admin', password: 'admin' },
    ]
    const validUser = cad_users.filter(el => el.user == txtUser)
    if (validUser[0] == undefined) {
        alert(`Usuário e/ou senha incorretos, por favor verifique.`)
        document.getElementById('username').style.border = "2px solid red"
    }
    const validPassword = validUser[0].password == txtPassword
    console.log(txtPassword)
    console.log(validPassword)
    if (!validPassword) {
        alert(`Usuário e/ou senha incorretos, por favor verifique.`)
    } else {
        window.location = "principal.html"
    }
}