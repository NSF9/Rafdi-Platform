import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { EmptyState } from '../../components/ui/EmptyState'
import { InputField, inputFieldBaseClassName, inputFieldLabelClassName } from '../../components/ui/InputField'
import { appRoutes } from '../../constants/routes'
import { ownerWarehouses } from '../../data/ownerMockData'

function getInitialFormValues(warehouse) {
  return {
    name: warehouse?.name || '',
    city: warehouse?.city || '',
    sizeSqm: warehouse?.sizeSqm?.toString() || '',
    monthlyRateSar: warehouse?.monthlyRateSar?.toString() || '',
    imageUrl: '',
    description: '',
  }
}

export default function OwnerWarehouseFormPage() {
  const { warehouseId } = useParams()
  const warehouse = ownerWarehouses.find((item) => item.id === warehouseId)
  const isEditing = Boolean(warehouseId)
  const [formValues, setFormValues] = useState(() => getInitialFormValues(warehouse))
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
    setSaveMessage(isEditing ? 'تم تحديث بيانات المستودع محليًا.' : 'تم تجهيز المستودع الجديد محليًا.')
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/35 px-4 py-8 backdrop-blur-sm">
      <Link to={appRoutes.owner.warehouses} aria-label="إغلاق نافذة النموذج" className="absolute inset-0 block" />

      <div className="relative z-10 w-full max-w-3xl rounded-[2.5rem] bg-white p-8 shadow-panel md:p-10">
        {isEditing && !warehouse ? (
          <EmptyState title="المستودع غير موجود" description="تعذر العثور على المستودع المطلوب ضمن البيانات التجريبية الحالية." />
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-rafdi-light">
                  {isEditing ? 'Edit Warehouse' : 'New Warehouse'}
                </p>
                <h2 className="text-3xl font-bold text-rafdi-dark">{isEditing ? 'تعديل بيانات المستودع' : 'إضافة مستودع جديد'}</h2>
              </div>
              <Button as={Link} to={appRoutes.owner.warehouses} variant="secondary" className="px-4 py-2 text-xs">
                إغلاق
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <InputField label="اسم المستودع" name="name" value={formValues.name} onChange={handleFieldChange} />
                </div>
                <InputField label="الموقع" name="city" value={formValues.city} onChange={handleFieldChange} />
                <InputField
                  label="المساحة (م2)"
                  name="sizeSqm"
                  inputMode="numeric"
                  dir="ltr"
                  value={formValues.sizeSqm}
                  onChange={handleFieldChange}
                />
                <InputField
                  label="السعر/الشهر"
                  name="monthlyRateSar"
                  inputMode="numeric"
                  dir="ltr"
                  value={formValues.monthlyRateSar}
                  onChange={handleFieldChange}
                />
                <div className="md:col-span-2">
                  <InputField label="رابط الصورة" name="imageUrl" dir="ltr" value={formValues.imageUrl} onChange={handleFieldChange} />
                </div>
                <label className="block md:col-span-2">
                  <span className={inputFieldLabelClassName}>الوصف</span>
                  <textarea
                    name="description"
                    rows="5"
                    value={formValues.description}
                    onChange={handleFieldChange}
                    className={`${inputFieldBaseClassName} resize-none px-4 py-3`}
                  />
                </label>
              </div>

              <p className="text-sm text-rafdi-success" aria-live="polite">
                {saveMessage}
              </p>

              <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-start">
                <Button as={Link} to={appRoutes.owner.warehouses} variant="secondary" className="min-w-32">
                  إلغاء
                </Button>
                <Button type="submit" className="min-w-40">
                  {isEditing ? 'حفظ التعديلات' : 'حفظ المستودع'}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
