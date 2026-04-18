'use client'
import Image from 'next/image'
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'
import Modal from 'react-modal'

import {
  AppStoreSvg,
  GlobeSvg,
  PlayStoreSvg,
  XSvg,
} from '@/assets/text-svg-icons'
import { ModalRefType } from '@/types/other-types'
import { ProjectDataType } from '@/types/ProjectTypes'

type Props = {
  data?: ProjectDataType
}

const ProjectDetailsModal = forwardRef<ModalRefType, Props>((_, ref) => {
  const [data, setData] = useState<ProjectDataType>()

  const handleClose = useCallback(() => {
    setData(undefined)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (d?: ProjectDataType) => {
        setData(d)
      },
      close: handleClose,
    }),
    [handleClose],
  )

  if (!data) {
    return null
  }

  return (
    <Modal
      isOpen={Boolean(data)}
      onRequestClose={handleClose}
      preventScroll={true}
      ariaHideApp={false}
      style={{
        content: {
          backgroundColor: '#151515',
          border: 'none',
          borderRadius: '18px',
          maxWidth: '786px',
          padding: '0px 16px',
          placeSelf: 'center',
          right: '20px',
          left: '20px',
          overflowY: 'auto',
          maxHeight: '90vh',
          flexGrow: 1,
          color: '#ffffff',
          scrollbarWidth: 'none',
          borderWidth: '1px',
          borderColor: '#ffffff20',
          borderStyle: 'solid',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
        },
      }}
    >
      <div className="pb-5">
        <div
          style={{ position: 'sticky' }}
          className="flex justify-between items-center py-3 px-5 mb-5 border-b border-[#ffffff20]
          mx-[-20px] top-0 bg-[#151515]/30 z-10 backdrop-blur-lg"
        >
          <h2>{data?.title}</h2>
          <button
            onClick={handleClose}
            className="h-10 w-10 rounded-full bg-transparent border border-[#ffffff75] flex items-center justify-center cursor-pointer"
          >
            <XSvg className="w-4 h-4" fill="currentColor" />
          </button>
        </div>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-5 mt-4">
          <Image src={data?.image} alt={data?.title} fill />
        </div>
        <p className="my-4 text-sm text-[#ffffffb3] leading-relaxed">
          {data?.description}
        </p>

        <strong>Contributions:</strong>
        <ul className="ms-4 mb-4 text-sm list-disc">
          {data?.contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>

        <strong>Tech Stack:</strong>
        <ul className="project-tech-stack">
          {data?.techStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </ul>

        <div className="flex gap-4 mt-4">
          {data?.android && (
            <a
              className="link-icon-btn"
              href={data.android}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayStoreSvg className="w-5 h-5" fill="currentColor" />
            </a>
          )}
          {data?.ios && (
            <a
              className="link-icon-btn"
              href={data.ios}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreSvg className="w-5 h-5" fill="currentColor" />
            </a>
          )}
          {data?.website && (
            <a
              className="link-icon-btn"
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeSvg className="w-5 h-5" fill="currentColor" />
            </a>
          )}
        </div>
      </div>
    </Modal>
  )
})

ProjectDetailsModal.displayName = 'ProjectDetailsModal'
export default memo(ProjectDetailsModal)
