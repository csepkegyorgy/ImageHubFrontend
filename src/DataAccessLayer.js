export async function GetUserFeed(userId, take, lastPostId){
    let uri = "https://localhost:44329/api/posts/listposts?type=userfeed&take=" + take + "&userId=" + userId
    if (lastPostId){
        uri += "&lastPostId=" + lastPostId 
    }
    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." } 
    }

}

export async function SubmitPost(userId, imageId, description){
    console.log("data access layer called for submit post")
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("imageId", imageId);
    formData.append("description", description);
    
    const options = {
      method: 'POST',
      headers: {
        "Accept" : "application/json"
      },
      body: formData 
    }

    const response = await fetch('https://localhost:44329/api/posts/', options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." }
    }
}

export async function LoadUserPosts(userId, take, lastPostId){
    let uri = "https://localhost:44329/api/posts/listposts?type=usersite&take=" + take + "&userId=" + userId
    if (lastPostId){
        uri += "&lastPostId=" + lastPostId 
    }
    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." } 
    }
}

export async function AuthenticateUserByFacebookLogin(facebookResponse) {
    let uri = "https://localhost:44329/api/authentication/loginuser?" +
        "facebookUserId=" + facebookResponse.userID +
        "&email=" + facebookResponse.email +
        "&name=" + facebookResponse.name;

    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." } 
    }
}

export async function UploadImageForPost(userId, file){
    // file is retrieved from fileEvent.target.files[0] if fileEvent is a parameter of a callback function for input element's onChanged event
    var formData = new FormData();
    formData.append("file", file);
    formData.append("userid", "bf2475cd-5352-4c81-9316-4f4d52cdb6d5");
    formData.append("type", "post");
    
    const options = {
      method: 'POST',
      headers: {
        "Accept" : "application/json"
      },
      body: formData 
    }

    const response = await fetch('https://localhost:44329/api/images/', options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." }
    }
}

export function GetPostImageUrlById(id){
    return "https://localhost:44329/api/images?type=post&id=" + id;
}

export function GetProfileIconImageUrlById(id){
    return "https://localhost:44329/api/images?type=profile&id=" + id;
}