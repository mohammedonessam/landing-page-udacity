
// call all sections that named rooms
const rooms = document.querySelectorAll('section');

/* this function created to =>
=> set links in li 
=> and set li in fragmentdocument 
=> and set fragmentdocument in ul that in html
=> if i add any section will create new link automatically for it
*/
let nwRoom = '';
for(const room of rooms)  {

    // call all navbar in ul list
    let allUl = document.getElementById('navbar__list');
    
    // create fragment document to make the page when loading be very fast
    let fragDoc = document.createDocumentFragment('fragDoc');
    
    // create all li list
    let allLi = document.createElement('li');
    
    // create link that will used in li list
    let allLink = document.createElement('a');

    // make the link in bar of section named like name of datavar
    let nameOFlink = room.getAttribute('data-nav');

    //  create textnode that will add to link menu and will called from datanav
    let textNod = document.createTextNode(nameOFlink);
    
    // set name of link in each link
    allLink.appendChild(textNod);
    
    // this function make the page go to selected room smoothy
    allLink.addEventListener('click', () => {
        room.scrollIntoView({ behavior: 'smooth' });
        })
    
    // make all links in li list
    allLi.appendChild(allLink);

    // put li list in fragment document for make the page so fast 
    fragDoc.appendChild(allLi);
    
    // at least put the fragment document in ul in html
    allUl.appendChild(fragDoc);

    nwRoom += room;
};

/*
this function created for
add name to selected class called activroom that has properities in css file
add name to selected link called activlink that has properities in css file

*/
window.addEventListener('scroll', ()=> {

    rooms.forEach( (rom, index)=> {
   
       const react = rom.getBoundingClientRect(index);
   
       const romnav = rom.getAttribute('data-nav');

        //    The selected room is the one with an area between -10 to 200 
       if (react.top > -10 && react.top < 200){
            rooms.forEach(rom_active => { 
            //   create class in each active room  
            rom_active.classList.remove('active_room');
            console.clear();   
            })
            rom.classList.add('active_room');
            //  print in console the active class
            console.log(`i'm ${romnav} and the active class `);
          
    /*  create class in each active link     */   
    // call the links to creat active link in its
    const allLink = document.querySelectorAll('a');
  
    // Add class named 'active link' 
    allLink.forEach((roomlink)=>{
       if (roomlink.innerText == romnav) {     
            allLink.forEach((roomlink)=>{
                roomlink.classList.remove('active_link');
            })
               roomlink.classList.add('active_link');
                //    print in console the link who is active
               console.log(`i'm the link of ${romnav} and the active link `);

                }
            })
        }
    });
   
});



//  create  button that when pressed  go to the beginning of the page
const mYbtn = document.getElementById('UpTo');

// Create function to hide the up button when the page is at the beginning
window.onscroll = function() {

   if (window.pageYOffset >= 500) {

       mYbtn.style.display = 'block';
       
   }else {
       mYbtn.style.display = 'none';
   } 
}

// Create an function to return to the beginning of the page a little slowly

mYbtn.onclick = function() {

    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    }); 
}