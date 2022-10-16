# React Hook Form

Here an example if you want to plug `MuiFileInput` to your form using [React Hook Form](https://react-hook-form.com/).

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { MuiFileInput } from "mui-file-input";
import { Controller, useForm } from "react-hook-form";

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      file: undefined
    }
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="file"
        control={control}
        render={({ field, fieldState }) => (
          <MuiFileInput
            {...field}
            helperText={fieldState.invalid ? "File is invalid" : ""}
            error={fieldState.invalid}
          />
        )}
      />
     <div>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </div>
    </form>
  )
}
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-hook-form-with-mui-tel-input-o530m7?fontsize=14&hidenavigation=1&theme=dark)