let extradestination=[
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/13879959/1_mob_thumbnail.jpeg",
        name:"A stunning Vacation Hme in Candolim",
        location:"Candolim,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/15323035/highland_1_mob_thumbnail.jpeg",
        name:"1 Double A/C Bedroom with Bath",
        location:"Mashobra, Himachal Pradesh, India"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/22911732/30637_398705468650_5273661_n_mob_thumbnail.jpeg",
        name:"Beachside Romantic Portuese Villa at Anjun Beach",
        location:"Candolim,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/29784314/inside-6-1600x1200_mob_thumbnail.jpeg",
        name:"Holiday Home",
        location:"Candolim,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/50034746/a5_mob_thumbnail.jpeg",
        name:"Clean and beautiful bungalow ideally located near alibag",
        location:"Alibag,Maharastra,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/28334115/highland-restaurant_mob_thumbnail.jpeg",
        name:"Two bedroom bangalow",
        location:"Alibag,Maharastra,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/87931650/f20734fbf23b11e888730a8e1b1ce4da_mob_thumbnail.jpeg",
        name:"3 Bedroom Bunglow at Villa Venus in Candolim",
        location:"Candolim,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/41150437/large-1_mob_thumbnail.jpeg",
        name:"Luxury Apartment for Rent on Daily Basis",
        location:"Candolim,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/23935587/2cd598c838a811ec8f4f0a5f3ca25ae5_mob_thumbnail.jpeg",
        name:"Luxury Villa with Swimming pool",
        location:"calangute,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/14001111/CV%2014_mob_thumbnail.jpeg",
        name:"4 BHK villa with private pool",
        location:"Sinquerim,Goa,INDIA"
    },
    {
        link:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/35749433/18_mob_thumbnail.jpeg",
        name:"Cottage Located in the Charming South Goan Village",
        location:"Salcete,Goa,INDIA"
    },
   
]

dispaly(extradestination)

function dispaly(extradestination){
    extradestination.forEach(function(ele){
        let maindiv=document.createElement("div")
        maindiv.setAttribute("id","maindiv")
        let div=document.createElement("div")
        div.setAttribute("id","div")
        div.onclick = () => {
         
           
            window.location.href = "buy.html";
          };
      
        let img=document.createElement("img")
        img.src=ele.link
        let location=document.createElement("p")
        location.innerText=ele.location
        let name=document.createElement("P")
        name.innerText=ele.name
        name.setAttribute("id","name")
        maindiv.append(div)
        div.append(img,name,location)
        document.getElementById("container").append(maindiv)
    })
}
