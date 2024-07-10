const names = ["Digital Craftsman", "Reader", "Aspiring SWE", "Tech Enthusiast", "Student"];
let currentIndex = 0;

function changeDescriptor() {
  let descriptor = document.querySelector(".descriptor p");
  
  // Add fade-out animation
  descriptor.classList.add('fade-out');

  // Wait for the fade-out animation to complete before changing the text
  setTimeout(() => {

    descriptor.innerHTML = names[currentIndex];
    descriptor.classList.remove('fade-out');
    descriptor.classList.add('fade-in');

    // Remove fade-in class after the animation completes
    setTimeout(() => {
      descriptor.classList.remove('fade-in');
    }, 500); // Match this duration to the CSS fadeIn animation duration

    // Update the currentIndex to the next name, loop back to start
    currentIndex = (currentIndex + 1) % names.length;
  }, 500);
};
// Set interval to change the descriptor every 3500ms (3.5 seconds)
setInterval(changeDescriptor, 3500);

let picIndex = 0;
function changePic(){
  const pics  = [ "assets/musashi-2.jpg" , "assets/me.jpg"];
  let profilePic = document.querySelector(".profile-pic");
  picIndex = (picIndex + 1) % pics.length;
  profilePic.src = pics[picIndex];
};
changePic();
setInterval(changePic,10000); // change the profile pic every 10secs
