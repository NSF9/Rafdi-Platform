import { useState } from 'react'
import Button from '../../components/ui/Button'
import { InfoCard } from '../../components/ui/InfoCard'
import { InputField } from '../../components/ui/InputField'
import { PageHeader } from '../../components/ui/PageHeader'
import { ownerProfile } from '../../data/ownerMockData'

const initialFormValues = {
  companyName: ownerProfile.companyName,
  commercialRegistration: ownerProfile.commercialRegistration,
  email: ownerProfile.email,
}

export default function OwnerProfilePage() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [saveMessage, setSaveMessage] = useState('')

  function handleFieldChange(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSaveMessage('تم تحديث البيانات محليًا.')
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Owner Profile"
        title="إعدادات الحساب"
        description="إدارة معلومات الشركة ضمن نموذج مباشر مع حفظ محلي فقط في هذه المرحلة."
      />

      <div className="mx-auto max-w-3xl">
        <InfoCard className="rounded-[2.5rem] p-8 md:p-10">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-rafdi-primary text-5xl font-bold text-white shadow-soft">
            {ownerProfile.avatarInitial}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">يمكنك تحديث بيانات الحساب مباشرة مع حفظ محلي فقط في هذه المرحلة.</p>

          <p className="mt-2 text-center text-sm text-rafdi-success" aria-live="polite">
            {saveMessage}
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <InputField
                  label="اسم الشركة"
                  name="companyName"
                  autoComplete="organization"
                  value={formValues.companyName}
                  onChange={handleFieldChange}
                />
              </div>
              <InputField
                label="رقم السجل التجاري"
                name="commercialRegistration"
                inputMode="numeric"
                value={formValues.commercialRegistration}
                onChange={handleFieldChange}
                dir="ltr"
              />
              <InputField
                label="البريد الإلكتروني"
                name="email"
                type="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleFieldChange}
                dir="ltr"
              />
              <div className="md:col-span-2">
                <p className="mb-2 block text-sm font-medium text-slate-500">أدوار الحساب</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-rafdi-dark">
                    <span className="font-semibold">صاحب مستودع</span>
                    <input type="checkbox" checked readOnly className="h-5 w-5 accent-rafdi-primary" />
                  </label>
                  <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-400">
                    <span className="font-semibold">تاجر مستأجر</span>
                    <input type="checkbox" checked={false} readOnly className="h-5 w-5 accent-rafdi-primary" />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit" className="w-full">
                تحديث البيانات
              </Button>
            </div>
          </form>
        </InfoCard>
      </div>
    </div>
  )
}
