import axios from 'axios'

const getNovel =  async () => {
    return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:3000/novels")
          .then((res) => {
            const { data } = res;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    
}

const getLabel = async () => {
  return new Promise((resolve, reject) => {
     axios
      .get("http://localhost:3000/imgLabel")
      .then ((res) => {
         const {data} = res;
         resolve(data);
      })
      .catch((error)=> {
         reject(error);
      });
  });
}

const getChap = async () => {
    return new Promise((resolve,reject)=>{
         axios
         .get("http://localhost:3000/chap")
         .then((res)=>{
            const {data} = res;
            resolve(data);
         })
         .catch((error)=>{
            reject(error)
         })
    })
}


const addCanDy = (id, data) => {
   return new Promise((resolve, reject) => {
     axios
       .patch(`http://localhost:3000/novels/${id}`, data)
       .then((res) => {
         const { data } = res;
         resolve(data);
       })
       .catch((error) => {
         reject(error);
       });
   });
 
 }
 


const  APIServer = {
    getNovel,
    getLabel,
    getChap,
    addCanDy
};


export default APIServer