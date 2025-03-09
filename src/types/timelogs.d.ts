declare module 'timelogs' {
    export interface TimelogsType {
        id: string | number,
        employee_id: string | number,
        date: string ,
        time_in?: string | undefined,
        time_out?: string | undefined
    }
}
