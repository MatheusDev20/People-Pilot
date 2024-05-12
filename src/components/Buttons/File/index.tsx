/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { AttachmentIcon } from '@/assets/svgs/attachment'
import { type ToastData } from '@/hooks/toast'
import { extractDocumentName } from '@/utils'
import { type PersonalDocuments } from '@/@types'

type Props = {
  file: PersonalDocuments
  maxClicks: number
  showToast?: (toastData: ToastData) => void
}

export const DownloadFileButton = ({
  file,
  maxClicks,
  showToast,
}: Props): JSX.Element => {
  const [clickCount, setClickCount] = useState(0)
  const fileName = extractDocumentName(file.fileUrl)
  const btnDisabled = clickCount >= maxClicks

  const handleDownload = async (): Promise<void> => {
    if (clickCount >= maxClicks && showToast) {
      showToast({
        duration: 4000,
        message: 'Você atingiu o limite de downloads para este arquivo!',
        type: 'warning',
      })
      return
    }

    setClickCount((prevCount) => prevCount + 1)
    const response = await fetch(file.fileUrl)
    const blob = await response.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <button
      onClick={() => handleDownload()}
      className={`btn-primary btn w-[60%] hover:bg-blue-400 border flex items-center ${
        btnDisabled ? 'cursor-not-allowed' : ''
      }`}
    >
      <AttachmentIcon classStyles="hidden md:block w-5 h-5" />
      <span className="font-bold text-xs md:text-sm">
        {file.documentType.toUpperCase()}
      </span>
    </button>
  )
}
