export default function homePage(){
  const content = document.querySelector("#content");
  const home = document.createElement('div');
  home.setAttribute('class','my-tabs');
  home.innerHTML =  `
  <section class="tab-content is-active" id="home">

  <div class="hero-container">
    <div class="hero">
      <h1 class="heading-primary">If you enjoy coffee then<br> you are at the right place!</h1>
     </div>
   <div class="btn-hero">
     <a href="#menu" class="btn">Button</a>
   </div>
  </div>
 </section>
    `
    content.appendChild(home);
}
 