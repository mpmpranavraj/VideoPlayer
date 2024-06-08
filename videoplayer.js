const videosList = [
    {
        video: 'https://videos.pexels.com/video-files/4440821/4440821-hd_1280_720_50fps.mp4',
        title: 'Indian Bells'
    },
    {
        video:'https://videos.pexels.com/video-files/12142366/12142366-hd_1366_720_24fps.mp4',
        title: 'Folk Dance of India'
    },
    {
        video: 'https://videos.pexels.com/video-files/2802070/2802070-hd_1280_720_30fps.mp4',
        title: 'The Dome Roofing Of A Mosque Undergoing Repairs'
    },
    {
        video: 'https://videos.pexels.com/video-files/3610335/3610335-hd_1280_720_25fps.mp4',
        title: 'The Golden Sikh Temple In India'
    },
    {
        video: 'https://videos.pexels.com/video-files/19164360/19164360-hd_1280_720_30fps.mp4',
        title: 'Ganga Aarti in Varnasi'
    },
    {
        video: 'https://videos.pexels.com/video-files/4312257/4312257-hd_1280_720_30fps.mp4',
        title: 'Indian Festival on Streets'
    },
    {
        video: 'https://videos.pexels.com/video-files/12774529/12774529-hd_1280_720_30fps.mp4',
        title: 'Low Angle View of Moving Clouds over a Hindu Temple'
    },
    {
        video: 'https://videos.pexels.com/video-files/10653329/10653329-hd_1280_720_24fps.mp4',
        title: 'Aerial View on Hazratbal Shrine'
    },
    {
        video: 'https://videos.pexels.com/video-files/4460336/4460336-hd_1280_720_25fps.mp4',
        title: 'Tourists Visiting The Ancient Kailash Temple In India'
    },
];

const videoContainer = document.getElementById('videosList');
videoContainer.innerHTML = videosList.map(item => `
    <div class="list">
        <video src="${item.video}" class="list-video"></video>
        <h3 class="list-title">${item.title}</h3>
    </div>
`).join('');

let videoList = document.querySelectorAll('.list');

videoList.forEach(vid => {
    vid.addEventListener('click', function() {
        videoList.forEach(remove => remove.classList.remove('active'));
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-video').play();
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;

        // Add a delay before scrolling
        setTimeout(() => {
            document.querySelector('.main-video-container').scrollIntoView({ behavior: 'smooth' });
        }, 500); // 500 milliseconds delay before scrolling
    });
});

// Automatically load and play the first video in the list
if (videosList.length > 0) {
    document.querySelector('.main-video-container .main-video').src = videosList[0].video;
    document.querySelector('.main-video-container .main-vid-title').innerHTML = videosList[0].title;
    document.querySelector('.main-video-container .main-video').play();
    document.querySelectorAll('.list')[0].classList.add('active');
}
