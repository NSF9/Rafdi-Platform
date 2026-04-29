import { statusTones, statusValues } from '../constants/status'

const statusToneMap = {
  [statusValues.active]: statusTones.success,
  [statusValues.paid]: statusTones.success,
  [statusValues.pendingReview]: statusTones.warning,
  [statusValues.suspended]: statusTones.error,
  [statusValues.inactive]: statusTones.neutral,
}

const statusTextColorMap = {
  [statusTones.success]: 'text-rafdi-success',
  [statusTones.warning]: 'text-rafdi-warning',
  [statusTones.error]: 'text-rafdi-error',
  [statusTones.neutral]: 'text-slate-500',
}

export function getStatusTone(status) {
  return statusToneMap[status] || statusTones.neutral
}

export function getStatusTextColor(status) {
  return statusTextColorMap[getStatusTone(status)]
}
