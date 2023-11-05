const boton = document.getElementById('boton');
const usuariosDiv = document.getElementById('usuariosDiv')
let globalUsers = {}

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log('result', result)
    globalUsers = result;
    const { data } = result;
    console.log("resultados", data);
    data.forEach(usuario => {
        usuariosDiv.innerHTML += `
        <h1>${usuario.name}</h1>
        `
    });
    const nombres = data.map(usuario => usuario.name)
    console.log('nombres', nombres)
  })
  .catch((err) => {
    console.log("error", err);
  });


mostrarVariableGlobal = () => {
    console.log('varible global', globalUsers)
}

boton.addEventListener('click', mostrarVariableGlobal)