import { Container, Input, Label } from './styles'

interface MultilineInputBoxProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function MultilineInputBox({ value, setValue }: MultilineInputBoxProps) {
  return (
    <Container>
      <Label>Descrição</Label>
      <Input
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        value={value}
        onChangeText={setValue}
      />
    </Container>
  )
}
