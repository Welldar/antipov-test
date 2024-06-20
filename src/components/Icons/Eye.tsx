import closedEye from '../../assets/closed-eye.svg'
import openedEye from '../../assets/opened-eye.svg'

export function ClosedEye() {
  return <img src={closedEye} alt="" />
}

export function OpenedEye() {
  return <img className="w-6" src={openedEye} alt="" />
}
