import React, { useState } from "react";
import avatar from "../../assets/instagram-text-icon.svg";
import Posts from "./Posts";
import Suggestion from "./Suggestion";
import Stories from "./Stories";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "john_doe",
      postImage: "https://picsum.photos/300/300?random=1",
      caption: "Exploring the beauty of nature!",
      likes: 120,
      comments: 15,
      createdAt: "2d",
    },
    {
      id: 2,
      username: "jane_smith",
      postImage: "https://picsum.photos/300/300?random=2",
      caption: "Beach vibes 🌊☀️",
      likes: 200,
      comments: 30,
      createdAt: "3d",
    },
    {
      id: 3,
      username: "travel_guru",
      postImage: "https://picsum.photos/300/300?random=3",
      caption: "Wanderlust in the mountains 🏔️",
      likes: 340,
      comments: 45,
      createdAt: "3h",
    },
    {
      id: 4,
      username: "foodie_lover",
      postImage: "https://picsum.photos/300/300?random=4",
      caption: "Delicious pasta night 🍝",
      likes: 150,
      comments: 20,
      createdAt: "16h",
    },
    {
      id: 5,
      username: "cat_person",
      postImage: "https://picsum.photos/300/300?random=5",
      caption: "My little furball 🐱❤️",
      likes: 270,
      comments: 50,
      createdAt: "5d",
    },
    {
      id: 6,
      username: "tech_enthusiast",
      postImage: "https://picsum.photos/300/300?random=6",
      caption: "Latest gadget unboxing! 📦",
      likes: 90,
      comments: 12,
      createdAt: "22h",
    },
    {
      id: 7,
      username: "fitness_freak",
      postImage: "https://picsum.photos/300/300?random=7",
      caption: "Morning workouts for a healthy life 💪",
      likes: 190,
      comments: 35,
      createdAt: "15d",
    },
    {
      id: 8,
      username: "artist_soul",
      postImage: "https://picsum.photos/300/300?random=8",
      caption: "Finished my latest painting 🎨",
      likes: 310,
      comments: 42,
      createdAt: "1h",
    },
  ]);
 
  return (
    <div className="h-screen bg-black flex overflow-hidden">
      <div className="w-[20%] flex flex-col bg-black text-white">
        <div className="h-[20%]">
          <i
            data-visualcompletion="css-img"
            aria-label="Instagram"
            className="inline-block w-full h-12 mt-10 ml-4git push -u origin main"
            role="img"
            style={{
              backgroundImage:
                "url('https://static.cdninstagram.com/rsrc.php/v4/yl/r/2_tD1Q6wIri.png')",
              backgroundPosition: "0px 0px",
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              width: "175px",
              height: "51px",
            }}
          ></i>
        </div>
        <div className="m-5 font-[f1] text-xl">
          <div className="flex items-center mb-6">
            <i className="ri-home-2-line mr-12"></i>
            <h1>Home</h1>
          </div>
          <div className="flex items-center mb-7">
            <i className="ri-search-line mr-12"></i>
            <h1>Explore</h1>
          </div>
          <div className="flex items-center mb-7 ">
            <i className="ri-film-line mr-12"></i>
            <h1>Reels</h1>
          </div>
          <div className="flex items-center mb-7 ">
            <i className="ri-chat-3-line mr-12"></i>
            <h1>Messages</h1>
          </div>
          <div className="flex items-center mb-7 ">
            <i className="ri-heart-line mr-12"></i>
            <h1>Notification</h1>
          </div>
          <div className="flex items-center mb-7 ">
            <i className="ri-account-circle-fill mr-12"></i>
            <h1>Profile</h1>
          </div>

          {/* Remaining menu items */}
        </div>
        <div className="m-5 bottom-3">
          <div className="flex items-center bottom-0">
            <i className="ri-align-right mr-12"></i>
            <h1>More</h1>
          </div>
        </div>
      </div>

      <div className="w-[60%]  overflow-scroll h-full scrollbar-hide">
        <div className="stories mx-auto  mt-6 h-[14vh]  w-[80%]  ">
          <Stories/>
        </div>
        {posts.map((post) => (
          <Posts
            key={post.id}
            user={post.username}
            postImage={post.postImage}
            likes={post.likes}
            timestamps={post.createdAt}
            caption={post.caption}
          />
        ))}
      </div>
      <div className="w-[20%] mt-8 bg-black">
        <Suggestion />
      </div>
    </div>
  );
};

export default Home;
