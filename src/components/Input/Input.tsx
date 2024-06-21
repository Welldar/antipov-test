import { FormData } from '../SignUp/SignUp'
import { useState } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { OpenedEye, ClosedEye } from '../Icons/Eye'

type InputProps = UseControllerProps<FormData> & {
  labelTxt: string
  placeholder: string
  type?: string
  children?: React.ReactNode
}
export function Input({
  name,
  labelTxt,
  placeholder,
  type = 'text',
  rules,
  children,
}: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, defaultValue: '' })

  return (
    <label htmlFor={name}>
      <span className="block">{labelTxt}</span>
      <div
        className={`mb-1 mt-2 flex gap-2 rounded-lg border-none bg-gray-50 py-3 pl-4 pr-2 text-sm ring-red-500 ${error && 'ring-1'}`}
      >
        <input
          className="grow bg-inherit text-gray-600 outline-none autofill:shadow-[0_0_0_1000px_rgb(249,250,251)_inset]"
          id={name}
          type={type}
          placeholder={placeholder}
          {...field}
        />
        {children}
      </div>
      <span className="block min-h-[1.5em] text-[10px] text-red-500">
        {error?.message}
      </span>
    </label>
  )
}
export function PasswordInput(props: InputProps) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Input {...props} type={isOpened ? 'text' : 'password'}>
      <div
        onClick={(e) => {
          e.preventDefault()
          setIsOpened(!isOpened)
        }}
      >
        {isOpened ? <OpenedEye /> : <ClosedEye />}
      </div>
    </Input>
  )
}
