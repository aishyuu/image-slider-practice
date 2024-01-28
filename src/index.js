import "./style.css";
import "./reset.css";
import imageSlider from "./components/imageSlider";

function component() {
  const photoData = [
    "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
    "https://i.redd.it/nhk8jg3psng71.jpg",
    "https://i.redd.it/tn0k20exrnb51.jpg",
    "https://i.redd.it/7aadu9ocfvx51.jpg",
    "https://wallpapers.com/images/hd/1920-x-1080-hd-roxc8sshyi18tiiy.jpg"
  ]
  imageSlider(photoData)
}

component();
