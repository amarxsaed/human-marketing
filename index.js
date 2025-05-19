
const cardData = [
    {
        title: "One Agency for All Your Needs",
        description: "Beautifully crafted components ready for your project",
        image: "https://cdn.sanity.io/images/s06jdt4r/production/d2d15865513b07c32a5811e37f7e0f4d97a8228b-64x65.svg?w=128&q=75&fit=clip&auto=format",
      
    },
    {
        title: "Fast Performance",
        description: "Optimized for speed and smooth performance",
        image: "https://cdn.sanity.io/images/s06jdt4r/production/fd4b47fc03ed04acf3e55d70d292868594a56256-38x65.svg?w=96&q=75&fit=clip&auto=format",
       
    },
    {
        title: "Easy Customization",
        description: "Change colors, sizes and more with simple classes",
        image: "https://cdn.sanity.io/images/s06jdt4r/production/a0ea2eddba83986c16f6c165a727065847a15e03-66x65.svg?w=256&q=75&fit=clip&auto=format",
     
    },
    {
        title: "Responsive Layout",
        description: "Works perfectly on all device sizes",
        image: "https://cdn.sanity.io/images/s06jdt4r/production/328f55a2b2781b2d5fc3eb3bc284149c3b429802-64x65.svg?w=128&q=75&fit=clip&auto=format"
    },
    {
        title: "Clean Code",
        description: "Semantic and easy to understand structure",
        image: "https://cdn.sanity.io/images/s06jdt4r/production/7e75824b6d5839072ec83b0f0f4e56ac46128ef7-76x65.svg?w=256&q=75&fit=clip&auto=format"
    },
    {
        title: "Free Updates",
        description: "Regular updates with new features",
        image: "https://cdn.sanity.io/images/s06jdt4r/production/35aca33d66973c8c9e8071713a600badbcfd1348-64x65.svg?w=128&q=75&fit=clip&auto=format",
        
    }
];

const logos = [
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Adobe_Corporate_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Meta_Platforms_Logo_2021.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Samsung_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Spotify_logo_with_text.svg"
    ];

   
function createCard(card) {
    return `
        <div class="flex flex-col bg-white rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
            <div class="relative p-5 flex items-center justify-center">
                <img class="w-20 h-20 object-contain" src="${card.image}" alt="${card.title}">
               
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-xl  text-gray-800 mb-2">${card.title}</h3>
                <p class="text-gray-600 flex-grow">${card.description}</p>
                
            </div>
        </div>
    `;
}

function renderCards() {
    const container = document.getElementById('cardContainer');
    container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4';
    
    
    container.innerHTML = cardData.map(createCard).join('');
}

document.addEventListener('DOMContentLoaded', renderCards);
 const wrapper = document.getElementById("logo-marquee-wrapper");

    const marquee = document.createElement("marquee");
    marquee.setAttribute("behavior", "scroll");
    marquee.setAttribute("direction", "left");
    marquee.className = "py-4 bg-black";

    const flexDiv = document.createElement("div");
    flexDiv.className = "inline-flex gap-12";

    // Repeat logos twice for smooth scroll
    for (let i = 0; i < 2; i++) {
      logos.forEach((logo) => {
        const img = document.createElement("img");
        img.src = logo;
        img.alt = "Company Logo";
        img.className = "h-8 inline-block";
        flexDiv.appendChild(img);
      });
    }

    marquee.appendChild(flexDiv);
    wrapper.appendChild(marquee);