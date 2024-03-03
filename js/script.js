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
        postCard.innerHTML = `
        <div class="badge badge-sm absolute justify-end">${item.
            isActive}</div>
        <div class="w-40 h-36 lg:h-48 rounded-2xl">
          <img class="rounded-3xl" src="${item.image
          }" />
        </div>
      <!-- </div> -->
      <div class="card-body">
        <div class="flex gap-4">
          <h1>#${item.category}</h1>
          <p>Author: ${item.author.name}</p>
        </div>
    
        <h2 class="card-title">${item.title
        }</h2>
        <p>${item.description}</p>
    
        <hr class="border-dashed bg-black">
    
        <div class="flex gap-4 lg:gap-16">
    
          <div class="flex"><img src="images/tabler-icon-message-2.png" alt="">
            <p>${item.comment_count}</p>
          </div>
          <div class="flex"><img src="images/Group 16.png" alt="">
            <p>${item.
                view_count}</p>
          </div>
          <div class="flex"><img src="images/Group 18.png" alt="">
            <p>${item.posted_time}</p>
          </div>
    
        </div>
    
        <div class="card-actions justify-end">
          <!--card button -->
          <button onclick="button()"><img src="images/card-btn.png" alt="">
          </button>
        </div>
      </div>
    </div>

        `;
        cardContainer.appendChild(postCard);
    })

}

// handle search button
const handleSearch = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts?category=comedy')
    const data = await res.json();
    console.log(data);
//    const searchField = document.getElementById('search-field');
//    const searchText = searchField.value;
//    console.log(searchText);


}



loadCategory();