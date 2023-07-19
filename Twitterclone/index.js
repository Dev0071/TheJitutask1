const selectInput = document.getElementById('select-input');
const userDetailsDiv = document.getElementById('user-details');
const postDetailsDiv = document.getElementById('post-details');
const commentsDiv = document.getElementById('comments');

// fetch  function
const fetchFunction = async url => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

const displayUserData = async userId => {
	const user = await fetchFunction(`https://jsonplaceholder.typicode.com/users/${userId}`);
	if (user) {
		userDetailsDiv.innerHTML = `<article class="user">
        <h4>${user.name}</h4>
        <h5>@${user.username}</h5>
        <a href="#">Link to my website</a>
        <p>${user.company.catchPhrase}</p>
        <p> <img src="./images/location2Icon.png" style="width: 1rem;"> ${user.address.city} </p>
    </article>`;
	}
};

const displayPosts = async userId => {
	const user = await fetchFunction(`https://jsonplaceholder.typicode.com/users/${userId}`);
	const posts = await fetchFunction(`https://jsonplaceholder.typicode.com/posts`);
	const userPosts = posts.filter(post => post.userId === parseInt(userId));
	postDetailsDiv.innerHTML = '';
	userPosts.forEach(post => {
		const postTemplate = `<article class="post">
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
            <div class="post-info">
                <p>${user.name}<img src="./images/Twitter_Verified_Badge.svg.png" alt=""> <img
                        src="./images/twitter-logo.png" alt="">
                </p>
                <p>${post.body}</p>
                <div id="reaction">
                    <span>
                        <img src="./images/comment-icon.png" alt="">
                        <p>200</p>
                    </span>
                    <span><img src="./images/retweet-11.png" alt="">
                        <p>200</p>
                    </span>
                    <span><img src="./images/like-icon.png" alt="">
                        <p>200</p>
                    </span>

                </div>
            </div>
        </article>`;
		postDetailsDiv.innerHTML += postTemplate;
	});
};

const displayUsers = async () => {
	const users = await fetchFunction('https://jsonplaceholder.typicode.com/users');
	users.forEach(user => {
		const option = document.createElement('option');
		option.value = user.id;
		option.textContent = user.name;
		selectInput.appendChild(option);
	});
	if (users.length > 0) {
		const firstUserId = users[0].id;
		displayUserData(firstUserId);
		displayPosts(firstUserId);
	}
};

const displayComments = async postId => {
	const comments = await fetchFunction('https://jsonplaceholder.typicode.com/comments');
	const postComments = comments.filter(comment => comment.postId === parseInt(postId));
	// console.log(postComments);
	postComments.forEach(comment => {
		const commentTemplate = `<article class="post">
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
            <div class="post-info">
                <p>${comment.name}<img src="./images/Twitter_Verified_Badge.svg.png" alt=""> <img
                        src="./images/twitter-logo.png" alt="">
                </p>
                <p>${comment.body}</p>
                <div id="reaction">
                    <span>
                        <img src="./images/comment-icon.png" alt="">
                        <p>0</p>
                    </span>
                    <span><img src="./images/retweet-11.png" alt="">
                        <p>20</p>
                    </span>
                    <span><img src="./images/like-icon.png" alt="">
                        <p>2</p>
                    </span>

                </div>
            </div>
        </article>`;

		commentsDiv.innerHTML += commentTemplate;
	});
};

const displayData = async userId => {
	displayUserData(userId);
	displayPosts(userId);
};

displayUsers();
displayComments(1);
