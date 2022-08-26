let extradestination=[
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
        name:"Taj Mahal",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg",
        name:"The Holy City of Varanasi",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg",
        name:"Golden Temple",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-jaisalmer.jpg",
        name:"Jaisalmer",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-red-fort.jpg",
        name:"Red Forth",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-gateway-india.jpg",
        name:"The Gateway of India",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-mecca-masjid.jpg",
        name:"Mecca Masjid",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-amer-fort.jpg",
        name:"Amer Fort",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/08/india-top-attractions-goa-beaches.jpg",
        name:"Goa",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-periyar-national-park-wildlife-sanctuary.jpg",
        name:"Periyar National Park ",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-agra-fort.jpg",
        name:"Agra Fort",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-ellora-caves.jpg",
        name:"Agra Fort",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-agra-fort.jpg",
        name:"The Ellora Caves",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-mehrangarh-fort.jpg",
        name:"Mehrangarh Fort",
    },
    {
        link:"https://www.planetware.com/wpimages/2021/10/india-top-attractions-the-ganges-river-varanasi.jpg",
        name:"Varanasi",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg",
        name:"Mysore Palace",
    },
    {
        link:"https://www.planetware.com/photos-large/IND/india-top-attractions-mahabodhi-temple.jpg",
        name:"Mahabodhi Temple",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg",
        name:"Gadi Sagar Temple",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rishikesh.jpg",
        name:"Rishikesh",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kerala.jpg",
        name:"Houseboat in Kerala",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ajanta-ellora-caves.jpg",
        name:"Kailasa Temple",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-darjeeling.jpg",
        name:"Darjeeling",
    },
    {
        link:"https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg",
        name:"The Victoria Memorial",
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
         
           
            window.location.href = "extraend.html";
          };
        let img=document.createElement("img")
        img.src=ele.link
        let name=document.createElement("P")
        name.innerText=ele.name
        name.setAttribute("id","name")
        maindiv.append(div)
        div.append(img,name)
        document.getElementById("container").append(maindiv)
    })
}


