const randomFoodImageUrl = 'https://foodish-api.com/api/';

async function getRandomImage() {
    try {
        console.log('Fetching random image...');
        const response = await fetch(randomFoodImageUrl);
        const data = await response.json();
        return data.image;
    } catch (error) {
        console.error('Error fetching image', error);
    }
}

const cuisineMapping = {
    indian: ['Wah Ji Wah', 'Dishoom', 'Scene Indian Street Kitchen', 'Mowgli Street Food'],
    italian: ['Salvis', 'Rudys', 'Giovannis', 'Ask Italian', 'Pizza Express'],
    greek: ['Dimitris', 'The Real Greek', 'The Athenian', 'Rozafa', 'Big Gyros', 'Katsouris'],
    chinese: ['Tattu', 'Dragon Oriental', 'The Rice Bowl', 'One Plus'],
    thai: ['My Thai', 'Rosas thai'],
    mexican: ['Bar Burrito', 'Taco Bell'],
    american: ['PopEyes', 'TGI Fridays'],
    english: ['Chippy']
};

function handleImageClick(cuisineType) {
    const imageContainer = document.getElementById(`${cuisineType}-tile-div`);
    const cuisineOverlay = document.getElementById(`${cuisineType}-overlay`);
    imageContainer.classList.add('enlarged');

    if (cuisineType === 'question-mark') {
        updateQuestionMarkImage(cuisineOverlay);
    } else {
        updateCuisineOverlay(cuisineType, cuisineOverlay);
    }

    if (cuisineType === 'english') {
        updateEnglishImage();
    }
}

async function updateQuestionMarkImage(cuisineOverlay) {
    const imageUrl = await getRandomImage();
    if (imageUrl) {
        const questionMarkImage = document.getElementById('question-mark-img');
        questionMarkImage.src = imageUrl;
        cuisineOverlay.classList.add('hidden');
    }
}

function updateCuisineOverlay(cuisineType, cuisineOverlay) {
    cuisineOverlay.innerText = getRandomRestaurant(cuisineType);
}

function getRandomRestaurant(cuisineType) {
    const restaurants = cuisineMapping[cuisineType];
    return restaurants[Math.floor(Math.random() * restaurants.length)];
}

function updateEnglishImage() {
    const englishImage = document.getElementById('english-img');
    englishImage.src = 'https://media1.tenor.com/images/fcfcbf4a9d5669e5338c1a06984b58b4/tenor.gif?itemid=11569617';
    const englishOverlay = document.getElementById('english-overlay');
    englishOverlay.classList.add('hidden');
}

function resetAllOverlays() {
    Object.keys(cuisineMapping).forEach(cuisineType => {
        const cuisineOverlay = document.getElementById(`${cuisineType}-overlay`);
        if (cuisineOverlay) {
            cuisineOverlay.innerText = capitalizeFirstLetter(cuisineType);
            cuisineOverlay.classList.remove('hidden');
        }
    });

    const questionMarkOverlay = document.getElementById('question-mark-overlay');
    if (questionMarkOverlay) {
        questionMarkOverlay.classList.remove('hidden');
        questionMarkOverlay.innerText = 'Food Pic';
    }
}

function resetImages() {
    const questionMarkImage = document.getElementById('question-mark-img');
    questionMarkImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Orange_question_mark.svg/2048px-Orange_question_mark.svg.png';

    const englishImage = document.getElementById('english-img');
    englishImage.src = 'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2022/01/feature-image_breakfast_english_england_shutterstock-premier_558715117_universal_within-usage-period_25001.jpg';
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.image-container')) {
            document.querySelectorAll('.enlarged').forEach(element => element.classList.remove('enlarged'));
            resetAllOverlays();
            resetImages();
        }
    });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
