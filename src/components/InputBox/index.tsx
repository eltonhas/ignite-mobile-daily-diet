import React from 'react'
import { Container, ContainerInputBoxStyle, Input, Label } from './styles'

interface InputBoxProps {
  label: string
  type?: ContainerInputBoxStyle
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function InputBox({
  label,
  type = 'COLUMN',
  value,
  setValue,
}: InputBoxProps) {
  return (
    <Container type={type}>
      <Label>{label}</Label>
      <Input value={value} onChangeText={setValue} />
    </Container>
  )
}
