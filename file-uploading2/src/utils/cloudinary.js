import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null
    }
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    })
    // file has been uploaded
    console.log("file uploaded to cloudinary")
    console.log(res.url)
    return res
  } catch (error) {
    fs.unlinkSync(localFilePath) //remove temp file
    console.error(error)
    return null
  }
}

export default uploadOnCloudinary
