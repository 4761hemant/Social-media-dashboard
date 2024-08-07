// script.js
document.addEventListener('DOMContentLoaded', () => {
    const facebookFollowers = document.getElementById('facebook-followers');
    const facebookPosts = document.getElementById('facebook-posts');
    const twitterFollowers = document.getElementById('twitter-followers');
    const twitterTweets = document.getElementById('twitter-tweets');
    const instagramFollowers = document.getElementById('instagram-followers');
    const instagramPosts = document.getElementById('instagram-posts');

    // Dummy data
    const data = {
        facebook: { followers: 1200, posts: 300 },
        twitter: { followers: 800, tweets: 150 },
        instagram: { followers: 1500, posts: 400 }
    };

    // Update the dashboard with data
    facebookFollowers.textContent = data.facebook.followers;
    facebookPosts.textContent = data.facebook.posts;
    twitterFollowers.textContent = data.twitter.followers;
    twitterTweets.textContent = data.twitter.tweets;
    instagramFollowers.textContent = data.instagram.followers;
    instagramPosts.textContent = data.instagram.posts;
});
