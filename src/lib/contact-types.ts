export type ContactFormRequest = {
  interest: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormRequest, string>>;
};
