import React,{useEffect,useState} from "react";
import Axios from "axios";
import { getAllPhotos } from "../apis/apis";



const Photos = () => {
const [photoList, setPhotoList] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=> {
     getAllPhotos()
    .then((response)=> {
    let foundPhotos = response.data;
    setPhotoList(foundPhotos);
})
.catch((err) => console.log(err))
.finally(()=> setIsLoading(false));




//  fetch("http://jsonplaceholder.typicode.com/photos", {
//     method: "GET",
//     headers: {},
//  }) 
    
// }
//  .then((response) => response.json())
//  .then((json) => setPhotoList(JSON.parse(json)))
//  .finally(() => setIsLoading(false));
}, []);


if( isLoading){
    return <h4>Loading...</h4>;
}

return(
<div>
    {photoList.map((photo, index) => {
        <div key={index}>
            <img src={photo.url} alt={photo.title} />
        </div>
    })}
</div>
)
}

export default Photos;