{
  /* <h1>{loading ? "Uploading..." : ""}</h1>
      <input
        id="file-input"
        onChange={imgUploadHandler}
        className="uploadImage"
        type="file"
      />

      const [image, setImage] = useState("");
      const [loading, setLoading] = useState(false);
    
      // function to upload image
      const imgUploadHandler = (event) => {
        event.preventDefault();
    
        const files = event.target.files;
        const data = new FormData();
    
        data.append("file", files[0]);
        data.append("upload_preset", "eaf_preset");
    
        setLoading(true);
    
        // adds the image to cloudinary
        axios
          .post(
            "https://api.cloudinary.com/v1_1/eaf-custom-decks-and-remodelling/image/upload",
            data
          )
          .then((res) => {
            console.log("Success", res);
            setLoading(false);
            setImage(res.data.secure_url);
          })
          .catch((err) => {
            console.log(err);
          });
      }; */
}
