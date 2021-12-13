import { createStore } from "redux"

const store = createStore(() => {
    return {
        id: 3,
        name: "Luiz",
        email: "luizhjramos@outlook.com"
    }
})

export default store