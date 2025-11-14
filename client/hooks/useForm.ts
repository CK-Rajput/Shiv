import { useState, useCallback } from "react";

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  [key: string]: string | number | boolean;
}

export function useForm<T extends FormData>(
  initialValues: T,
  onSubmit: (values: T) => void | Promise<void>,
  validate?: (values: T) => FormErrors
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
      setValues((prev) => ({ ...prev, [name]: newValue }));

      if (validate) {
        const fieldErrors = validate({ ...values, [name]: newValue });
        setErrors(fieldErrors);
      }
    },
    [values, validate]
  );

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      if (validate) {
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
          setIsSubmitting(false);
          return;
        }
      }

      try {
        await onSubmit(values);
        setValues(initialValues);
        setTouched({});
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, onSubmit, initialValues]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue: (field: string, value: any) =>
      setValues((prev) => ({ ...prev, [field]: value })),
  };
}
