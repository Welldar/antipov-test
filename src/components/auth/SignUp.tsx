import { useDispatch } from 'react-redux'
import { signIn } from './signUpSlice'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, PasswordInput } from '../Input/Input'

export type FormData = {
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
      <form
        className="mx-auto my-4 flex max-w-[500px] flex-col gap-4 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl">Регистрация</h2>
        <Input name="name" labelTxt="Имя" placeholder="Артур" />
        <Input
          name="email"
          labelTxt="Электронная почта"
          placeholder="example@mail.ru"
          rules={{
            required: 'Необходимо указать email',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Некорректный email',
            },
          }}
        />
        <PasswordInput
          name="password"
          labelTxt="Пароль"
          placeholder="******"
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
        <PasswordInput
          name="confirmPassword"
          labelTxt="Подтвердите пароль"
          placeholder="******"
          type="password"
          rules={{
            validate: (value) => {
              if (getValues('password') != value) {
                return 'Пароли не совпадают'
              }
            },
          }}
        />
        <button
          className="mt-2 rounded-lg bg-violet-900 px-3 py-2 text-white"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
    </FormProvider>
  )
}
