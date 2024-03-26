'use client'
import { type ReactNode, createContext, useState, useEffect } from 'react'
import io, { type Socket } from 'socket.io-client'

interface contextValues {
  socket: Socket | null
  connect: () => void
  disConnect: () => void
}

export const SocketContext = createContext<contextValues>({
  socket: null,
  connect: () => { },
  disConnect: () => { }
})

const Provider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [socket, setSocket] = useState<contextValues['socket']>(null)
  useEffect(() => {
    return () => {
      // disConnect()
    }
  })
  const connect = (): void => {
    try {
      const socket: Socket | null = io('ws://localhost:5000', {
        transports: ['websocket'],
        path: '/api/v1',
        reconnectionAttempts: 5,
        reconnectionDelay: 5000,
        autoConnect: true
      })
      socket.on('connect', () => {
        setSocket(socket)
      })
    } catch (error) { }
  }
  const disConnect = (): void => {
    if (socket?.disconnect != null) socket.disconnect()
    setSocket(null)
  }

  return (
    <SocketContext.Provider value={{ socket, connect, disConnect }}>
      {children}
    </SocketContext.Provider>
  )
}

export default Provider
