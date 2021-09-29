let animals = document.querySelectorAll('.animal');
let dogVoteBtn = document.createElement('button');
let catVoteBtn = document.createElement('button');
let fishVoteBtn = document.createElement('button');
let dogVotesCell = document.querySelector('#doggo-votes');
let dogVotes = localStorage.getItem('dog-votes');
let dogVotesCount = parseInt(dogVotesCell.textContent);
let catVotesCell = document.querySelector('#catto-votes');
let catVotes = localStorage.getItem('cat-votes');
let catVotesCount = parseInt(catVotesCell.textContent);
let fishVotesCell = document.querySelector('#fish-votes');
let fishVotes = localStorage.getItem('fish-votes');
let fishVotesCount = parseInt(fishVotesCell.textContent);
let textContainer = document.querySelector('body')
let favoriteBtn = document.createElement('button');



dogVoteBtn.textContent = 'Vote for Doggo';
catVoteBtn.textContent = 'Vote for Catto';
fishVoteBtn.textContent = 'Vote for Fish ... o ... fisho? yeah, fisho!';
favoriteBtn.textContent = "Who's the goodest boy?"
favoriteBtn.style.height = '30px';
favoriteBtn.style.fontSize = 'large';
favoriteBtn.setAttribute('class', 'container')
favoriteBtn.style.position = 'relative'
favoriteBtn.style.margin = 'auto'



if(dogVotes) {
    dogVotesCell.textContent = dogVotes;
    dogVotesCount = parseInt(dogVotesCell.textContent);
};
if(catVotes) {
    catVotesCell.textContent = catVotes;
    catVotesCount = parseInt(catVotesCell.textContent);
};
if(fishVotes) {
    fishVotesCell.textContent = fishVotes;
    fishVotesCount = parseInt(fishVotesCell.textContent);
};
if(dogVotesCount>catVotesCount && dogVotesCount > fishVotesCount){
    animals[0].style.borderStyle = 'solid';
    animals[0].style.borderColor = 'gold';
    animals[0].style.backgroundColor = 'navajowhite';
    animals[1].style.borderStyle = 'none';
    animals[1].style.backgroundColor = 'white';
    animals[2].style.borderStyle = 'none';
    animals[2].style.backgroundColor = 'white';
}
if(catVotesCount>dogVotesCount && catVotesCount > fishVotesCount){
    animals[0].style.borderStyle = 'none';
    animals[0].style.backgroundColor = 'white';
    animals[1].style.borderStyle = 'solid';
    animals[1].style.borderColor = 'gold';
    animals[1].style.backgroundColor = 'navajowhite';
    animals[2].style.borderStyle = 'none';
    animals[2].style.backgroundColor = 'white';
}
if(fishVotesCount>dogVotesCount && fishVotesCount > catVotesCount){
    animals[0].style.borderStyle = 'none';
    animals[0].style.backgroundColor = 'white';
    animals[1].style.borderStyle = 'none';
    animals[1].style.backgroundColor = 'white';
    animals[2].style.borderStyle = 'solid';
    animals[2].style.borderColor = 'gold';
    animals[2].style.backgroundColor = 'navajowhite';
}

animals[0].append(dogVoteBtn);
animals[1].append(catVoteBtn);
animals[2].append(fishVoteBtn);
textContainer.append(favoriteBtn);



dogVoteBtn.addEventListener('click', function(e) {
    dogVotesCount = (dogVotesCount + 1);
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
    console.log("dog has been clicked");
    console.log(dogVotesCount)
    if(dogVotesCount>catVotesCount && dogVotesCount > fishVotesCount){
        animals[0].style.borderStyle = 'solid';
        animals[0].style.borderColor = 'gold';
        animals[0].style.backgroundColor = 'navajowhite';
        animals[1].style.borderStyle = 'none';
        animals[1].style.backgroundColor = 'white';
        animals[2].style.borderStyle = 'none';
        animals[2].style.backgroundColor = 'white';
    }
});
catVoteBtn.addEventListener('click', function(e) {
    catVotesCount = (catVotesCount + 1);
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('cat-votes', catVotesCount);
    console.log("cat has been clicked");
    console.log(catVotesCount)
    if(catVotesCount>dogVotesCount && catVotesCount > fishVotesCount){
    animals[0].style.borderStyle = 'none';
    animals[0].style.backgroundColor = 'white';
    animals[1].style.borderStyle = 'solid';
    animals[1].style.borderColor = 'gold';
    animals[1].style.backgroundColor = 'navajowhite';
    animals[2].style.borderStyle = 'none';
    animals[2].style.backgroundColor = 'white';
    }
});
fishVoteBtn.addEventListener('click', function(e) {
    fishVotesCount = (fishVotesCount + 1);
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes', fishVotesCount);
    console.log("fish has been clicked");
    console.log(fishVotesCount)
    if(fishVotesCount>dogVotesCount && fishVotesCount > catVotesCount){
    animals[0].style.borderStyle = 'none';
    animals[0].style.backgroundColor = 'white';
    animals[1].style.borderStyle = 'none';
    animals[1].style.backgroundColor = 'white';
    animals[2].style.borderStyle = 'solid';
    animals[2].style.borderColor = 'gold';
    animals[2].style.backgroundColor = 'navajowhite';
    }
});

favoriteBtn.addEventListener('click', function(e) {
    if(dogVotesCount>catVotesCount && dogVotesCount > fishVotesCount){
        window.alert('Doggo is the goodest boy!');
    }else if (catVotesCount>dogVotesCount && catVotesCount > fishVotesCount){
        window.alert('Catto is the goodest boy!');
    }else if (fishVotesCount>dogVotesCount && fishVotesCount > catVotesCount){
        window.alert('Fisho is the goodest boy!')
    }
}) 