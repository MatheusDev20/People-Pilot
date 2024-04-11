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

  return (
    <>
      <ToastMessage message={toast.message} type={toast.type} />
      {!expand ? (
        <div className="flex border items-center justify-between border-neutral p-5 relative delay-75">
          <div className="flex items-center gap-3">
            <DocumentText classStyles="w-8 h-8 text-twitter-blue-main" />
            <span className="text-lg font-semibold">
              {data.documentType.toUpperCase()}
            </span>
          </div>
          <div
            onClick={() => {
              setExpand(!expand)
            }}
            className="flex gap-3 mr-3"
          >
            <ChevronArrowDown classStyles="h-6 w-6 cursor-pointer hover:text-twitter-blue-main transition ease-in-out delay-75" />
          </div>
          {/* <!-- Arrow icon using SVG, you can replace it with an icon of your choice --> */}
          {/* {!expand ? (
            <div
              onClick={() => {
                setExpand(!expand)
              }}
              className="absolute arrow-down"
            >
              <ChevronArrowDown classStyles="h-6 w-6 cursor-pointer hover:text-twitter-blue-main transition ease-in-out delay-75" />
            </div>
          ) : (
            <div className="absolute border-red-500 boder arrow-up">
              <ChevronArrowUp classStyles="h-6 w-6 cursor-pointer hover:text-twitter-blue-main transition ease-in-out delay-75" />
            </div>
          )} */}
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col border border-neutral gap-7">
            <header className="flex justify-between items-center p-4">
              <div className="flex gap-3">
                <DocumentText classStyles="w-8 h-8 text-twitter-blue-main" />
                <span className="text-lg font-semibold">
                  {data.documentType.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center p-2 gap-3">
                <CircleBorder
                  borderColor="neutral"
                  borderHover="twitter-blue-main"
                >
                  <PenIcon classStyles="w-6 h-6 text-twitter-blue-main cursor-pointer" />
                </CircleBorder>
                <div
                  onClick={() => {
                    setExpand(!expand)
                  }}
                  className="flex gap-3 mr-3"
                >
                  <ChevronArrowUp classStyles="h-6 w-6 cursor-pointer hover:text-twitter-blue-main transition ease-in-out delay-75" />
                </div>
              </div>
            </header>
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
                    fileUrl={data.fileUrl}
                    showToast={showToast}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
