import { type PersonalDocuments } from '@/@types'
import { AttachmentIcon } from '@/assets/svgs/attachment'
import { ChevronArrowDown } from '@/assets/svgs/chevron-arrow-down'
import { ChevronArrowUp } from '@/assets/svgs/chevron-arrow-up'
import { DocumentText } from '@/assets/svgs/document-text'
import { PenIcon } from '@/assets/svgs/pen'
import { DownloadFileButton } from '@/components/Buttons/File'
import { CircleBorder } from '@/components/CircleBorder'
import { SingleInfoDisplay } from '@/components/InfoDisplay'
import { ToastMessage } from '@/components/Toast'
import { useToast } from '@/hooks/toast'
import { extract } from '@/utils'
import { documentMappers } from '@/utils/mappers/documents'
import { useState } from 'react'

type Props = {
  data: PersonalDocuments
}

export const DocumentBox = ({ data }: Props): JSX.Element => {
  const mapper = documentMappers[data.documentType]

  const [expand, setExpand] = useState<boolean>(false)
  const { toast, showToast } = useToast()

  const seeMore = (e: any): void => {
    e.stopPropagation()
    setExpand(!expand)
  }
  return (
    <>
      <ToastMessage message={toast.message} type={toast.type} />
      <div className="w-full flex flex-col border gap-7 border-neutral">
        <header className="flex justify-between items-center p-5">
          <div className="flex gap-3">
            <DocumentText classStyles="w-8 h-8 text-twitter-blue-main" />
            <span className="text-lg font-semibold">
              {data.documentType.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center p-2 gap-3">
            <CircleBorder borderColor="neutral" borderHover="twitter-blue-main">
              <PenIcon classStyles="w-6 h-6 text-twitter-blue-main cursor-pointer" />
            </CircleBorder>
            <div onClick={seeMore} className="flex gap-3 mr-3">
              {!expand ? (
                <ChevronArrowDown classStyles="h-6 w-6 cursor-pointer hover:text-twitter-blue-main transition ease-in-out delay-75" />
              ) : (
                <ChevronArrowUp classStyles="h-6 w-6 cursor-pointer hover:text-twitter-blue-main transition ease-in-out delay-75" />
              )}
            </div>
          </div>
        </header>
        {/* Main Content */}
        {expand && (
          <div className="flex flex-row w-full">
            <main className="flex flex-col p-4 gap-4 w-[70%]">
              <span className="text-lg font-semibold place-self-center">
                Informações do Documento
              </span>
              <div className="grid-cols-2 grid w-full place-self-center p-8">
                {extract(data.metadata, mapper).map((v) => (
                  <SingleInfoDisplay
                    key={v.order}
                    label={v.label}
                    info={v.info}
                    width="full"
                  />
                ))}
              </div>
            </main>
            <div className="w-[30%] flex-col flex p-4 gap-6">
              <header className="place-self-center flex gap-2 items-center">
                <span className="text-lg font-semibold">Anexos</span>
                <AttachmentIcon classStyles="w-6 h-6" />
              </header>
              <div className="w-full place-self-center p-6 gap-6 items-center flex flex-col">
                <DownloadFileButton
                  maxClicks={3}
                  file={data}
                  showToast={showToast}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
