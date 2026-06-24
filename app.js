
// var supabase = window.supabase.createClient('https://fyzkoualaabdlnisxidl.supabase.co', 'sb_publishable_5AlMtB9W4N9fLqV3BTibSw_1C2RPUkE')

// window.onload = async function(){
//     try{
// const { data, error } = await supabase.from('post app table').select("*")
//   console.log(data)
//   if(error) console.log(error)
//     data.forEach( renderPosts=> {
// console.log(post.title)
//             var posts = document.getElementById("posts");

//             posts.innerHTML += `
//         <div class="card mb-2">
//             <div class="card-header">~Post
//                 <button class="edit-btn" onclick="editPost(${i})">Edit</button>
// <button class="delete-btn" onclick="deletePost(${i})">Delete</button>
//             </div>

//             <div style="background-image:url(${post.bg-img}); height:200px;" class="card-body">
//                 <figure>
//                     <blockquote>
//                         <p>${post.tittle}</p>
//                     </blockquote>
//                     <figcaption>${post.description}</figcaption>
//                 </figure>
//             </div>
//         </div>
//         `;
//     });
// }catch(error){
//     console.log(error)
// }

// }

    


// var isLogin = false;

// function login(){
// let email = document.getElementById("email").value
// let password = document.getElementById("password").value
// if(email === "batoolmazhar5@gmail.com" && password === "123"){
//     isLogin = true;
// //login hide hogi
//         document.getElementById("enter").style.display = "none";
// //postApp show hogi
// document.getElementById("container").style.display = "block";

//      Swal.fire({
//   icon: "success",
//   title: "Login Successful",
//   text: "Welcome!"
// });
// } else{
//     alert("Invalid email or password")
// }
// }




// var cardBg = "";


// function selectImg(src){
//    cardBg = src;
//    console.log(src, event.target.classList)
//    var bgImg = document.getElementsByClassName("bg-img")
//    for(var i = 0; i < bgImg.length; i++){
//    console.log(bgImg[i].className)
//     bgImg[i].className= "bgImg"
//    }
//    event.target.classList.add("selectedImg")
// }
     

// function post(){

// var title = document.getElementById("title");
// var description = document.getElementById("description");

// if(title.value.trim() && description.value.trim()){

//     var obj = {
//         title: title.value,
//         desc: description.value,
//         bg: cardBg
//     };

//     if(editIndex === -1){
//         postsArr.push(obj);
//     } else {
//         postsArr[editIndex] = obj;
//         editIndex = -1;
//     }

    
// } else {
//     Swal.fire({
//         icon: "error",
//         title: "OPPss...",
//         text: "Title & description can't be empty!",
//     });
// }

// title.value = "";
// description.value = ""; 
// }

// function renderPosts(){
//     var posts = document.getElementById("posts");
//     posts.innerHTML = "";

//     for(var i = 0; i < postsArr.length; i++){
//         posts.innerHTML += `
//         <div class="card mb-2">
//             <div class="card-header">~Post
//                 <button class="edit-btn" onclick="editPost(${i})">Edit</button>
// <button class="delete-btn" onclick="deletePost(${i})">Delete</button>
//             </div>

//             <div style="background-image:url(${postsArr[i].bg}); height:200px;" class="card-body">
//                 <figure>
//                     <blockquote>
//                         <p>${postsArr[i].title}</p>
//                     </blockquote>
//                     <figcaption>${postsArr[i].desc}</figcaption>
//                 </figure>
//             </div>
//         </div>
//         `;
//     }
// }


// function deletePost(i){
//     postsArr.splice(i, 1);
//     renderPosts();
// }

// function editPost(i){
//     var post = postsArr[i];

//     document.getElementById("title").value = post.title;
//     document.getElementById("description").value = post.desc;

//     editIndex = i;
// }


var supabase = window.supabase.createClient('https://fyzkoualaabdlnisxidl.supabase.co', 'sb_publishable_5AlMtB9W4N9fLqV3BTibSw_1C2RPUkE')


let edited=false
let editId=null

window.onload = async function () {
     
try{
    const { data, error } = await supabase.from('post app table').select("*").order('id', { ascending: false })

    console.log(data)

       
data.forEach(post => {
  
        var posts = document.getElementById("posts");

        
        posts.innerHTML += `
        <div class="card mb-2"data-id="${post.id}">

            <div class="card-header">${post.id}~Post</div>

            <div
                class="card-body"
                style="
                    background-image:url('${post.bg_img}');
                    background-size:cover;
                    background-repeat:no-repeat;
                    height:200px;
                "
            >
                <figure>
                    <blockquote class="blockquote">
                        <p>${post.tittle}</p>
                    </blockquote>

                    <figcaption class="blockquote-footer">
                        ${post.description}
                    </figcaption>
                </figure>
            </div>

            <div class="ms-auto m-2">
                <button onclick="editPost(event,${post.id},'${post.tittle}','${post.description}','${post.bg_img}')" class="btn btn-success">
                    Edit
                </button>

                <button onclick="deletePost(event,${post.id})" class="btn btn-danger">
                    Delete
                </button>
            </div>

        </div>
        `
         if(error) console.log(error)

});
}
     

     catch(error){
console.log(error)
     }
}


var cardBg = "";

// Delete Post
async function deletePost(event,id) {
    console.log(event,id)
try{
const{error,data} =await supabase

  .from("post app table")
  .delete()
  .eq("id", id).select()
  
var card = event.target.parentNode.parentNode;
    card.remove();


}catch(error){
    console.log(error)
}

    
}



// Edit Post
function editPost(event,id,title,description,bgImg) {

// var event= window.event

    var card = event.target.parentNode.parentNode;
  var realId = card.getAttribute("data-id")  

    // var title =
    //     card.children[1].children[0].children[0].children[0].innerText;

    // var description =
    //     card.children[1].children[0].children[1].innerText;

    document.getElementById("title").value = title;
    document.getElementById("description").value = description;

    cardBg = bgImg;
    editId = id;     // id save
    edited = true;
}

// Create Post
async function post() {

    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var posts = document.getElementById("posts");

    if (title.value.trim() && description.value.trim()) {


        if(edited){
    try {

    const { data, error } = await supabase
        .from('post app table')
        .update({
            tittle: title.value,
            description: description.value,
            bg_img: cardBg
        })
        .eq('id', editId)
        .select();

        console.log("post data", data)
    if (error) {
        console.log(error);
    }
console.log("updated data", data)

edited= false
edited=null

 location.reload(); // updated data show karne ke liye

        return;

} catch (error) {
    console.log(error);
}

    }else {

            try {

                const { data, error } = await supabase
                    .from('post app table')
                    .insert({
                        tittle: title.value,
                        description: description.value,
                        bg_img: cardBg
                    })
                    .select();

                if (error) {
                    console.log(error);
                    return;
                }

                console.log("post data", data);

                location.reload();

            } catch (error) {
                console.log(error);
            }

        }




        posts.innerHTML += `
        <div class="card mb-2">

            <div class="card-header">~Post</div>

            <div
                class="card-body"
                style="
                    background-image:url('${cardBg}');
                    background-size:cover;
                    background-repeat:no-repeat;
                    height:200px;
                "
            >
                <figure>
                    <blockquote class="blockquote">
                        <p>${title.value}</p>
                    </blockquote>

                    <figcaption class="blockquote-footer">
                        ${description.value}
                    </figcaption>
                </figure>
            </div>

            <div class="ms-auto m-2">
                <button onclick="editPost()" class="btn btn-success">
                    Edit
                </button>

                <button onclick="deletePost()" class="btn btn-danger">
                    Delete
                </button>
            </div>

        </div>
        `;
    
     } else {
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Title & description can't be empty!",
    });
  }
  title.value = ""
  description.value = ""
}

// Select Background Image
function selectImg(src) {

    cardBg = src;

    var bgImgs = document.getElementsByClassName("bg-img");

    for (var i = 0; i < bgImgs.length; i++) {
        bgImgs[i].classList.remove("selectedImg");
    }

    event.target.classList.add("selectedImg");

    console.log(cardBg);
}