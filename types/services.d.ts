export interface ServiceData {
  title: string;
  description: string;
  sections: Array<{ heading: string; content: string }>;
}

declare const servicesContent: { [key: string]: ServiceData };
export default servicesContent;
