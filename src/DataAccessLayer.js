// "https://localhost:44329/api/"
// "https://imagehubapibackend.azurewebsites.net/api/"
const backendDomain = "https://imagehubapibackend.azurewebsites.net/api/";

export async function GetUserFeed(userId, loggedInUserId, take, lastPostId){
    let uri = backendDomain + "posts/listposts?type=userfeed&take=" + take + "&userId=" + userId + "&loggedInUserId=" + loggedInUserId
    if (lastPostId){
        uri += "&lastPostId=" + lastPostId 
    }
    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (GetUserFeed)." } 
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

    const response = await fetch(backendDomain + "posts/", options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (SubmitPost)." }
    }
}

export async function LoadUserPosts(userId, loggedInUserId, take, lastPostId){
    let uri = backendDomain + "posts/listposts?type=usersite&take=" + take + "&userId=" + userId + "&loggedInUserId=" + loggedInUserId
    if (lastPostId){
        uri += "&lastPostId=" + lastPostId 
    }
    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (LoadUserPosts)." } 
    }
}

export async function AuthenticateUserByFacebookLogin(facebookResponse) {
    let uri = backendDomain + "authentication/loginuser?" +
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
        return { errors : [ "No backend server available (AuthenticateUserByFacebookLogin)." ]} 
    }
}

export async function SearchUsersByPartialUserName(partialUserName) {
    let uri = backendDomain + "users?partialUserName=" + partialUserName;

    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (SearchUsersByPartialUserName)." } 
    }
}


export async function GetUserRelationByUserId(loggedInUserId, targetUserId) {
    let uri = backendDomain + "userrelations?" +
        "userId=" + loggedInUserId +
        "&targetUserId=" + targetUserId;

    const response = await fetch(uri).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (GetUserRelationByUserId)." } 
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

    const response = await fetch(backendDomain + "userrelations/", options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (CreateFollowUserRequest)." }
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

    const response = await fetch(backendDomain + "userrelations/", options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (CreateRejectFollowUserRequest)." }
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

    const response = await fetch(backendDomain + "userrelations/", options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (CreateAcceptFollowUserRequest)." }
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

    const response = await fetch(backendDomain + "userrelations/", options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (CreateUnfollowUserRequest)." }
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

    const response = await fetch(backendDomain + "images/", options).catch(console.log)
    if (response) {
        const jsonResponse = await response.json()
        return jsonResponse;
    }
    else {
        return { error : "No backend server available (UploadImageForPost)." }
    }
}

export function GetPostImageUrlById(id){
    return backendDomain + "images?type=post&id=" + id;
}

export function GetProfileIconImageUrlById(id){
    return backendDomain + "images?type=profile&id=" + id;
}

export function GetAppLogoUrl()
{
    return backendDomain + "images?id=applogo.jpg";
}