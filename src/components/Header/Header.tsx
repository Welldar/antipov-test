export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <button>Выход</button>
      {children}
    </header>
  )
}
