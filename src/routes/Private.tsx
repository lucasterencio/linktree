import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
        if(user){
            const userData = {
                uid: user.uid,
                email: user.email
            }

            localStorage.setItem("@reactlinks", JSON.stringify(userData))

            setLoading(false)
            setSigned(true)
        } else{
            setLoading(false)
            setSigned(false)
        }

        //função de clean up, ou seja, quando o componente que esta usando essa private sair, nao existir mais, não é mais necessário o monitoramento do "onAuthStateChanged"
        return () =>{
            unsub()
        }


    })
  }, []);


  if(loading) return <div></div>

  if(!signed){
    return <Navigate to="/login" />
  }



  return children;
}
