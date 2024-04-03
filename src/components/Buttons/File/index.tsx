/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { AttachmentIcon } from '../../../assets/svgs/attachment'
import { extractDocumentName } from '../../../utils'

type Props = {
  fileUrl: string
  maxClicks: number
}

export const DownloadFileButton = ({
  fileUrl,
  maxClicks,
}: Props): JSX.Element => {
  const [clickCount, setClickCount] = useState(0)
  const fileName = extractDocumentName(fileUrl)

  const handleDownload = async (): Promise<void> => {
    if (clickCount >= maxClicks) {
      return
    }
    setClickCount((prevCount) => prevCount + 1)
    const response = await fetch(fileUrl)
    const blob = await response.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    console.log(downloadUrl)
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
      disabled={clickCount >= maxClicks}
      className={`btn-primary btn w-[60%] hover:bg-blue-400 border flex items-center justify-center ${
        clickCount >= maxClicks ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <AttachmentIcon classStyles="w-5 h-5" />
      {fileName}
    </button>
  )
}
