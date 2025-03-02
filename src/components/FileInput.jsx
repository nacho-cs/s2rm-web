import { useCallback, useState } from "preact/compat";
import { useDropzone } from "react-dropzone";
import { Theme, Box, Text } from "@radix-ui/themes";
import { itemListAtom } from "../util";
import { useAtom } from "jotai";

export function FileInput() {
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [, setItemList] = useAtom(itemListAtom);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    setFileName(file.name);
    reader.onload = e => {
      setItemList(e.target.result);
    };
    reader.onerror = err => {
      setFileError(`Error: ${err}`);
    };
    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": ["csv"],
      "application/csv": ["csv"],
      "application/vnd.ms-excel": ["csv"],
    },
    maxFiles: 1,
  });

  const baseSlate = {
    slate1: "hsl(220, 11%, 9%)",
    slate2: "hsl(220, 11%, 11%)",
    slate3: "hsl(220, 11%, 12%)",
    slate4: "hsl(220, 11%, 13%)",
    slate5: "hsl(220, 11%, 15%)",
    slate6: "hsl(220, 10%, 18%)",
    slate7: "hsl(220, 9%, 24%)",
    slate8: "hsl(220, 9%, 31%)",
    slate9: "hsl(220, 8%, 44%)",
    slate10: "hsl(220, 7%, 54%)",
    slate11: "hsl(220, 7%, 65%)",
    slate12: "hsl(220, 6%, 84%)",
  };

  const activeColor = baseSlate.slate5;
  const defaultColor = baseSlate.slate3;
  const textColor = baseSlate.slate11;

  return (
    <Theme>
      <Box style={{ textAlign: "center" }}>
        <Box
          {...getRootProps()}
          style={{
            padding: "24px",
            borderWidth: "2px",
            borderRadius: "2px",
            borderColor: isDragActive ? activeColor : baseSlate.slate6,
            borderStyle: "dashed",
            backgroundColor: isDragActive ? activeColor : defaultColor,
            color: textColor,
            outline: "none",
            cursor: "pointer",
          }}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text>Drop the file here ...</Text>
          ) : (
            <Text>Drag 'n' drop a CSV file here, or click to select one</Text>
          )}
        </Box>
        {fileName && (
          <Text mt="2">
            Selected file: <b>{fileName}</b>
          </Text>
        )}
        {fileError && (
          <Text color="red" mt="2">
            {fileError}
          </Text>
        )}
      </Box>
    </Theme>
  );
}
