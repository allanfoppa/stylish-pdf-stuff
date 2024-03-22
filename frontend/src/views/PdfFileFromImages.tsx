import { useContext, useState } from 'react';
import { Button, Container, Flex, FormLabel, Input, Spinner } from "@chakra-ui/react";
import { AppContext } from '../contexts/App.context';
import { useFormik } from 'formik';
import * as Yup from "yup";
import HeroInternalView from '../components/Layout/HeroInternalView';
import InputValidation from '../components/Forms/InputValidation';


export default function PdfFileFromImages() {

  const { loading, setLoading } = useContext(AppContext)

  const [, setSelectedFile ] = useState<File | null>(null);

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    validationSchema: Yup.object({
      file: Yup.mixed()
        .required('Please select a JPG file')
        .test(
          'fileType',
          'Invalid file type',
          (value) => value instanceof File && value.type === 'image/jpeg'
        ),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      if (values.file) {
        const formData = new FormData();
        formData.append('file', values.file);

        // const response = await fetch('/api/upload', {
        //   method: 'POST',
        //   body: formData,
        // });

        setLoading(true)
      }
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setSelectedFile(file)
    formik.setFieldValue('file', file)
  }

  return(
    <Container centerContent>
      <HeroInternalView
        title={'Convert JPG image to PDF Document'}
        text={'Convert images to PDF documents with gracefully.'}
      />
      <Flex justifyContent={"center"} direction={"row"} marginTop={12} gap={12}>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel htmlFor="file">Upload JPG File</FormLabel>
          <Input
            id="file"
            name="file"
            type="file"
            size='lg'
            accept="image/jpeg"
            padding={"6px 10px"}
            onChange={handleFileChange}
            onBlur={formik.handleBlur}
          />
          <InputValidation error={formik.errors.file} touched={formik.touched.file} />
          <Button
              width={"100%"}
              marginTop={3}
              type='submit'
            >
            <Flex alignItems={"center"} gap={2}>
              {loading && <Spinner />}
              CONVERT
            </Flex>
            </Button>
        </form>
      </Flex>
    </Container>
  )
}
