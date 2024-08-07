const storyList = document.getElementById('story-list');  
const storyForm = document.getElementById('story-form');  

// Fetch Stories  
const fetchStories = async () => {  
    const response = await fetch('http://localhost:5000/api/stories');  
    const stories = await response.json();  
    renderStories(stories);  
}  

// Render Stories  
const renderStories = (stories) => {  
    storyList.innerHTML = '';  
    stories.forEach(story => {  
        const storyElement = document.createElement('div');  
        storyElement.innerHTML = `<h2>${story.title}</h2><p>${story.content}</p>`;  
        storyList.appendChild(storyElement);  
    });  
}  

// Handle Story Submission  
storyForm.addEventListener('submit', async (e) => {  
    e.preventDefault();  
    const title = document.getElementById('title').value;  
    const content = document.getElementById('content').value;  

    await fetch('http://localhost:5000/api/stories', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify({ title, content })  
    });  

    document.getElementById('title').value = '';  
    document.getElementById('content').value = '';  
    fetchStories();  
});  

// Initial Fetch  
fetchStories();  