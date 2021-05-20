export const save = (form) => {
  let data = get()
  if (data === undefined) {
    localStorage.setItem('Registros', JSON.stringify([form]))
  } else {
    localStorage.setItem('Registros', JSON.stringify([...data, form]))
  }
}

export const del = () => {
  localStorage.removeItem()
}

export const get = () => {
  let registros = localStorage.getItem('Registros')
  if (registros === null) {
    return
  } else {
    registros = JSON.parse(registros)
    return registros
  }
}