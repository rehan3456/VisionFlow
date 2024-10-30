window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });
});



// Array of 100 writing prompts
const writingPrompts = [
    "Write about a day when everything goes wrong.",
    "Describe a dream that feels incredibly real.",
    "Imagine you find a secret door in your home.",
    "Write about a character who gains a superpower.",
    "Create a story based on an unexpected phone call.",
    "Describe a world where everyone can read minds.",
    "Write about a journey to a hidden city.",
    "Tell a story from the perspective of an animal.",
    "Imagine you wake up with a different identity.",
    "Write a letter to your future self.",
    "Describe a friendship between two unlikely characters.",
    "Write about a lost treasure map.",
    "Create a story set in a world without technology.",
    "Describe a magical object that changes lives.",
    "Write about a time traveler stuck in the past.",
    "Imagine a world where dreams are recorded.",
    "Write a story that begins with a mysterious gift.",
    "Describe a character who discovers a hidden talent.",
    "Write about a day that repeats over and over.",
    "Tell a story of a forgotten hero.",
    "Write about an unexpected adventure in your backyard.",
    "Describe a future world ruled by animals.",
    "Imagine you meet your favorite fictional character.",
    "Write a story based on a strange news headline.",
    "Describe a moment when time stands still.",
    "Write about a person who can talk to ghosts.",
    "Imagine you are a detective solving a mystery.",
    "Create a story about a family secret.",
    "Write about a character who has never seen the sky.",
    "Describe a friendship that spans across lifetimes.",
    "Write about a journey into a forbidden forest.",
    "Imagine a world where books are illegal.",
    "Write about a lost object that changes someone's life.",
    "Describe a day when you can hear others' thoughts.",
    "Write about a character who lives in two worlds.",
    "Imagine finding a diary from the future.",
    "Create a story around a mysterious letter.",
    "Write about a world without color.",
    "Describe a moment that changes everything.",
    "Write about a hidden city beneath the ocean.",
    "Imagine a conversation with your past self.",
    "Write about a secret society in your neighborhood.",
    "Describe a character who can control the weather.",
    "Write about an ordinary object with magical powers.",
    "Imagine you are the last person on Earth.",
    "Create a story about a dream that comes true.",
    "Write about a place where the stars are closer.",
    "Describe a time when you felt invincible.",
    "Write about a hidden world within a book.",
    "Imagine being able to swap lives with someone.",
    "Write about a mysterious clock that controls time.",
    "Describe a moment when you could change your past.",
    "Write about an adventure in an enchanted forest.",
    "Imagine you find a portal to another dimension.",
    "Write about a character who can hear whispers from the future.",
    "Describe a city that only appears at night.",
    "Write about a strange message written in the sky.",
    "Imagine a world where everyone has a twin.",
    "Write about an unusual friendship between two rivals.",
    "Describe a moment frozen in time.",
    "Write about a day when everyone can fly.",
    "Imagine you find an object that grants wishes.",
    "Write about a character who wakes up in a different year.",
    "Describe a world where emotions are traded.",
    "Write about a hidden library of forgotten books.",
    "Imagine a journey to the center of the Earth.",
    "Write about a creature living in your shadow.",
    "Describe a storm that brings memories to life.",
    "Write about a world where everyone has a unique power.",
    "Imagine being stuck in a painting.",
    "Write about a race against time to find a cure.",
    "Describe a moment of kindness that changes a life.",
    "Write about a character who can erase memories.",
    "Imagine being able to step into someone else’s dreams.",
    "Write about a day when you can’t remember your own name.",
    "Describe an encounter with a mythical creature.",
    "Write about a secret hidden in a photograph.",
    "Imagine a world where everyone speaks in riddles.",
    "Write about an island that moves on its own.",
    "Describe a character who never ages.",
    "Write about a lost city in the clouds.",
    "Imagine you are invisible for a day.",
    "Write about a house that changes its rooms every night.",
    "Describe a day when animals start talking.",
    "Write about an adventure in a world made of candy.",
    "Imagine a story where music has magical powers.",
    "Write about finding a letter that changes everything.",
    "Describe a character who can see the future.",
    "Write about a journey to the end of the world.",
    "Imagine a story set in a land of eternal winter.",
    "Write about a character who can speak any language.",
    "Describe a world where the sun never sets.",
    "Write about a treasure hunt that leads to an unexpected place.",
    "Imagine you wake up as a completely different person.",
    "Write about a conversation with a statue.",
    "Describe a night when the moon disappears.",
    "Write about a day that feels like a dream.",
    "Imagine finding a hidden room in your house.",
    "Write about a character who can stop time."
];

// Function to get a random prompt
function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * writingPrompts.length);
    return writingPrompts[randomIndex];
}

// Event listener for the generate button
document.getElementById('generate-btn').addEventListener('click', function () {
    // Get a random writing prompt
    const inspiration = getRandomPrompt();

    // Display the result
    document.getElementById('inspiration-result').textContent = inspiration;
});








// Array of 100 art prompts
const artPrompts = [
    "Create a painting of a sunset in a futuristic city.",
    "Draw a self-portrait using only geometric shapes.",
    "Design a logo for an imaginary brand.",
    "Sketch a scene from your favorite movie.",
    "Create a surreal landscape with floating islands.",
    "Draw a mythical creature with unusual features.",
    "Design a cover for a science fiction novel.",
    "Create a comic strip about an everyday hero.",
    "Paint a picture inspired by your favorite song.",
    "Draw a fantasy castle in the clouds.",
    "Create an abstract piece using only circles.",
    "Sketch a day in the life of an alien.",
    "Design a tattoo with elements from nature.",
    "Create a portrait of a famous historical figure as a modern-day person.",
    "Draw a scene from a dream you once had.",
    "Design an album cover for a band you like.",
    "Paint a landscape using only three colors.",
    "Create a futuristic fashion outfit.",
    "Sketch an animal that doesn't exist.",
    "Design a magical portal to another world.",
    "Create a still life with objects from your room.",
    "Draw a character with wings in an urban setting.",
    "Design a poster for a fictional movie.",
    "Create a pattern inspired by flowers.",
    "Paint a scene from a fairytale with a twist.",
    "Draw a robot in a natural environment.",
    "Design a series of stamps featuring famous landmarks.",
    "Create a piece of art inspired by outer space.",
    "Sketch a person who can control the elements.",
    "Design an illustrated map of your neighborhood.",
    "Paint a portrait of your favorite pet in a whimsical style.",
    "Draw a futuristic vehicle with unique features.",
    "Create a piece of art using only black and white.",
    "Design a cover for a magazine about travel.",
    "Sketch a tree with branches that tell a story.",
    "Create a visual representation of a quote you love.",
    "Paint a moment from history with a modern twist.",
    "Draw a character who has the power of invisibility.",
    "Design a book cover for a classic novel.",
    "Create an artwork inspired by your favorite season.",
    "Sketch an underwater world with unusual creatures.",
    "Paint a scene that shows two worlds colliding.",
    "Draw a superhero with an unexpected weakness.",
    "Create an abstract interpretation of time.",
    "Design a futuristic building with eco-friendly features.",
    "Draw a fantasy creature inspired by animals you know.",
    "Create a mural that represents your community.",
    "Paint a series of emotions in abstract form.",
    "Design a mask for a masquerade ball.",
    "Sketch a scene from a story you haven't written yet.",
    "Create an art piece using only dots (pointillism).",
    "Draw an animal in a completely different style than you’re used to.",
    "Design a stained glass window for a modern building.",
    "Create an illustration of a bustling city street.",
    "Paint a dreamscape with elements of nature and fantasy.",
    "Draw a portrait of yourself as an older version.",
    "Design a series of posters for a made-up festival.",
    "Create a collage using everyday objects.",
    "Sketch a character who is half-human, half-machine.",
    "Paint a galaxy on a clear night sky.",
    "Design a board game with unique art on each piece.",
    "Draw your favorite place but with a twist – add fantasy elements.",
    "Create a futuristic advertisement for a new product.",
    "Sketch the view from your window but as it would be in another time period.",
    "Design a series of playing cards with custom illustrations.",
    "Paint a scene from mythology.",
    "Draw a comic panel showing an epic battle.",
    "Create a piece that represents the four seasons.",
    "Sketch a building that exists only in your imagination.",
    "Design a set of bookplates for your personal library.",
    "Create a visual diary page that captures your day.",
    "Draw an animal combined with a piece of technology.",
    "Paint an underwater scene with hidden treasures.",
    "Design a new superhero logo.",
    "Sketch a landscape that exists only in your dreams.",
    "Create an artwork inspired by your favorite food.",
    "Draw a steampunk-inspired version of a common object.",
    "Paint a portrait of your family as if they were from another era.",
    "Design a wallpaper pattern using your favorite colors.",
    "Create an artwork inspired by your favorite poem.",
    "Sketch a house that defies the laws of physics.",
    "Paint a night scene with glowing elements.",
    "Design a wrapping paper with hand-drawn illustrations.",
    "Draw a character who is half human, half plant.",
    "Create a poster advertising an event from another dimension.",
    "Sketch your reflection in something other than a mirror.",
    "Paint a memory you wish you could revisit.",
    "Design a window display for an imaginary shop.",
    "Create a futuristic version of a famous monument.",
    "Draw a series of symbols that represent you.",
    "Paint a landscape using only cool colors.",
    "Design a book cover using only silhouettes.",
    "Draw a scene from your favorite childhood story.",
    "Create an artwork that blends reality and fantasy.",
    "Sketch a tree with leaves made of different objects.",
    "Paint a moment from your favorite movie.",
    "Design a character who lives in an underwater world.",
    "Draw an art piece inspired by the concept of time."
];

// Function to get a random art prompt
function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * artPrompts.length);
    return artPrompts[randomIndex];
}

// Event listener for the generate button
document.getElementById('generate-btn').addEventListener('click', function () {
    // Get a random art prompt
    const inspiration = getRandomPrompt();

    // Display the result
    document.getElementById('inspiration-result').textContent = inspiration;
});



















