var gallery;


gallery = ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/New_River_Loop_03.jpg/1200px-New_River_Loop_03.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Enfield_UK_locator_map.svg/1200px-Enfield_UK_locator_map.svg.png', 'https://nla-production-media.s3.eu-west-2.amazonaws.com/1923/1736_LISTIMAGE_0%2A900%2C0%2C445x459%2C1%3B0%2A900%2C0%2C890x918%2C2%3B900%2A9999%2C0%2C319x329%2C1%3B900%2A9999%2C0%2C638x658%2C2_821_.jpg?v=1691673615', 'https://enfielddispatch.co.uk/wp-content/uploads/2022/03/Beavers-12-1024x768.jpg', 'https://i.imgflip.com/2ynjel.jpg?a479784'];
let element_img = document.getElementById('img');
element_img.setAttribute("src", gallery[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  gallery.push(gallery[0]);
  gallery.shift();
  element_img2.setAttribute("src", gallery[0]);
  let element_img3 = document.getElementById('img');
  element_img3.setAttribute("src", gallery[0]);

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_img4 = document.getElementById('img');
  gallery.unshift(gallery.slice(-1)[0]);
  gallery.pop();
  element_img4.setAttribute("src", gallery[0]);
  let element_img5 = document.getElementById('img');
  element_img5.setAttribute("src", gallery[0]);

});