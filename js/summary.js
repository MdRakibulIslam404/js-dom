console.log("I am form summary js file");

const blogs = document.getElementsByTagName("p");
// console.log(blogs);
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = "blue";
}

const harum = document.getElementById("special-blog");
// harum.innerText = "New Harum"
harum.innerHTML = `
<h4>special inner text</h4>
<div>
   <ul>
     <li>ami pari</li>
     <li>LOL kfn</>
   </ul>
</div>
`


const friends = document.getElementById("friends");
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth)

// create element
const friend = document.createElement("li");
friend.innerText = "friend-11";
friends.appendChild(friend);