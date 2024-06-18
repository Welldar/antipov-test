import { useDispatch } from 'react-redux'
import { signIn } from './signUpSlice'
import {
  Control,
  FieldValues,
  FormProvider,
  RegisterOptions,
  UseControllerProps,
  UseFormRegisterReturn,
  useController,
  useForm,
} from 'react-hook-form'

type FormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const dispatch = useDispatch()
  const methods = useForm<FormData>({
    mode: 'all',
  })
  const { trigger, handleSubmit, getValues, getFieldState } = methods

  const onSubmit = (data: FormData) =>
    dispatch(signIn({ email: data.email, password: data.password }))

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" labelTxt="Имя" />
        <Input
          name="email"
          labelTxt="email"
          rules={{
            required: 'Необходимо указать email',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Некорректный email',
            },
          }}
        />
        <Input
          name="password"
          labelTxt="Пароль"
          type="password"
          rules={{
            required: 'Необходимо указать пароль',
            minLength: { value: 6, message: 'Минимальная длина 6 символов' },
            onChange: () => {
              getFieldState('confirmPassword').isDirty &&
                trigger('confirmPassword')
            },
          }}
        />
        <Input
          name="confirmPassword"
          labelTxt="Подтвердите пароль"
          type="password"
          rules={{
            validate: (value) => {
              if (getValues('password') != value) {
                return 'Пароли не совпадают'
              }
            },
          }}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </FormProvider>
  )
}

function Input({
  name,
  labelTxt,
  type = 'text',
  rules,
}: UseControllerProps<FormData> & { labelTxt: string; type?: string }) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, defaultValue: '' })

  return (
    <label htmlFor={name}>
      <span>{labelTxt}</span>
      <input id={name} type={type} {...field} />
      <span>{error?.message}</span>
    </label>
  )
}
