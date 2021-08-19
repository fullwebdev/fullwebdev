import { Constructor } from "../utils/constructor";
import { WithWordingInterface } from "../utils/with-wording";

export interface SignupFormWording {
  title: string;
  indicatesRequired: string;
  labels: {
    email: string;
    fname: string;
    lname: string;
    lang: string;
    company: string;
    title: string;
  };
  submit: string;
  invalidForm: string;
}

export type WithSignupFormWording = Constructor<
  WithWordingInterface<SignupFormWording>
>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NewsletterViewWording {
  signupForm: SignupFormWording;
}

export type WithNewsletterViewWording = Constructor<
  WithWordingInterface<NewsletterViewWording>
>;
