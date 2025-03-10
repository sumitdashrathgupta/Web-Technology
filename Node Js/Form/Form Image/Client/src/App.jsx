import { useState } from 'react'
import { IoMdCloudUpload } from "react-icons/io";
import "./Style.css"
function App() {
  const [img, setimg] = useState("")

  const imagebase64 = async (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    const data = new Promise((res, rej) => {
      reader.onload = () => res(reader.result)
      reader.onerror = (err) => rej(err)
    })
    return data
  }

  const handelimg = async (e) => {
    const file = e.target.files[0]
    const image = await imagebase64(file)
    setimg(image)
  }

  return (
    <>
      <div className="contenar">
        <form>
          <label className="upload_img" htmlFor="upload">
            <input type="file" id='upload' name='file' onChange={handelimg} />
            {img ? <img src={img} /> : <IoMdCloudUpload className='upload_icon ' />}
          </label>
          <button className='btn' type='upload'>Upload</button>
        </form>
      </div>
    </>
  )
}

export default App
