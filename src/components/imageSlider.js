import leftArrow from "../icons/left_arrow.png";
import rightArrow from "../icons/right_arrow.png";

export default function imageSlider(photoData) {
  const body = document.querySelector("body");

  // Creating the div
  const imageSliderDiv = document.createElement("div");
  imageSliderDiv.classList.add("image-slider-div");

  const imageSliderMain = document.createElement("div");
  imageSliderMain.classList.add("image-slider-main");
  imageSliderDiv.appendChild(imageSliderMain);

  // Left side button
  const imageSliderLeftButton = document.createElement("button");
  imageSliderLeftButton.classList.add("image-slider-btn");
  const imageSliderLeftArrow = document.createElement("img");
  imageSliderLeftArrow.src = leftArrow;
  imageSliderLeftArrow.classList.add("image-slider-btn-img");
  imageSliderLeftButton.appendChild(imageSliderLeftArrow);

  imageSliderMain.appendChild(imageSliderLeftButton);

  // Image in center
  const imageSliderImage = document.createElement("img");
  imageSliderImage.classList.add("image-slider-img");
  const firstImage = photoData[0];
  imageSliderImage.src = firstImage;
  imageSliderMain.appendChild(imageSliderImage);

  // Right side Button
  const imageSliderRightButton = document.createElement("button");
  imageSliderRightButton.classList.add("image-slider-btn");
  const imageSliderRightArrow = document.createElement("img");
  imageSliderRightArrow.classList.add("image-slider-btn-img");
  imageSliderRightArrow.src = rightArrow;
  imageSliderRightButton.appendChild(imageSliderRightArrow);

  imageSliderMain.appendChild(imageSliderRightButton);

  // Bottom Circles Div
  const imageSliderBottomDiv = document.createElement("div");
  imageSliderBottomDiv.classList.add("image-slider-bottom-div");
  imageSliderDiv.appendChild(imageSliderBottomDiv);

  for (let index = 0; index < photoData.length; index += 1) {
    const element = photoData[index];
    const imageSliderSelectorButton = document.createElement("button");
    imageSliderSelectorButton.classList.add("image-selector-button");

    if (index === 0) {
      imageSliderSelectorButton.classList.add("image-selector-button-selected");
    }

    imageSliderSelectorButton.addEventListener("click", () => {
      if (
        !imageSliderSelectorButton.classList.contains(
          "image-selector-button-selected",
        )
      ) {
        const prevSelectedButton = document.querySelector(
          ".image-selector-button-selected",
        );
        prevSelectedButton.classList.remove("image-selector-button-selected");
        imageSliderSelectorButton.classList.add(
          "image-selector-button-selected",
        );
        imageSliderImage.src = element;
      }
    });

    imageSliderBottomDiv.appendChild(imageSliderSelectorButton);
  }

  imageSliderRightButton.addEventListener("click", () => {
    const allButtons = document.querySelectorAll(".image-selector-button");
    const currentButton = document.querySelector(
      ".image-selector-button-selected",
    );
    let currentIndex;
    for (let index = 0; index < allButtons.length; index += 1) {
      const element = allButtons[index];
      if (currentButton === element) {
        currentIndex = index;
      }
    }
    currentButton.classList.remove("image-selector-button-selected");
    if (currentIndex + 1 === photoData.length) {
      allButtons[0].classList.add("image-selector-button-selected");
      imageSliderImage.src = firstImage;
    } else {
      allButtons[currentIndex + 1].classList.add(
        "image-selector-button-selected",
      );
      imageSliderImage.src = photoData[currentIndex+1];
    }
  });

  imageSliderLeftButton.addEventListener("click", () => {
    const allButtons = document.querySelectorAll(".image-selector-button");
    const currentButton = document.querySelector(
      ".image-selector-button-selected",
    );
    let currentIndex;
    for (let index = 0; index < allButtons.length; index += 1) {
      const element = allButtons[index];
      if (currentButton === element) {
        currentIndex = index;
      }
    }
    currentButton.classList.remove("image-selector-button-selected");
    if (currentIndex - 1 === -1) {
      allButtons[allButtons.length - 1].classList.add("image-selector-button-selected");
      imageSliderImage.src = photoData[photoData.length - 1];
    } else {
      allButtons[currentIndex - 1].classList.add(
        "image-selector-button-selected",
      );
      imageSliderImage.src = photoData[currentIndex-1];
    }
  });

  body.appendChild(imageSliderDiv);
}
