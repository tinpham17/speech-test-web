import { atom } from "recoil"
import { Account } from "types/account"
import { Lesson } from "types/lesson"

const accountState = atom<Account>({
  key: "accountState",
  default: {
    id: "account-01",
    name: "Jenny",
    avatar: "https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg"
  }
})

const lessonsState = atom<Lesson[]>({
  key: "lessonsState",
  default: []
})

export {
  accountState,
  lessonsState
}
