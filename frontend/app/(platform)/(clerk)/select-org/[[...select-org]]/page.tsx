import { OrganizationList } from "@clerk/nextjs";

import React from 'react'

type Props = {}

const CreateOrganizationPage = (props: Props) => {
  return (
    <OrganizationList 
    hidePersonal
    afterSelectOrganizationUrl='/organization/:id'
    afterCreateOrganizationUrl='/organization/:id'
    />
  )
}

export default CreateOrganizationPage
