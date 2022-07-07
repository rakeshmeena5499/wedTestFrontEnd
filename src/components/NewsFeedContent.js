import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {getFollowingPosts} from "../feature/followingPost/followingPostSlice";
import { useDispatch, useSelector } from "react-redux";

function NewsFeedContent() {
  const dispatch = useDispatch();
  const storeFollowingPosts = useSelector((state) => state.followingPostReducer.followingPosts);

  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);

  return (
    <div>
      {<h1>NewsFeed Page</h1>}
    </div>
  );
}

export default NewsFeedContent;
