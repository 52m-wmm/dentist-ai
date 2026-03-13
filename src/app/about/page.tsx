import React from 'react'
import { SignUpButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

function HomePage() {
  return (
    <div>
      <h1>
          Welcome to DentistAI
      </h1>
      <SignUpButton></SignUpButton>
      </div>
  )
}

export default HomePage