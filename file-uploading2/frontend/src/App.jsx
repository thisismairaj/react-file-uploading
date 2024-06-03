import { createRef } from "react"
import "./App.css"

function App() {
  const inputFile = createRef()
  const handleUpload = async (e) => {
    e.preventDefault()

    const fd = new FormData()
    fd.set("avatar", inputFile.current.files[0])

    try {
      const res = await fetch("https://localhost:5000/api/v1/profile/", {
        method: "POST",
        body: fd,
      })

      const resParsed = await res.json()

      if (resParsed.ok) {
        alert("file upload")
      } else {
        console.log("file fail")
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <div>
        <h3>Upload a file</h3>
        <form onSubmit={handleUpload} encType="multipart/form-data">
          <input type="file" name="avatar" ref={inputFile} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
