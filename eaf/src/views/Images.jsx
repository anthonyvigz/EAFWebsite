import React, { useState } from "react";
import firebase from "firebase";

export default function Images() {
  const [images, setImages] = useState([]);
  const storageRef = firebase.storage().ref();
  var img_index = 1;
  const listRef = storageRef.child("eaf_image/");
  console.log(storageRef.getDownloadURL());
  listRef
    .listAll()
    .then(function (res) {
      console.log(res);
      res.items.forEach(function (itemRef) {
        console.log(itemRef.location.path);
        // All the items under listRef.
      });
    })
    .catch(function (error) {
      // Uh-oh, an error occurred!
    });

  return <div>images should go here</div>;
}
