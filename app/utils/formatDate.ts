import { format } from '@formkit/tempo'

type Style = 'full' | 'long' | 'medium' | 'short'
export default function (date?: null | Date, dateStyle: Style = 'long', timeStyle?: Style) {
  if (!date) {
    return 'N/A'
  }

  return format(date, {
    date: dateStyle,
    time: timeStyle
  })
}
