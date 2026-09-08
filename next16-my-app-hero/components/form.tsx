"use client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  Separator,
  TextArea,
  TextField,
} from "@heroui/react";

const shell =
  "rounded-xl border border-border/70 bg-linear-to-b from-neutral-50/90 to-white p-4 ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900 dark:ring-white/10";

const field =
  "rounded-xl border border-border/80 bg-surface shadow-sm ring-1 ring-black/5 transition-[box-shadow,border-color] focus-visible:ring-2 focus-visible:ring-neutral-400/25 dark:ring-white/10 dark:focus-visible:ring-neutral-500/30";

export function CustomStyles() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Fieldset className={shell}>
        <Fieldset.Legend className="font-medium text-neutral-800 dark:text-neutral-100">
          اطلاعات شخصی
        </Fieldset.Legend>
        <Description className="text-neutral-600 dark:text-neutral-400">
          به روز رسانی اطلاعات شخصی.
        </Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "باید حداقل 3 حرف باشد";
              }

              return null;
            }}
          >
            <Label>نام</Label>
            <Input className={field} placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>رایانامه</Label>
            <Input className={field} placeholder="john@example.com" />
            <FieldError>رایانامه صحیح وارد کنید</FieldError>
          </TextField>
          <TextField
            isRequired
            name="bio"
            validate={(value) => {
              if (value.length < 10) {
                return "باید بیش از 10 حرف باشد";
              }

              return null;
            }}
          >
            <Label>سابقه</Label>
            <TextArea className={field} placeholder="در باره خودتان اینجا بنویسید..." />
            <Description>حداقل در 10 حرف سابقه خود را بیان کنید</Description>
            <FieldError />
          </TextField>
          <TextField isRequired name="password" type="password">
            <Label>گذرواژه</Label>
            <Input className={field} />
            <FieldError>گذرواژه صحیح وارد کنید</FieldError>
          </TextField>
        </FieldGroup>
        <Separator />
        <div className="flex flex-col gap-4">
          <Label>طرح اشتراک</Label>
          <RadioGroup defaultValue="pro" name="plan-orientation" orientation="horizontal">
            <Radio value="starter">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                آغازین
              </Radio.Content>
              <Description>برای پروژه های ابتدایی</Description>
            </Radio>
            <Radio value="pro">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                پیشرفته
              </Radio.Content>
              <Description>گزارش پیشرفته</Description>
            </Radio>
            <Radio value="teams">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                گروهی
              </Radio.Content>
              <Description>تا 10 نفر تیمی</Description>
            </Radio>
          </RadioGroup>
        </div>
        <Separator />

        <Fieldset.Actions>
          <Button type="submit">
            ذخیره
          </Button>
          <Button type="reset" variant="secondary">
            انصراف
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}