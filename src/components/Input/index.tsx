import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

//Com essa tipagem, qualquer atributo de input pode ser passado como props, ou seja, nao precisa ta passando sempre os mesmos

export const Input = (props: InputProps) => {
  return (
    <input 
    type="text" 
    className='border-0 h-9 rounded-md outline-none px-2 mb-3 bg-white'
    {...props} //dessa forma, ja ta aplicando todos os atributos passados como props
    />
  )
}
