// Define image paths for different times of day
const images = {
  morning: ['toast.png', 'sweet potato.png'],
  lunchtime: ['curry.png', 'soondobu.png'],
  dinnertime: ['sushi.png', 'spaghetti.png']
};

// Set default time of day
let timeOfDay = 'morning';

// Function to change images based on time of day
function changeImages(time) {
  const imageElements = document.querySelectorAll('.image');
  imageElements.forEach((element, index) => {
    element.querySelector('img').src = images[time][index];
  });
}

// Function to handle image click event
function handleImageClick(event) {
  event.preventDefault();
  const imageId = event.currentTarget.id;

  let popupContent = '';
  switch (imageId) {
    case 'food1':
      switch (timeOfDay) {
        case 'morning':
          popupContent = `
            <!-- Popup content for morning image -->
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toast Bible</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: lightgoldenrodyellow;
            padding: 20px;
        }


        .popup {
            max-width: 90%;
            margin: 0 auto;
            background-color: #f9f9f9;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }


        h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 10px;
        }


        p {
            color: #666;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 15px;
        }


        @media screen and (max-width: 600px) {
            .popup {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="popup">
    <h2>Good Morning!</h2>
        <h2>Toast:</h2>
        <p>Everyone should know how to make toast. You literally put bread in a toaster, and put any spread of choice on top! This is super easy and good for us independents because of how easy and quick it is. A toaster is cheap, and one of my most used objects.</p>
        <p>You can heighten your toast experience by understanding what type of bread is best for what type of spread. A soft fluffy milk bread is always yummy for sweet jammy things like an apricot jam, or nutty things like a pistachio butter. A crunchy, garlic sourdough might be yummy with a savory yogurt spread and eggs on top, or hummus, pine nuts, olive oil and flaky salt.</p>
        <p>The versatility of toast is its main appeal! You can doctor it up or keep it simple. Carb plus fat, salt plus sweet, these juxtapositions are great for balance and interest.</p>
    </div>
</body>
</html>
          `;
          break;
        case 'lunchtime':
          popupContent = `
            <!-- Popup content for lunch image -->
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Japanese Curry Bible</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: lightskyblue;
          padding: 20px;
      }


      .popup {
          max-width: 90%;
          margin: 0 auto;
          background-color: #f9f9f9;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }


      h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 10px;
      }


      p {
          color: #666;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 15px;
      }


      @media screen and (max-width: 600px) {
          .popup {
              max-width: 100%;
          }
      }
  </style>
</head>
<body>
  <div class="popup">
  <h2>Lunchtime!</h2>
      <h2>Curry:</h2>
      <p>A quick curry with rice is one of the easiest, most tasty meals you can make. It's also an amazing way to get rid of the dried produce you've got sitting around in your fridge! Use any leftover rice you may have, chop veggies into around the same size chunks.
      If you have onion, butter and garlic/ginger, saute the aromatics you have in butter and salt to sweat them down. Once they smell like heaven, add your chopped up veggies in the order of longest to shortest time to cook. Add cubed meat if you want and water and cover your pot. Let the water boil, and turn the heat down so it simmers.
       Continue simmering until the meat is cooked and the veggies are tender. The secret ingredient to an incredible curry is peanut butter, or any type of nut butter you have on hand. Add a few spoonfuls of nut butter and a block of Golden Curry (the instant Japanese kind!) and stir until they melt.
       Your curry is finished! Plate up with rice and any garnishes (scallions, pickles, fish roe?, egg). </p>
  </div>
</body>
</html>

          `;
          break;
        case 'dinnertime':
          popupContent = `
            <!-- Popup content for dinner image -->
            <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sushi Bible</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: midnightblue;
            padding: 20px;
        }
  
  
        .popup {
            max-width: 90%;
            margin: 0 auto;
            background-color: #f9f9f9;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
  
  
        h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 10px;
        }
  
  
        p {
            color: #666;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 15px;
        }
  
  
        @media screen and (max-width: 600px) {
            .popup {
                max-width: 100%;
            }
        }
    </style>
  </head>
  <body>
    <div class="popup">
    <h2>Dinnertime!</h2>
        <h2>Sushi:</h2>
        <p>Sushi is so yummy and so impressive, yet relatively simple in ingredients! Mastering how to make a perfect nigiri is one of the most
         satisfying skills to acquire. The beauty and precision that sushi chefs practice is super admirable, and really fun to learn about.
         In general, the basics of sushi are hard to enumerate, so just google when necessary! Maruichi is super accessible, making Japanese food like sushi and Japanese curry easy to cook! </p>
    </div>
  </body>
  </html>
  
          `;
          break;
        default:
          break;
      }
      break;
    case 'food2':
      switch (timeOfDay) {
        case 'morning':
          popupContent = `
            <!-- Popup content for morning image -->
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sweet Potato Bible</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: lightgoldenrodyellow;
                        padding: 20px;
                    }
            
            
                    .popup {
                        max-width: 90%;
                        margin: 0 auto;
                        background-color: #f9f9f9;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }
            
            
                    h2 {
                        color: #333;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
            
            
                    p {
                        color: #666;
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 15px;
                    }
            
            
                    @media screen and (max-width: 600px) {
                        .popup {
                            max-width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="popup">
                <h2>Good Morning!</h2>
                    <h2>Sweet Potato:</h2>
                    <p>Everyone should know how to make sweet potato. You can microwave it, bake it, even chop it up for a hash! 
                    Sweet potatoes are super healthy as they are a complex carbohydrate, providing you with both energy and fiber. There are many varieties of sweet potato, all of them are tasty.
                     My favorite kind are Japanese Murasaki Sweet Potatoes. These potatoes are incredibly sweet, semi-dry, and have a chestnut, warming aroma. I love microwave steaming these sweet potatoes (remember to poke holes in your potato before microwaving so it doesn't explode!!!) and putting cinnamon and yogurt on top. This makes for a delicious breakfast that is filling.</p>
                </div>
            </body>
            </html>
          `;
          break;
        case 'lunchtime':
          popupContent = `
            <!-- Popup content for lunch image -->
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Soondobu Bible</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      background-color: lightskyblue;
                      padding: 20px;
                  }
            
            
                  .popup {
                      max-width: 90%;
                      margin: 0 auto;
                      background-color: #f9f9f9;
                      border-radius: 10px;
                      padding: 20px;
                      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  }
            
            
                  h2 {
                      color: #333;
                      font-size: 24px;
                      margin-bottom: 10px;
                  }
            
            
                  p {
                      color: #666;
                      font-size: 16px;
                      line-height: 1.5;
                      margin-bottom: 15px;
                  }
            
            
                  @media screen and (max-width: 600px) {
                      .popup {
                          max-width: 100%;
                      }
                  }
              </style>
            </head>
            <body>
              <div class="popup">
              <h2>Lunchtime!</h2>
                  <h2>Soondobu:</h2>
                  <p>Soondobu is actually surprisingly easy to make and customize based on what leftover produce you have in your fridge! A donabe is one of the best investments you can make in terms of dishware. You don't need a super expensive one, just a basic black one for one person will do. For Soondobu, all you need to do is mince some garlic and ginger (if you have it), toss it in the donabe with oil and saute til aromatic, then put in any other herbs/ailiums of your choosing, and put your gochujang, sauce of your choosing (I love the Japanese bonito flake infused soy), and cook til the soy has caramelized and burned a little. Then add water or broth and your tofu, veggies, seafood, meat of choice. Boil it for as long as you want and serve up with a drizzle of sesame and a razzle dazzle of green onion. It's super easy to whip up and delicious to boot!</p>
              </div>
            </body>
            </html>
          `;
          break;
        case 'dinnertime':
          popupContent = `
            <!-- Popup content for dinner image -->
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Spaghetti Bible</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      background-color: midnightblue;
                      padding: 20px;
                  }
            
            
                  .popup {
                      max-width: 90%;
                      margin: 0 auto;
                      background-color: #f9f9f9;
                      border-radius: 10px;
                      padding: 20px;
                      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  }
            
            
                  h2 {
                      color: #333;
                      font-size: 24px;
                      margin-bottom: 10px;
                  }
            
            
                  p {
                      color: #666;
                      font-size: 16px;
                      line-height: 1.5;
                      margin-bottom: 15px;
                  }
            
            
                  @media screen and (max-width: 600px) {
                      .popup {
                          max-width: 100%;
                      }
                  }
              </style>
            </head>
            <body>
              <div class="popup">
              <h2>Dinnertime!</h2>
                  <h2>Spaghetti:</h2>
                  <p>Spaghetti is so good and so easy. You will reach a day where you don't know WHAT sounds good, so you reach for the emergency pantry spaghetti and jarred sauce that seems to ALWAYS be there. This is good and delicious. Pretty hard to fuck up as well. All you really need to do is boil your noodles according to the package, and heat up your sauce with some garlic if you're feeling real fancy. Maybe toss in a couple frozen meatballs too. If you want to make from scratch, spaghetti can be upped tremendously! The key to a good spaghetti is time. You need to let the flavors of the sauces come together, and no quality of ingredient will top a long simmering sauce.</p>
              </div>
            </body>
            </html>
          `;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  // Open a new popup window with the content
  const popupWindow = window.open('', 'Popup', 'width=400,height=300');
  popupWindow.document.body.innerHTML = popupContent;
}


document.querySelectorAll('.image').forEach(item => {
  // Remove individual positioning styles
  // Set initial positions for the images
  const initialPositions = {
    food1: {},
    food2: {}
  };

  // Add click event listener to each image
  item.addEventListener('click', handleImageClick);
});


// Change images based on time of day
function updateTime() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 12) {
    timeOfDay = 'morning';
    document.body.style.backgroundColor = 'lightgoldenrodyellow'; // Set morning background color
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = 'lunchtime';
    document.body.style.backgroundColor = 'lightskyblue'; // Set lunchtime background color
  } else {
    timeOfDay = 'dinnertime';
    document.body.style.backgroundColor = 'midnightblue'; // Set dinnertime background color
  }

  changeImages(timeOfDay);
}

// Call updateTime function every minute
setInterval(updateTime, 60000);

// Call updateTime function on page load
updateTime();
