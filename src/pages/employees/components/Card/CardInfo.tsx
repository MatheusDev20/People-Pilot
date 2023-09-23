
import React from 'react'
import fakeAvatar from '../../../../assets/imgs/fake-avatar1.png'

export const CardInfo = (): React.JSX.Element => {
  return (
    <div className="max-w-full flex flex-col p-2 items-center">
      <main className="flex flex-col gap-2">
        <img
          src={fakeAvatar}
          alt="Fake Avatar"
          className="self-center rounded-full w-20 h-20"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Joãozinho da Silva</span>
          <span className="self-center text-sm text-gray-400 font-semibold">
            Frontend Engineer
          </span>
        </div>
      </main>
    </div>
  )
}
