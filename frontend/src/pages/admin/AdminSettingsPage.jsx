import { useState } from 'react'
import Button from '../../components/ui/Button'
import { InfoCard } from '../../components/ui/InfoCard'
import { InputField } from '../../components/ui/InputField'
import { PageHeader } from '../../components/ui/PageHeader'
import { adminProfile } from '../../data/adminMockData'

const initialFormValues = {
  companyName: adminProfile.companyName,
  fullName: adminProfile.fullName,
  role: adminProfile.role,
  email: adminProfile.email,
  commercialRegistration: adminProfile.commercialRegistration,
  phone: adminProfile.phone,
}

export default function AdminSettingsPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [savedValues, setSavedValues] = useState(initialFormValues)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [saveMessage, setSaveMessage] = useState('')

  function handleEditToggle() {
    if (isEditing) {
      setFormValues(savedValues)
      setSaveMessage('')
    }

    setIsEditing((value) => !value)
  }

  function handleFieldChange(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSavedValues(formValues)
    setIsEditing(false)
    setSaveMessage('تم حفظ التعديلات محليًا')
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin Profile"
        title="إعدادات المنصة"
        description="إعدادات الشركة والحساب ضمن بطاقة مركزية. يمكن استعراض البيانات فقط أو تفعيل وضع التعديل المحلي بشكل واضح."
      />

      <div className="mx-auto max-w-3xl">
        <InfoCard className="rounded-[2.5rem] p-8 md:p-10">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-rafdi-primary text-5xl font-bold text-white shadow-soft">
            {adminProfile.fullName.slice(0, 1)}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="secondary" className="min-w-40" onClick={handleEditToggle}>
              {isEditing ? 'إلغاء التعديل' : 'تفعيل التعديل المحلي'}
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            {isEditing ? 'وضع تعديل محلي فقط دون حفظ فعلي في هذه المرحلة.' : 'الحقول في وضع القراءة فقط حاليًا.'}
          </p>

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
                  value={isEditing ? formValues.companyName : savedValues.companyName}
                  onChange={handleFieldChange}
                  disabled={!isEditing}
                  className="disabled:cursor-not-allowed disabled:text-rafdi-dark"
                />
              </div>
              <InputField
                label="اسم المشرف"
                name="fullName"
                autoComplete="name"
                value={isEditing ? formValues.fullName : savedValues.fullName}
                onChange={handleFieldChange}
                disabled={!isEditing}
                className="disabled:cursor-not-allowed disabled:text-rafdi-dark"
              />
              <InputField
                label="الدور"
                name="role"
                autoComplete="organization-title"
                value={isEditing ? formValues.role : savedValues.role}
                onChange={handleFieldChange}
                disabled={!isEditing}
                className="disabled:cursor-not-allowed disabled:text-rafdi-dark"
              />
              <InputField
                label="البريد الإلكتروني"
                name="email"
                type="email"
                autoComplete="email"
                value={isEditing ? formValues.email : savedValues.email}
                onChange={handleFieldChange}
                disabled={!isEditing}
                className="disabled:cursor-not-allowed disabled:text-rafdi-dark"
                dir="ltr"
              />
              <InputField
                label="رقم السجل التجاري"
                name="commercialRegistration"
                inputMode="numeric"
                autoComplete="off"
                value={isEditing ? formValues.commercialRegistration : savedValues.commercialRegistration}
                onChange={handleFieldChange}
                disabled={!isEditing}
                className="disabled:cursor-not-allowed disabled:text-rafdi-dark"
                dir="ltr"
              />
              <InputField
                label="رقم الجوال"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={isEditing ? formValues.phone : savedValues.phone}
                onChange={handleFieldChange}
                disabled={!isEditing}
                className="disabled:cursor-not-allowed disabled:text-rafdi-dark"
                dir="ltr"
              />
              <InputField label="آخر مراجعة" value={new Intl.DateTimeFormat('ar-SA', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(adminProfile.lastReviewAt))} disabled className="disabled:cursor-not-allowed disabled:text-rafdi-dark" />
            </div>

            <div className="mt-8">
              <Button type="submit" className="w-full" disabled={!isEditing}>
                حفظ التغييرات
              </Button>
            </div>
          </form>
        </InfoCard>
      </div>
    </div>
  )
}
