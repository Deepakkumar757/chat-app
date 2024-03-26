import { type Socket } from 'socket.io-client'

interface TPayload { senderId: number | string, receiverId: string | number, message: string | number }

type TListenerHandler = (socket: Socket | null) => {
  send: (data: TPayload) => void
  receive: (receiver: (arg: TPayload) => void) => void
}

export const ChatEventHandler: TListenerHandler = (socket) => {
  return {
    send (payload: any) {
      console.log(socket)
      socket?.emit('send', payload)
    },
    receive (receiver) {
      if (socket !== null && !socket?.hasListeners('receive')) socket.on('receive', receiver)
    }
  }
}
