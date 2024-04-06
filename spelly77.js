// Define image paths for different times of day
const images = {
  morning: ['toast.png'],
  lunchtime: ['curry.png'],
  dinnertime: ['sushi.png']
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
    case 'food':
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
            background-color: #fff;
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
        <p><strong>Bible of toast!</strong></p>
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
          background-color: #fff;
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
      <p><strong>Bible of curry!</strong></p>
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
  <title>Japanese Curry Bible</title>
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
       In general, the basics of sushi are hard to enumerate, so I'll link an article that does it much better than I would! Maruichi is super accessible, making Japanese food like sushi and Japanese curry easy to cook! </p>
      <a href = "https://www.justonecookbook.com/authentic-best-sushi-recipes/"><p><strong>Bible of sushi!</strong></p></a>
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
  // Set initial positions for the images
  const initialPositions = {
    food: { left: '50%', top: '50%' }
    // Add initial positions for other images if needed
  };
  item.style.left = initialPositions[item.id].left;
  item.style.top = initialPositions[item.id].top;

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
