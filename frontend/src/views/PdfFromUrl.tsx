import { useContext } from 'react';
import { Button, CloseButton, Container, Flex, FormLabel, Input, InputGroup, InputRightElement, Spinner, Text } from "@chakra-ui/react";
import { AppContext } from '../contexts/App.context';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Title from "../components/Typography/Title";
import { defaultUrl } from '../constants/default-url';


export default function PdfFromUrl() {

  const { loading, setLoading } = useContext(AppContext)

  const formik = useFormik({
    initialValues: {
      url: defaultUrl,
    },
    validationSchema: Yup.object({
      url: Yup.string()
        .url()
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
      <Flex direction={"column"} marginTop={12} textAlign={"center"}>
        <Title text={"Convert URL to PDF Document"} />
        <Text>Convert web pages with URL to PDF documents with gracefully.</Text>
      </Flex>
      <Flex justifyContent={"center"} direction={"row"} marginTop={12} w={1200} gap={12}>
        {/* INPUT */}
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
                    marginTop={"8px"} onClick={() => {
                      formik.setValues({
                        url: "",
                      })
                    }}
                  />
                </InputRightElement>
              )}
            </InputGroup>
            {formik.errors.url && formik.touched.url ? (
              <Text color={"red.500"} fontSize={"sm"}>{formik.errors.url}</Text>
            ) : null}
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
