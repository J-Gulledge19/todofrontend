import url from "./url";

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(`${url}${params.id}/`)
    const todo = await response.json()
    return todo
}