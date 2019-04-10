import { Message } from "./Message";
// import { User } from "./User";

export interface Recipient {
  userId: string
  message?: Message;
  receivedAt?: Date;
  readAt?: Date;
}

export default Recipient;
