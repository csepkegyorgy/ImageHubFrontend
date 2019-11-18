export async function GetUserFeed(userId, loggedInUserId, take, lastPostId){
    let uri = "https://localhost:44329/api/posts/listposts?type=userfeed&take=" + take + "&userId=" + userId + "&loggedInUserId=" + loggedInUserId
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

export async function LoadUserPosts(userId, loggedInUserId, take, lastPostId){
    let uri = "https://localhost:44329/api/posts/listposts?type=usersite&take=" + take + "&userId=" + userId + "&loggedInUserId=" + loggedInUserId
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
        "&facebookImageUrl=" + encodeURIComponent(facebookResponse.picture.data.url) +
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

export async function SearchUsersByPartialUserName(partialUserName) {
    let uri = "https://localhost:44329/api/users?partialUserName=" + partialUserName;

    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." } 
    }
}


export async function GetUserRelationByUserId(loggedInUserId, targetUserId) {
    let uri = "https://localhost:44329/api/userrelations?" +
        "userId=" + loggedInUserId +
        "&targetUserId=" + targetUserId;

    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." } 
    }
}

export async function CreateFollowUserRequest(loggedInUserId, targetUserId) {
    var formData = new FormData();
    formData.append("userId", loggedInUserId);
    formData.append("targetUserId", targetUserId);
    formData.append("type", "followRequest");
    
    const options = {
      method: 'POST',
      headers: {
        "Accept" : "application/json"
      },
      body: formData 
    }

    const response = await fetch('https://localhost:44329/api/userrelations/', options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." }
    }
}

export async function CreateRejectFollowUserRequest(loggedInUserId, targetUserId) {
    var formData = new FormData();
    formData.append("userId", loggedInUserId);
    formData.append("targetUserId", targetUserId);
    formData.append("type", "followReject");
    
    const options = {
      method: 'POST',
      headers: {
        "Accept" : "application/json"
      },
      body: formData 
    }

    const response = await fetch('https://localhost:44329/api/userrelations/', options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." }
    }
}

export async function CreateAcceptFollowUserRequest(loggedInUserId, targetUserId) {
    var formData = new FormData();
    formData.append("userId", loggedInUserId);
    formData.append("targetUserId", targetUserId);
    formData.append("type", "followAccept");
    
    const options = {
      method: 'POST',
      headers: {
        "Accept" : "application/json"
      },
      body: formData 
    }

    const response = await fetch('https://localhost:44329/api/userrelations/', options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available." }
    }
}

export async function CreateUnfollowUserRequest(loggedInUserId, targetUserId) {
    var formData = new FormData();
    formData.append("userId", loggedInUserId);
    formData.append("targetUserId", targetUserId);
    formData.append("type", "unfollow");
    
    const options = {
      method: 'POST',
      headers: {
        "Accept" : "application/json"
      },
      body: formData 
    }

    const response = await fetch('https://localhost:44329/api/userrelations/', options).catch(console.log)
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
    formData.append("userid", userId);
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

export function GetAppLogoUrl()
{
    return "https://localhost:44329/api/images?id=applogo.jpg";
}