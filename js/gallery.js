

// const images = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

const galleryUl = document.querySelector(".gallery");

// const markupGallery = ({preview, description, original}) => {
//   const galleryEl = document.createElement('li');
//   galleryEl.classList.add('gallery-item');

//   const galleryMark = document.createElement('a');
//   galleryMark.classList.add('galerry-link');
//   galleryMark.href = `${original}`;

//   const galleryLink = document.createElement('img');
//   galleryLink.classList.add('gallery-image');
//   galleryLink.src = `${preview}`;
//   galleryLink.alt = `${description}`;
//   galleryLink.dataset.source = `${original}`;
//   galleryMark.appendChild(galleryLink);
//   galleryEl.appendChild(galleryMark);
//   return galleryEl;
//   // console.log(galleryEl);
  
// }

// images.map(obj => {
//   const item = markupGallery(obj);
//   return galleryUl.appendChild(item);
// })  
// .join('');

    
galleryUl.insertAdjacentHTML("beforeend", markupGallery);
// // console.log(markupGallery);

galleryUl.addEventListener("click", (event) => {
    event.preventDefault();
    const clickImage = event.target;
    if (clickImage) {
        const lagreImageUrl = clickImage.dataset.source;
        // console.log("Big image", lagreImageUrl);

        const instance = basicLightbox.create(`<img src=${lagreImageUrl} width="1200" height="auto"/>`);
        instance.show();    
    };       
    
});

console.log(markupGallery());

const markupGallery = images
    .map(({ preview, original, description }) =>    
        `<li class="gallery-item">
  <a class="gallery-link" href=${original}>
    <img
      class="gallery-image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
).join("");