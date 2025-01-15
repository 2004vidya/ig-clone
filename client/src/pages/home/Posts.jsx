import React from "react";
import avatar from "../../assets/avatar-svgrepo-com.svg";

const Posts = ({ user, postImage, likes, timestamps,caption }) => {
  return (
    <div className="mt-20 mb-10 mx-20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            className="h-[6vh] rounded-full mr-3"
            src={avatar}
            alt="User avatar"
          />
          <div>
            <p className="font-[f1] text-xl text-white">{user}</p>
            <p className="text-gray-600 text-sm">{timestamps}</p>
          </div>
        </div>
        <i className="ri-more-fill text-2xl text-white cursor-pointer"></i>
      </div>
      <div className="postimg mb-4">
        <img
          className="w-full rounded-lg h-[70vh] object-cover"
          src={postImage}
          alt="User post"
        />
      </div>
      <div className="postfooter">
        <div className="footericons flex justify-between items-center text-2xl mb-2">
          <div className="iconsMain text-white flex space-x-4">
            <i className="ri-heart-line cursor-pointer"></i>
            <i className="ri-chat-3-line cursor-pointer"></i>
            <i className="ri-send-plane-fill cursor-pointer"></i>
          </div>
          <i className="ri-bookmark-line text-white cursor-pointer"></i>
        </div>
        <p className="text-white text-sm">Liked by {likes} people</p>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Posts;
