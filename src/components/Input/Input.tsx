import { FormData } from '../auth/SignUp'
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
      <div className="relative">
        <input
          className={`mb-1 mt-2 block w-full rounded-lg border-none bg-gray-50 py-3 pl-4 pr-2 text-sm ring-red-500 ${error && 'ring-1'}`}
          id={name}
          type={type}
          placeholder={placeholder}
          {...field}
        />
        {children}
      </div>
      <span className="block text-[10px] text-red-500">{error?.message}</span>
    </label>
  )
}
function PasswordInput(props: InputProps) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Input type={isOpened ? 'text' : 'password'} {...props}>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="absolute right-0 top-0"
      >
        {isOpened ? <OpenedEye /> : <ClosedEye />}
      </div>
    </Input>
  )
}
