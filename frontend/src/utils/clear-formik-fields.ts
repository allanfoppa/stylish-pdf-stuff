
export interface IClearFormikFields {
  formik: any
  fields: object
}

export const clearFormikFields = ({
  formik,
  fields
}: IClearFormikFields) => formik.setValues(fields)
