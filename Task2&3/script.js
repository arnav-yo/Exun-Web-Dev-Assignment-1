const APIkey = 'd065503e4b354cee8fa6295a6ed3c720'
const APIurl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIkey}`
const contactForm = document.querySelector('form');
document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector("#waitlist-button");
  el.addEventListener("click", () => {
    window.location.href = "waitlist.html";
  });
  const el2 = document.querySelector('.contact-us-button')
  el2.addEventListener("click",()=>{
    window.location.href = 'contact.html'
  })
});

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
      for (let i = 0; i < data.articles.length; i++) {
        const a = data.articles[i];
        const div = document.createElement("div");
        div.className = "news-card";
        div.innerHTML = "<h3><a href='" + a.url + "'>" + a.title + "</a></h3><p>" + a.description + "</p>";
        news.appendChild(div);
      }
     
    })
    .catch(error => {
      news.innerHTML = "Error loading news , Error faced is :" + error;
    });
}
