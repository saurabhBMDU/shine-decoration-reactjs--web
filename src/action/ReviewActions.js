import axios from "axios";
import { API_URL } from "../service/api"

export const sendReview = async(productId,form)=>{
        const token = localStorage.getItem('token')
        if(!token){
            console.log('please login');
            return
        }
    
       try {
            const response = await fetch(`${API_URL}/mobileApi/review/add-review/${productId}`,{
                method:'POST',
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(form)
            })
               if( response.status === 200){
                const data = await response.json();
                console.log(data);
                return true
               }else{
                console.log(response)
                return false
               }
       } catch (error) {
        console.log(error)
        
       }

  

}