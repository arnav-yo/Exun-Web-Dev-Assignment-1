const APIurl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'
const contactForm = document.querySelector('form');
document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".waitlist-button-js");
  if(el){
  el.addEventListener("click", () => {
    window.location.href = "waitlist.html";
  });
  }
  
  const e2= document.querySelector('.contact-us-button')
  if(e2){
    e2.addEventListener("click",()=>{
    window.location.href = 'contact.html'
  })
}})
if (contactForm && window.location.href.includes("contact")) {
  contactForm.onsubmit = function (e) {
    e.preventDefault()
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    

    if (name === "" || email === "" || message === "") {
      alert("Name/Email/Message is empty, Please fill the entire form properly to get in contact with TechNova's Amazing team led by Arnav Raheja.");
    }
    else {
      alert('Request Submitted Succesfully' + "\nNovaTech's team will get back to you shortly.")
    }
  };
}

const waitlistForm = document.getElementById("waitlist-form");

if (waitlistForm) {
  waitlistForm.onsubmit = function (e) {
    e.preventDefault();

    const email = document.getElementById("waitlist-email").value;
    const selected = document.querySelector('input[name="notifications"]:checked');


    if (!selected) {
      alert("Choose Yes or No to recieve notifications");
      return;
    }

    alert("Email: " + email + "\nUpdates: " + selected.value + "\nhas been added to our waitlist successfully");
  };
}

const news = document.getElementById("news-container");

if (news) {
  fetch(APIurl)
    .then(res => res.json())
    .then(data => {
      news.innerHTML = "";
      for (let i = 0; i < data.hits.length; i++) {
        const a = data.hits[i];
        const ReadStoryText = "Click on the title to read the full story on the original site.";
        const div = document.createElement("div");
        div.className = "news-card";
        
        div.innerHTML = `
          <h3><a href="${a.url}" target="_blank">${a.title}</a></h3>
          <p>${ReadStoryText}<br>${a.points} points <br> by ${a.author[0].toUpperCase() + a.author.slice(1)}</p>
        `;

        news.appendChild(div);
      }
    })
    .catch(error => {
      news.innerHTML = "Error loading news. Error: " + error;
    });
}
