
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = "Rizzo"
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let dogDescription = document.createElement("h3")
dogDescription.setAttribute('class','dog-descrption')
dogDescription.textContent = "Description:"
content.append(dogDescription)

let dogParagraph = document.createElement ("p")
dogParagraph.setAttribute ('class','Paragraph')
dogParagraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals"
content.append (dogParagraph)

let feedingtimmeheader = document.createElement ('h3')
feedingtimmeheader.textContent = "Feeding times"
content.append(feedingtimmeheader)