console.log("Hello i am linked");

const typeFilter = document.querySelector("#typeFilter");
const searchFilter = document.querySelector("#searchFilter");


let objectArray = [
    {
        id: 456,
        name: 'Diesel',
        type: 'RTD',
        what: 'Bourbon and Cola (6 Pack)',
        price: 15,
        rating: '7/10',
        image:'./diesel.png',
        cps: '$1.39',
        tags: ['bourbon', 'coke', 'can', 'dirty'],
        description: 'The 8% Diesel was deadly. Those were dark days that I pray to which we shall never return. The first can was like drinking crude oil, but once your body had adjusted and your spincter had unclenched, it was way, way too easy to forget how strong it was, sip your way through 11 more of them and wake up in a dumpster outside the Hunter Centre.'
    },
    {
        id: 364,
        name: 'Purple Goanna',
        type: 'RTD',
        what: 'Unkown Substance (12 Pack)',
        price: 22.99,
        rating: '1/10',
        image:'./pg.png',
        cps: '$1.37',
        tags: ['pg', 'danger', 'demonjuice', 'purple'],
        description: 'Purple Goanna spits in the face of all that is holy. An artificial potion of methylated spirits and dirty chemicals, this RTD has inflicted a pain on the youth of New Zealand that even Suzie Cato could not fix. The flavours are indecipherable. With the deep purple hue of the liquid, one would assume it would be grape flavoured. It’s not even close. It just… purple flavour. It’s a mixture of sugar, paint thinner, and something weirdly metallic. Purple Goanna is mankind laughing in the face of God, standing up and declaring our freedom from the natural world. We have created something so vile, so artificial, that it is no longer recognisable as coming from God’s green earth.'
    },
    {
        id: 123,
        name: 'Bavaria',
        type: 'Lager',
        what: 'Bavarian Premium Lager',
        price: 3.49,
        rating: '7/10',
        image:'./Bavaria.png',
        cps: '$1.35',
        tags: ['beer', 'bottle', 'green', 'prememiem'],
        description: 'In terms of taste, for its price range Bavaria blows the competition out of the water. While the big cans and simple labelling naturally lead you to put Bavaria in the same class as Wild Buck or Ranfurly Draught, I urge you to pour it into a glass and see that it deserves to be classed alongside Heiny or Stella. The colour and clarity are outstanding. The hop presence is light, just enough to give a little kick. Faint notes of caramel and freshly cut grass see out the refreshingly dry finish. Bavaria is a perfectly legitimate example of a European Pils Lager.'
    },
    {
        id: 76,
        name: 'Flame',
        type: 'Lager',
        what: 'French full-bodied Lager (15 Pack)',
        price: 21.99,
        rating: '9/10',
        image:'./flame.png',
        cps: '$1.05',
        tags: ['bottle', 'glass', 'beer', 'gold'],
        description: 'Flame (pronounced Flamé) is an imported French beer, brewed by Trappist monks at a hidden monastery near the peak of the Pyrenees alps, since the early 1300s. Legend has it that the true recipe has never been written down, instead it is passed by oral tradition from master to apprentice. Before being entrusted with the recipe, the monks must go through years of physical, mental and spiritual training to prove that they are deserving custodians. The subtle nuances of this beer’s magnificence can only truly be appreciated by the tongue of an experienced taster. The hops dance delicately on the taste buds, playfully teasing the drinker with an incredible array of sensations. The malts play an undertone that can only be described as smooth jazz on a summer evening.  '
    },
    {
        id: 643,
        name: 'Kingfisher Strong',
        type: 'Lager',
        what: 'Premium Indian Beer (6 Pack)',
        price: 13.99,
        rating: '4/10',
        image:'./king.png',
        cps: '$1.29',
        tags: ['kingy', 'india', 'beer', 'strong', 'blackout'],
        description: 'This beer created in India is cheap, easy to drink, and much like its slogan (“The King of Good Times”) suggests, it’s a fucking good time. However, there’s a reason why you don’t see hordes of Uni students drinking these delectable drunken delights, it’s because these fuckers are sneaky. One minute you’re fine, then the next you’re absolutely pissed off your tits, passed out in your mate’s room, lounge or alleyway, most likely all three. The secret in Kingfisher’s deception is how easy they are to get down. They’re crisp, light and taste fine, unlike most other higher percentage beers. My theory is that much like a fish is attracted to a lure, skint students see this price, fall for the ploy, and never make the same mistake again.'
    },
    {
        id: 678,
        name: 'Clearskin Wine',
        type: 'Wine',
        what: 'Sauvignon Blanc 2016',
        price: 6.99,
        rating: '3/10',
        image:'./clear.png',
        cps: '$0.91',
        tags: [''],
        description: 'Cleanskin Sauvignon Blanc is a playful number that dances gently on the taste buds and fills the room with laughter. Of course, by “dance,” I mean “stomp” and by “laughter” I mean “screams of pain”. Cleanskin takes all the leftover backwash from all the half-drunk glasses in all the dirty pubs around the country, chucks them into a big plastic bucket, and stirs it around until it’s just an indecipherable mess of grapes, spit, and ethanol.'
    },
    {
        id: 462,
        name: 'Glacials',
        type: 'RTD',
        what: 'Nelson Vodka RTDs (10 Pack)',
        price: 24.99,
        rating: '8/10',
        image:'./glacials.png',
        cps: '$1.39',
        tags: ['vodka', 'cans', 'healthy', 'fruity', 'nelson'],
        description: 'Hard seltzer, adult seltzer, mature seltzer, spiked seltzer and hard sparkling alcohol water is a type of highball drink containing carbonated water, alcohol, and often fruit flavorings. In the US the alcohol is usually made by fermenting cane sugar; sometimes malted barley is used.' 
    },
    {
        id: 653,
        name: 'Nitro',
        type: 'RTD',
        what: 'Death in a bottle',
        price: 10.99,
        rating: '5.5/10',
        image:'./nitro.png',
        cps: '$1.39',
        tags: [''],
        description: 'Nitro is a kick up the arse from a big, heavy boot made of pure methamphetamine. The fact that this drink even exists is evidence enough that the human race is destined to destroy itself. Let’s break it down. At its core, Nitro is a fairly simple cocktail of vodka and orange soda – an artificial screwdriver, if you will.  Then they threw both taurine and guarana in there and made it as strong as legally possible. The end product is absolutely not safe for human consumption, but it’s undeniably yum – anything with that much sugar has to be. '
    }
];

prompt('Are you over the age of 18?');

function objectArrayCardInfo(){

    let i = 0;
    for(i = 0; i < objectArray.length; i++){

        generateCard(i);
    };

    modal();
};



objectArrayCardInfo();



function modal(){
    $(".moreInformation").click(function(){

        let i = 0;
        for(i = 0; i < objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){

                $("#objectArrayModalInfo").empty().append(
                    `
                       <h2 class="modalTitle">${objectArray[i].name}</h2>
                       <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                       <p class="model-text">${objectArray[i].description}</p>
                       <p class="model-text">Price: $${objectArray[i].price}</p>
                       <p class="model-text">Taste Rating: ${objectArray[i].rating}</p>
                    `
                );
            }
        }
    });
}



// Type Filter function

function filterType(event){

    event.preventDefault();

    $('#cardContent').empty();
    console.log("You are getting me");

    let selectedTypes = [];

    $('input[name="type"]:checked').each(function(){
        selectedTypes.push(this.value);
    }); 

    // start of selcted Genre loop
    let i = 0;
    for(i = 0; i < selectedTypes.length; i++){

        if(selectedTypes[i] == 'RTD'){
            console.log("You picked RTD");

            let i = 0;
            for(i = 0; i < objectArray.length; i++){

                   if(objectArray[i].type === 'RTD'){
                    $('#cardContent').append(
                        `
                                <div class="card card--style" style="width: 18rem;">
                                    <div class="img-container">
                                    <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                    </div>
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">${objectArray[i].name}</h5>
                                        <p class="card-text">${objectArray[i].what}</p>
                                        <p class="card-text">Cost Per Standard Drink: ${objectArray[i].cps}</p>
                                        <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Review</button>
                                    </div>
                                </div>  
                        `
                    );
                   }
               }
        }

        if(selectedTypes[i] == 'Lager'){
            console.log("You picked Lager");

            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                   if(objectArray[i].type === 'Lager'){
                    $('#cardContent').append(
                        `
                                <div class="card card--style" style="width: 18rem;">
                                    <div class="img-container">
                                    <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                    </div>
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">${objectArray[i].name}</h5>
                                        <p class="card-text">${objectArray[i].what}</p>
                                        <p class="card-text">Cost Per Standard Drink: ${objectArray[i].cps}</p>
                                        <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Review</button>
                                    </div>
                                </div>  
                        `
                    );
                   }
               }
        }

        if(selectedTypes[i] == 'Wine'){
            console.log("You picked Wine");

            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                   if(objectArray[i].type === 'Wine'){
                    $('#cardContent').append(
                        `
                                <div class="card card--style" style="width: 18rem;">
                                    <div class="img-container">
                                    <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                    </div>
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">${objectArray[i].name}</h5>
                                        <p class="card-text">${objectArray[i].what}</p>
                                        <p class="card-text">Cost Per Standard Drink: ${objectArray[i].cps}</p>
                                        <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Review</button>
                                    </div>
                                </div>  
                        `
                    );
                   }
               }
        }
    };
    modal();
};



// =====================================
// start of search function
// =====================================

function filterSearchWord(){

    // the prop() method sets or returs properties and values of selected elements
    $('input[type=checkbox]').prop('checked',false);

    let searchWord = $('#searchWord').val();
    filterByWord(searchWord);
    $('input[name=search]').val('');
};



function filterByWord(word){

    $('#cardContent').empty();

    let i, j;
    for(i = 0; i < objectArray.length; i++){
        for(j = 0; j < objectArray[i].tags.length; j++){
            if(word.toLowerCase() === objectArray[i].tags[j]){
                generateCard(i);
            }
        }
    }

    if(word === ''){
        noInput();
    }
}



function noInput(){
    for(let i = 0; i < objectArray.length; i++){
        generateCard(i);
    }
}



// =====================================
// end of search function
// =====================================



// =====================================
// start of alphabetical search
// =====================================



$('#sortBtn').change(function(){
    let sortValue = ($('#sortBtn').val()).toLowerCase();
    console.log(sortValue);

    if((sortValue === 'name') || (sortValue === 'what')){
        console.log('is equal');
        sortByAscending(sortValue);
    }
});



function sortByAscending(sortOrder){
    console.log(sortOrder);

    objectArray.sort(function(a, b){

            // switch stament
            // filter through values that we get from our dropdown
            // comparing our properties to one another to check asending order

            switch(sortOrder){
                case 'name':
                    var itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
                    break;
                case 'what':
                    var itemA = a.what.toLowerCase(), itemB = b.what.toLowerCase();
                    break;
                default:
                    console.log('not matching');
            }

            // end of switch statement
            if (itemA < itemB){
                return -1;
                // false
            }

            if (itemA < itemB){
                return 1;
            }
    });

    console.log(objectArray);
    allCards();

}



// =====================================
// end of alphabetical search
// =====================================



// =====================================
// start of refresh btn
// =====================================



$('#refresh').click(function(){
    $('cardContent').empty();
    $('input[type=checkbox]').prop('checked',false);
    allCards();
});



// =====================================
// end of refresh btn
// =====================================



function allCards(){

    $('#cardContent').empty();
    for(let i =0; i <objectArray.length; i++){
        generateCard(i);
    }

}



// =====================================
// start of card generator
// =====================================


function generateCard(x){

    $('#cardContent').append(
        `
                <div class="card card--style" style="width: 18rem;">
                    <div class="img-container">
                    <img class="card-img-top" src="${objectArray[x].image}" alt="Card image cap">
                    </div>
                    
                    <div class="card-body">
                        <h5 class="card-title">${objectArray[x].name}</h5>
                        <p class="card-text">${objectArray[x].what}</p>
                        <p class="card-text">Cost Per Standard Drink: ${objectArray[x].cps}</p>
                        <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Review</button>
                    </div>
                </div>  
        `
    );

    modal();
};



// =====================================
// end of card generator
// =====================================





typeFilter.addEventListener("click", filterType);
searchFilter.addEventListener("click", filterSearchWord);