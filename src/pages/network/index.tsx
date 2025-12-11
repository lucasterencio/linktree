import { useEffect, useState, type FormEvent } from "react"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebaseConnection"


export const NetWork = () => {

  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")


  useEffect(() => {
    function loadLinks(){
      //                 con collection  doc
      const docRef = doc(db, "social", "link")

      getDoc(docRef)
      .then((snapshot) => {
        if(snapshot.data() !== undefined){
          setFacebook(snapshot.data()?.facebook)
          setInstagram(snapshot.data()?.instagram)
          setYoutube(snapshot.data()?.youtube)
        }
      })
      .catch(err =>{
        console.log("Erro ao buscar doc" + err)
      })
    }

    loadLinks()
  }, [])


  function handleRegister(e: FormEvent){
    e.preventDefault()
    //no setDoc, é escolhido o nome do doc, diferente do addDoc que gera automatico um
    //se eu escolher fazer um setDoc novamente, entao ele funciona como update, ele nao vai gerar um novo dado. Vai substituir os que ja estam la
    setDoc(doc(db, "social", "link"), {
      facebook,
      instagram,
      youtube
    })
    .then(() =>{
      console.log("Cadastrados com sucesso")
      setFacebook("")
      setInstagram("")
      setYoutube("")
    })
    .catch((err) =>{
      console.log("ERRO ao salvar ", err)
    })

  }


  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
        <Input 
        placeholder="Digite a url do facebook..."
        type="url"
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
        />


        <label className="text-white font-medium mt-2 mb-2">Link do instagram</label>
        <Input 
        placeholder="Digite a url do instagram..."
        type="url"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        />


        <label className="text-white font-medium mt-2 mb-2">Link do youtube</label>
        <Input 
        placeholder="Digite a url do youtube..."
        type="url"
        value={youtube}
        onChange={(e) => setYoutube(e.target.value)}
        />

        <button type="submit" className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium">
          Salvar links
        </button>
      </form>
    </div>
  )
}
