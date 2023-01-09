var slideshow = document.getElementById('slideshow');
var newestpost = document.getElementById('newestpost');
var thirdnewestposts = document.getElementById('thirdnewestposts');
var sixthnewestposts = document.getElementById('sixthnewestposts');
var allposts = document.getElementById('allposts');
var aktuelt = document.getElementById('aktuelt');

window.onload = function () {
    fetch("blog/json/slideshow.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            data.reverse();
            if (data.length < 1) {
                var post = data[i];
                var postElement = document.createElement('div');
                postElement.className = 'swiper-slide';
                postElement.innerHTML = `
                    <a href="" class="img-bg d-flex align-items-end"">
                        <div class="img-bg-inner">
                            <h2>Ingen innlegg lagt ut...</h2>
                        </div>
                    </a>
                    `
                slideshow.appendChild(postElement);
            } else {
                for (var i = 0; i < data.length; i++) {
                    var post = data[i];
                    var postElement = document.createElement('div');
                    postElement.className = 'swiper-slide';
                    postElement.innerHTML = `
                        <a href="blog/posts/${post.category}/${post.file}" class="img-bg d-flex align-items-end" style="background-image: url('blog/images/${post.category}/${post.image}');">
                            <div class="img-bg-inner">
                                <h2>${post.title}</h2>
                                <p>${post.undertitle}</p>
                            </div>
                        </a>
                        `
                    slideshow.appendChild(postElement);
                }
            }
        });
    fetch("blog/json/posts.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            data.reverse();
            if (data.length < 1) {
                var post = data[i];
                var postElement = document.createElement('div');
                postElement.className = 'post-entry-1 lg';
                postElement.innerHTML = `
                    <h2><a href="">Ingen innlegg lagt ut...</a></h2>
                    `
                newestpost.appendChild(postElement);
            } else {
                for (var i = 0; i < 1; i++) {
                    var post = data[i];
                    var postElement = document.createElement('div');
                    postElement.className = 'post-entry-1 lg';
                    postElement.innerHTML = `
                        <a href="blog/posts/${post.category}/${post.file}"><img src="blog/images/${post.category}/${post.image}" alt="" class="img-fluid"></a>
                        <div class="post-meta"><span class="date">${post.author}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span></div>
                        <h2><a href="blog/posts/${post.category}/${post.file}">${post.title}</a></h2>
                        <p class="mb-4 d-block">${post.undertitle}</p>
                        `
                    newestpost.appendChild(postElement);
                }
            }
        });
    fetch("blog/json/posts.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.reverse();
            for (var i = 1; i < data.length; i++) {
                var post = data[i];
                var postElement = document.createElement('div');
                postElement.className = 'post-entry-1';
                postElement.innerHTML = `
                    <a href="blog/posts/${post.category}/${post.file}"><img src="blog/images/${post.category}/${post.image}" alt="" class="img-fluid"></a>
                    <div class="post-meta"><span class="date">${post.author}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span></div>
                    <h2><a href="blog/posts/${post.category}/${post.file}">${post.title}</a></h2>
                    `
                thirdnewestposts.appendChild(postElement);
                if (i == 3) break;
            }
        });
    fetch("blog/json/posts.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.reverse();
            for (var i = 4; i < data.length; i++) {
                var post = data[i];
                if (i == 6) {
                    var postElement = document.createElement('div');
                    postElement.className = 'post-entry-1';
                    postElement.innerHTML = `
                        <a href="blog/posts/${post.category}/${post.file}"><img src="blog/images/${post.category}/${post.image}" alt="" class="img-fluid"></a>
                        <div class="post-meta"><span class="date">${post.author}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span></div>
                        <h2><a href="blog/posts/${post.category}/${post.file}">${post.title}</a></h2>
                        <a href="allposts.html" class="more">Se alle innlegg</a>
                        `
                    sixthnewestposts.appendChild(postElement);
                } else {
                    var postElement = document.createElement('div');
                    postElement.className = 'post-entry-1';
                    postElement.innerHTML = `
                        <a href="blog/posts/${post.category}/${post.file}"><img src="blog/images/${post.category}/${post.image}" alt="" class="img-fluid"></a>
                        <div class="post-meta"><span class="date">${post.author}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span></div>
                        <h2><a href="blog/posts/${post.category}/${post.file}">${post.title}</a></h2>
                        `
                    sixthnewestposts.appendChild(postElement);
                }
                if (i == 6) break;
            }
        });
    fetch("blog/json/posts.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.reverse();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                var postElement = document.createElement('div');
                postElement.className = 'd-md-flex post-entry-2 half';
                postElement.innerHTML = `
                    <a href="blog/posts/${post.category}/${post.file}" class="me-4 thumbnail">
                        <img src="blog/images/${post.category}/${post.image}" alt="" class="img-fluid w-100">
                    </a>
                    <div>
                        <div class="post-meta"><span class="date">${post.author}</span> <span class="mx-1">&bullet;</span> <span>${post.date}</span></div>
                        <h3><a href="blog/posts/${post.category}/${post.file}">${post.title}</a></h3>
                        <p>${post.undertitle}</p>
                    </div>
                    `
                allposts.appendChild(postElement);
            }
        });
    fetch("blog/json/aktuelt.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            data.reverse();
            if (data.length < 1) {
                var post = data[i];
                var postElement = document.createElement('li');
                postElement.innerHTML = `
                    <a href="">
                        <span class="number">0</span>
                        <h3>Ingenting aktuelt akkurat nå</h3>
                    </a>
                    `
                aktuelt.appendChild(postElement);
            } else {
                for (var i = 0; i < data.length; i++) {
                    var post = data[i];
                    var postElement = document.createElement('li');
                    postElement.innerHTML = `
                        <a href="blog/posts/${post.category}/${post.file}">
                        <span class="number">${i + 1}</span>
                        <h3>${post.title}</h3>
                        <span class="author">${post.undertitle}</span>
                        </a>
                        `
                    aktuelt.appendChild(postElement);
                }
            }
        });
}