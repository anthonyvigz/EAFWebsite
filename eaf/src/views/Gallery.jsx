import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import "../styling/gallery.scss";
import firebase from "firebase";
import Images from "./Images";

export default function Gallery() {
  var firebaseConfig = {
    apiKey: "AIzaSyD6Gcgw208X0jQXohM7rPrEUXeGcAMIp9g",
    authDomain: "eaf-decks.firebaseapp.com",
    databaseURL: "https://eaf-decks.firebaseio.com",
    projectId: "eaf-decks",
    storageBucket: "eaf-decks.appspot.com",
    messagingSenderId: "60992671312",
    appId: "1:60992671312:web:861fcdc34f1fe25187cb55",
    measurementId: "G-6T5VX64PVP",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  useEffect(() => {
    var uploader = document.getElementById("uploader");
    var fButton = document.getElementById("fileButton");
    fButton.addEventListener("change", function (event) {
      //Get file
      const file = event.target.files[0];

      //Create storage ref
      const storageRef = firebase.storage().ref("eaf_image/" + file.name);

      //Upload
      const task = storageRef.put(file);

      //Update progress
      task.on(
        "state_changed",
        function progress(snapshot) {
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          console.log("Complete!");
          uploader.value = 0;
          console.log(storageRef.child("eaf_image/").listAll());
        }
      );
    });
  }, []);

  return (
    <div id="gallery">
      <Slider />

      <progress value="0%" max="100" id="uploader">
        0%
      </progress>
      <input type="file" id="fileButton" />
      <Images />
    </div>
  );
}
