import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const copyButton = () => {
  return (
    <div>
      <CopyToClipboard text="Copy" />
    </div>
  )
}

export default copyButton
