const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const items = data.posts;
    // console.log(items)
  
        displayItems(items)

}

const displayItems = items => {
    // console.log(items);
    const cardContainer = document.getElementById('card-container');

// clear card container before adding new cards
cardContainer.textContent = '';


    items.forEach(item => {

        const postCard = document.createElement('div');
        postCard.classList = `card card-side bg-purple-100 mb-6 shadow-xl relative`;

        const badgeColor = item.isActive ? 'green' : 'red';
        
        postCard.innerHTML = `
        <div class="badge badge-lg absolute lg:ml-36 rounded-full"style="background-color: ${badgeColor}"></div>
        <div class="w-40 h-36 lg:h-48 rounded-2xl">
          <img class="rounded-3xl" src="${item?.image
          }" />
        </div>
      <!-- </div> -->
      <div class="card-body">
        <div class="flex gap-4">
          <h1>#${item?.category}</h1>
          <p>Author: ${item?.author?.name}</p>
        </div>
    
        <h2 class="card-title">${item?.title
        }</h2>
        <p>${item?.description}</p>
    
        <hr class="border-dashed bg-black">
    
        <div class="flex gap-4 lg:gap-16">
    
          <div class="flex"><img src="images/tabler-icon-message-2.png" alt="">
            <p>${item?.comment_count}</p>
          </div>
          <div class="flex"><img src="images/Group 16.png" alt="">
            <p>${item?.
                view_count}</p>
          </div>
          <div class="flex"><img src="images/Group 18.png" alt="">
            <p>${item?.posted_time}</p>
          </div>
    
        </div>
    
        <div class="card-actions justify-end">
          <!--card button -->
          <button onclick="handleShowButton()"><img src="images/card-btn.png" alt="">
          </button>
        </div>
      </div>
    </div>

        `;
        cardContainer.appendChild(postCard);

        
    })
   
}
// handle search button
const handleSearch = async () => {
    const searchField = document.getElementById('search-field');
    document.getElementById('loading-spinner').style.display = 'block';
    const searchText = searchField.value;

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    displayItems(data.posts);
    document.getElementById('loading-spinner').style.display = 'none';

    document.getElementById('search-button').addEventListener('click', handleSearch);
}


const latestCard = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json(); 
    const latestData = data.slice(0, 3);
    
    // latestData.forEach(post => {
    //     console.log(post);
        displayLatestCard(latestData)
    // });
}

const displayLatestCard = latestData =>{
    // console.log(latestData);
    const latestCardContainer = document.getElementById('latest-card-container');

    latestData.forEach(post => {
        // console.log(post);
    const latestDataContainer = document.createElement('div');
    latestDataContainer.classList = `card w-96 bg-base-100 shadow-xl`;
    latestDataContainer.innerHTML = `
    <figure class="px-10 pt-10">
    <img src="${post?.cover_image
    }" alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body justify-end">
    <div class="flex">
      <img src="images/date.png" alt="">
      <p>${post?.author?.posted_date || 'No publish date'}</p>
    </div>
    <h1 class="text-xl font-bold">${post?.title}</h1>
    <p>${post?.description}</p>
    <div class="img-actions flex gap-3">
      <img class = "h-[44px] w-[44px] rounded-full" src="${post?.profile_image
      }" alt="">
      <div>
        <h1 class="text-xl font-bold">${post.author.name
        }</h1>
        <p>${post?.author?.designation || 'Unknown'}</p>
      </div>
    </div>
  </div>
    `;
    // append child
    latestCardContainer.appendChild(latestDataContainer);

    })
}

let count = 0;

const handleShowButton = async () =>{
  count ++;
  // console.log('ok');

  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
  const data = await res.json();
  // console.log(data.posts);
  const values = data.posts;
  console.log(values);

  //   values.forEach(value => {
  //   console.log(value)
  // })

  const buttonContainer = document.getElementById('display-count');
  buttonContainer.innerText = count;

 const showValueContainer = document.getElementById('show-value-container');



    if (count === 0 && values.length > 0) {
      const value = values[0];
    }

    const showValue = document.createElement('div');
    showValue.innerHTML = `
    <div class="flex mb-3 p-10 bg-white w-[400px] rounded-2xl lg:ml-4">
    <p class="font-bold">${data?.posts?.title}</p>
    <div class="flex gap-4 items-center">
      <img src="images/Group 16.png" alt="">
      <p>1568</p>
    </div>
  </div>

    `;
    showValueContainer.appendChild(showValue);
  

  

}














handleShowButton();

latestCard();

handleSearch();

loadCategory(items);