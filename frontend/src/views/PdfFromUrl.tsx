import { useContext } from 'react';
import { Button, CloseButton, Container, Flex, FormLabel, Input, InputGroup, InputRightElement, Spinner } from "@chakra-ui/react";
import { AppContext } from '../contexts/App.context';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { defaultUrl } from '../constants/default-url';
import HeroInternalView from '../components/Layout/HeroInternalView';
import InputValidation from '../components/Forms/InputValidation';
import { clearFormikFields } from '../utils/clear-formik-fields';


export default function PdfFromUrl() {

  const { loading, setLoading } = useContext(AppContext)

  const formik = useFormik({
    initialValues: {
      url: defaultUrl,
    },
    validationSchema: Yup.object({
      url: Yup.string()
        .url("Must be a valid URL.")
        .required("URL is a required field."),
    }),
    onSubmit: (values) => {
      setLoading(true);
      alert(JSON.stringify(values))
      setLoading(false);
    }
  })

  return(
    <Container centerContent>
      <HeroInternalView
        title={'Convert URL to PDF Document'}
        text={'Convert web pages with URL to PDF documents with gracefully.'}
      />
      <Flex justifyContent={"center"} direction={"row"} marginTop={12} w={1200} gap={12}>
        <form onSubmit={formik.handleSubmit}>
          <Flex flexDirection={"column"}>
            <FormLabel htmlFor='url'>URL Address</FormLabel>
            <InputGroup>
              <Input
                id='url'
                name='url'
                type='text'
                w={1000}
                size="lg"
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              {formik.values.url.length > 0 && (
                <InputRightElement>
                  <CloseButton
                    marginTop={"8px"}
                    onClick={() => clearFormikFields({
                      formik,
                      fields: { url: "" }
                    })}
                  />
                </InputRightElement>
              )}
            </InputGroup>
            <InputValidation error={formik.errors.url} touched={formik.touched.url} />
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
          </Flex>
        </form>
      </Flex>
    </Container>
  )
}
