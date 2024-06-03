import { createRef } from "react"
import "./App.css"

function App() {
  const fileInput = createRef()

  const handleUpload = async (e) => {
    e.preventDefault()

    const fd = new FormData()
    fd.set("avatar", fileInput.current.files[0])

    try {
      const res = await fetch("http://localhost:5000/api/v1/profile/", {
        method: "POST",
        body: fd,
      })
      const resParsed = await res.json()

      if (resParsed.ok) {
        console.log("file uploaded")
      } else {
        alert("res bad")
      }
    } catch (err) {
      console.log("eerror ")
      console.error(err)
    }
  }
  return (
    <>
      <h3>File uploading</h3>
      <form onSubmit={handleUpload}>
        <input type="file" name="avatar" ref={fileInput} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
