import React from "react"
import "./App.css"
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducer from "./components/reducer"
import MyProps from "./components/MyProps"

const store = createStore(reducer)
store.dispatch({
  type: "ADD_CAR",
  brend: "Hyundai Santa fe"
})
store.dispatch({
  type: "ADD_PHONE",
  brend: "Sumsung G8"
})
function App() {
  return (
    <Provider store={store}>
      <MyProps />
    </Provider>
  )
}

export default App
