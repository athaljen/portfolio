import { Activity, ActivityProps, HTMLAttributes } from 'react'
import './tab.css'

const Tab = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`flex flex-column w-full ${props.className || ''}`}
    />
  )
}

const tabListClass =
  'custom-tab-list flex mx-auto mb-6 rounded-full pt-1.5 pb-1 px-1.5 border border-gray-600'

const TabList = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${tabListClass} ${props.className || ''}`} />
  )
}

type TabItemProps = {
  active?: boolean
  activeClass?: string
} & HTMLAttributes<HTMLButtonElement>

const listItemClass =
  'px-3 py-1 text-sm font-medium text-gray-500 hover:text-sky-400 cursor-pointer'
const defaultActive =
  'text-primary custom-tab-active rounded-full text-sm font-medium'

const TabItem = ({ active, activeClass, className, ...rest }: TabItemProps) => {
  return (
    <button
      {...rest}
      className={`${listItemClass} ${className || ''} ${
        active ? activeClass || defaultActive : ''
      }`}
    />
  )
}

type TabContentProps = {
  isVisible: boolean
} & ActivityProps

const TabContent = ({ isVisible, ...rest }: TabContentProps) => {
  return <Activity {...rest} mode={isVisible ? 'visible' : 'hidden'} />
}

export { Tab, TabList, TabItem, TabContent }
