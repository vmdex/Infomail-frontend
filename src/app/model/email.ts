export interface Email{
  recipients: Recipient[];
  emailTemplate: EmailTemplate;
  emailSchedule: EmailSchedule;
}

export interface Recipient {
  email: string;
  recipientType: RecipientType;
}

export enum RecipientType {
  TO,
  CC,
  BCC
}

export interface EmailTemplate {
  subject: string;
  body: string;
}

export interface EmailSchedule {
  sendNow: boolean;

  sendDateTime: Date;
  endDate: Date;
  repeatAt: RepeatType;

  daysOfWeek: number[];
  dayOfMonth: number;
  dayOfWeek: number;
  numberOfWeek: number;
  month: number;
}

export enum RepeatType {
  NOTHING,
  ON_WORK_DAYS,
  EVERY_DAY,
  EVERY_WEEK,
  EVERY_MONTH,
  EVERY_YEAR
}

