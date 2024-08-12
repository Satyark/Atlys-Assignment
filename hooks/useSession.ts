
const login =async (name:string) =>{
    try {
        console.log(window);
        
        localStorage.setItem("username",name)
        
        
    } catch (error) {
        console.log(error);
        
    } 
  }

const useSession = () => { 
  return {
    login
  }
}

export default useSession