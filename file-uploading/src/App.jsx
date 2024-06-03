import { useState } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [file, setFile] = useState(null)
  const [msg, setMsg] = useState("Select a file above")
  const [progress, setProgress] = useState({ started: false, pc: 0 })

  function handleUpload() {
    if (!file) {
      setMsg("No file selected")
      return
    }

    setMsg("Uploading...")
    setProgress((prevState) => {
      return { ...prevState, started: true }
    })

    const fd = new FormData()
    fd.append("file", file)

    axios
      .post("https://httpbin.org/post", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            console.log(progressEvent.progress * 100)
            return { ...prevState, pc: progressEvent.progress * 100 }
          })
        },
        headers: {
          what: "value",
        },
      })
      .then((res) => {
        console.log(res.data)
        setMsg("Upload successful")
      })
      .catch((err) => console.error(err))
  }
  return (
    <>
      <div className="app">
        <h1>Uploading files in react</h1>
        <input
          onChange={(e) => {
            setFile(e.target.files[0])
          }}
          type="file"
        />
        <button onClick={handleUpload}>Upload</button>
        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <p>{msg}</p>}
      </div>
    </>
  )
}

export default App
