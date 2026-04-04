import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'

import Image from 'next/image'
import Modal from 'react-modal'

import { ModalRefType } from '@/types/other-types'
import { ProjectDataType } from '@/types/ProjectTypes'

const ProjectDetailsModal = forwardRef<ModalRefType, any>((_, ref) => {
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
      style={{
        content: {
          backgroundColor: '#151515',
          border: 'none',
          borderRadius: '10px',
          maxWidth: '786px',
          padding: '0px 20px 20px 20px',
          width: '100%',
          margin: '0 auto',
          color: '#ffffff',
          top: '65px',
          bottom: '20px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
        },
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          background: '#151515',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px',
          margin: '-20px -20px 20px -20px',
          borderBottom: '1px solid #ffffff20',
        }}
      >
        <h2>{data?.title}</h2>
        <button
          onClick={handleClose}
          style={{
            height: 40,
            width: 40,
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <i
            className="fa-solid fa-xmark"
            style={{
              color: '#151515',
              fontSize: 20,
            }}
          ></i>
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          aspectRatio: '2/1',
          position: 'relative',
          marginBottom: 20,
          marginTop: 30,
        }}
      >
        <Image src={data?.image} alt={data?.title} fill />
      </div>
      <p style={{ margin: '15px 0px' }}>{data?.description}</p>

      <strong>Contributions:</strong>
      <ul style={{ marginLeft: '25px', marginBottom: '15px' }}>
        {data?.contributions.map((contribution, index) => (
          <li key={index}>{contribution}</li>
        ))}
      </ul>

      <strong>Tech Stack:</strong>
      <ul style={{ marginLeft: '25px' }}>
        {data?.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
        {data?.android && (
          <a
            className="social-icon"
            href={data.android}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-android"></i>
          </a>
        )}
        {data?.ios && (
          <a
            className="social-icon"
            href={data.ios}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-apple"></i>
          </a>
        )}
        {data?.website && (
          <a
            className="social-icon"
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        )}
      </div>
    </Modal>
  )
})

ProjectDetailsModal.displayName = 'ProjectDetailsModal'
export default memo(ProjectDetailsModal)
