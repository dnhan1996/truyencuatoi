import axios from 'axios'

const getNovel =  async () => {
    return new Promise((resolve, reject) => {
        axios
          .get("https://db-truyencv.herokuapp.com/novels")
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
      .get("https://db-truyencv.herokuapp.com/imgLabel")
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
         .get("https://db-truyencv.herokuapp.com/chap")
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
       .patch(`https://db-truyencv.herokuapp.com/${id}`, data)
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