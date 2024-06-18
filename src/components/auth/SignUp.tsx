import { useDispatch } from 'react-redux'
import { signIn } from './signUpSlice'
import { UseFormRegisterReturn, useController, useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' })

  const onSubmit = (data: FormData) =>
    dispatch(signIn({ email: data.email, password: data.password }))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelTxt="Имя"
        error={errors.name?.message}
        register={register('name')}
      />
      <Input
        labelTxt="email"
        error={errors.email?.message}
        register={register('email', {
          required: 'Необходимо указать email',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Введите корректный email',
          },
        })}
      />
      <Input
        labelTxt="Пароль"
        type="password"
        error={errors.password?.message}
        register={register('password', {
          required: 'Необходимо указать пароль',
          minLength: { value: 6, message: 'Минимальная длина 6 символов' },
          onChange: () => trigger('confirmPassword'),
        })}
      />
      <Input
        labelTxt="Подтвердите пароль"
        type="password"
        error={errors.confirmPassword?.message}
        register={register('confirmPassword', {
          validate: (value) => {
            if (watch('password') != value) {
              return 'Пароли не совпадают'
            }
          },
        })}
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  )
}

function Input({
  labelTxt,
  type = 'text',
  register,
  error,
}: {
  labelTxt: string
  type?: string
  register: UseFormRegisterReturn
  error: string | undefined
}) {
  // const {fieldState: {error}} = useController({name:'', rules: {}, })

  return (
    <label htmlFor={register.name}>
      <span>{labelTxt}</span>
      <input id={register.name} type={type} {...register} />
      <span>{error}</span>
    </label>
  )
}
