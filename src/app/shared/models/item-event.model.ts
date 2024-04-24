export interface ItemEvent {
    id: number
    title: string
    subtitle: string
    image: string
    place: string
    startDate: number
    endDate: number
    description: string
}

export interface IEventState{
    events: ItemEvent[]
}