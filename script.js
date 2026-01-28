// Play music and hide overlay
function playMusicAndHideOverlay() {
    const overlay = document.getElementById('overlay');
    const audio = document.getElementById('backgroundAudio');
    
    overlay.classList.add('hidden');
    
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    }
}

// Volume slider
document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volume-slider');
    const audio = document.getElementById('backgroundAudio');
    
    if (volumeSlider && audio) {
        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value;
        });
    }
});

// Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Time check (shows popup between 2 AM and 6 AM)
function checkTime() {
    const timeCheckPopup = document.getElementById('timeCheckPopup');
    if (!timeCheckPopup) return;
    
    const now = new Date();
    const hours = now.getHours();
    
    if (hours >= 2 && hours < 6) {
        timeCheckPopup.style.display = 'block';
        setTimeout(() => {
            timeCheckPopup.style.display = 'none';
        }, 5000);
    }
}

// Check time every minute
setInterval(checkTime, 60000);
checkTime();

// Search functionality (basic implementation)
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        // Search in user cards
        const userCards = document.querySelectorAll('#userList .card');
        userCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
        
        // Search in gang cards
        const gangCards = document.querySelectorAll('#gangList .card');
        gangCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
        
        // Search in profile cards
        const profileCards = document.querySelectorAll('.profile-card');
        profileCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
        
        // Search in depot cards
        const depotCards = document.querySelectorAll('.depot-card');
        depotCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });
}

// Sample data loading (you can customize this)
document.addEventListener('DOMContentLoaded', function() {
    // Load users (example)
    const userList = document.getElementById('userList');
    if (userList) {
        // Add your users here if needed
        // Example: userList.innerHTML = '<div class="card">User content</div>';
    }
    
    // Load gangs (example)
    const gangList = document.getElementById('gangList');
    if (gangList) {
        // Add your teams here if needed
        // Example: gangList.innerHTML = '<div class="card">Team content</div>';
    }
});

// Prevent right-click on videos (optional)
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

// Lazy loading for videos
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.load();
                    videoObserver.unobserve(video);
                }
            });
        });
        
        videos.forEach(function(video) {
            videoObserver.observe(video);
        });
    }
});
