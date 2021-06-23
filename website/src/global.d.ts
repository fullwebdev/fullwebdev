export {};

interface CalendlyUTM {
  utmCampaign: string;
  utmSource: string;
  utmMedium: string;
  utmContent: string;
  utmTerm: string;
}

interface CalendlyPrefill {
  name?: string;
  email?: string;
  customAnswers?: Record<string, string>;
}

interface CalendlyWidget {
  url: string;
  prefill?: CalendlyPrefill;
  utm?: CalendlyUTM;
}
interface CalendlyInlineWidget extends CalendlyWidget {
  parentElement: Element;
}

interface CalendlyGlobal {
  initInlineWidget(params: CalendlyInlineWidget): void;
  initPopupWidget(params: CalendlyWidget): void;
}

declare global {
  interface Window {
    Calendly: CalendlyGlobal | undefined;
    calendlyLoading: Promise<[Event | null, Event | null]> | undefined;
  }
}
