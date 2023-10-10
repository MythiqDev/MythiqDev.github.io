// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const videoList = document.getElementById("video-list");

    // Placeholder data (you should replace this with real data)
    const videos = [
        { title: "Video 1", url: "https://www.youtube.com/watch?v=VIDEO_ID_1" },
        { title: "Video 2", url: "https://www.youtube.com/watch?v=VIDEO_ID_2" },
        { title: "Video 3", url: "https://www.youtube.com/watch?v=VIDEO_ID_3" },
        // Add more video objects here
    ];

    // Function to display search results
    function displaySearchResults(query) {
        videoList.innerHTML = ""; // Clear previous results

        const results = videos.filter(video => video.title.toLowerCase().includes(query.toLowerCase()));

        if (results.length === 0) {
            videoList.innerHTML = "<p>No results found.</p>";
        } else {
            results.forEach(video => {
                const videoItem = document.createElement("div");
                videoItem.innerHTML = `<a href="${video.url}" target="_blank">${video.title}</a>`;
                videoList.appendChild(videoItem);
            });
        }
    }

    // Event listener for the search input
    searchInput.addEventListener("input", function () {
        const query = this.value.trim();
        displaySearchResults(query);
    });

    // Initial display of all videos
    displaySearchResults("");
});
