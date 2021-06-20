import { FC } from 'react'

export interface InputProps {
  name: string
  label: string
  value: string
  onChangeText(value: string): void
  placeholder?: string
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>

      <input
        type="text"
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChangeText(e.target.value)}
      />
    </div>
  )
}

export default Input
