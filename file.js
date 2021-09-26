console.log("hello world");



//array of objects contains info of candidate
const data=[
    {
        name: 'Hrishikesh Gaikwad',
        age: 21,
        city: 'pune',
        language:'Javascript',
        framework:'ReactJS',
        image:'https://randomuser.me/api/portraits/thumb/men/50.jpg'
    },
    
    {
        name: 'Aniket Gat',
        age: 18,
        city: 'Punjab',
        language:'Java',
        framework:'Spring boots',
        image:'https://randomuser.me/api/portraits/thumb/men/51.jpg'
    },

    {
        name: 'Saurabh Bhoi',
        age: 20,
        city: 'Jammu-Kashmir',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/thumb/men/54.jpg'
    },

    {
        name: 'Tanvi Gholap',
        age: 22,
        city: 'Madhya pradesh',
        language:'Python',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    },

    {
        name: 'Rahul Giri',
        age: 25,
        city: 'Uttarakhand',
        language:'C++',
        framework:'Flutter',
        image:'https://randomuser.me/api/portraits/thumb/men/47.jpg'
    }
]



//CV iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length ?
            {values:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}


const candidates = cvIterator(data);
nextCV();
//Button listner for next button

const next=document.getElementById('next');
next.addEventListener('click',nextCV);



function nextCV(){

    const currentCandidates=candidates.next().values;
    let images=document.getElementById('image');
    let profile=document.getElementById('profile');

    if(currentCandidates!=undefined)
    {

    image.innerHTML=`<img src='${currentCandidates.image}'>`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidates.name}</li>
    <li class="list-group-item">${currentCandidates.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidates.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidates.language}</li>
    <li class="list-group-item">Uses ${currentCandidates.framework} framework</li>
  </ul>`;
}
else{
    alert('end of applications');
    window.location.reload();
}

}