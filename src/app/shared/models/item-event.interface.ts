export interface ItemEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  place: string;
  startDate: string;
  endDate: string;
}

export interface EventDetail {
  event: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
  };
  sessions: SessionsEvent[];
}

export interface SessionsEvent {
  date: Date;
  availability: string;
  id: string;
  tickets: number;
  title: string;
}

export interface ItemsCart {
  title: string;
  events: SessionsEvent[];
}
