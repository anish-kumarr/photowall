export function removePost(index) {
  return {
    type: "REMOVE_PHOTO",
    index,
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}
