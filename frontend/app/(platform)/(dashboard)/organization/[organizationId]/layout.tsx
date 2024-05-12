import React from 'react'
import OrgControl from './_components/org-control'

type Props = {}

const OrganizationIdLayout = ({children}:{children: React.ReactNode} ) => {
  return (
    <>
      <OrgControl/>
      {children}
      </>
  )
}

export default OrganizationIdLayout