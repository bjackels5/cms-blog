async function updatePostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value
    const post_text = document.querySelector('#post-text').value;


    const theSplit = window.location.toString().split('/');
    const id = theSplit[theSplit.length - 1];


    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

async function deletePostFormHandler(event) {
    event.preventDefault();

    const theSplit = window.location.toString().split('/');
    const id = theSplit[theSplit.length - 1];


    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.edit-post-form').addEventListener('submit', updatePostFormHandler);
document.querySelector('#deleteBtn').addEventListener('click', deletePostFormHandler);